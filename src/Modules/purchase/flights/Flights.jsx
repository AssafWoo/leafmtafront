import { Checkbox, Input, Select } from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { BoxSize, Flex, Parag } from "../../../Styles/styles";
import { useForm } from "react-hook-form";
import { DarkerTheme, LightTheme } from "../../../Styles/colors";
import { BoxHeader } from "../../../Modules/dashboard/style";
import { debounce } from "../../../Utils/useDebounce";
import Checkout from "../../../Modules/checkout/checkout";
import { orderSummaryFields, stateFields } from "./fields";
import { fetchData } from "../../../Utils/useFetch";
import { Option, decription } from "./style";
import Airports from "../../../Assets/data/airports.json";
import AutoCompleteInput from "../../../Components/AutoComplete/AutoComplete";
import { removeWhiteSpaces } from "./utils";
import {
  extractFavorite,
  findProjectByName,
  validateEssentials,
} from "./utils";

const Flights = () => {
  const [error, setError] = useState(false);
  const [projects, setProjects] = useState([]);
  const favoriteProjects = useRef([]);
  const [loader, setLoader] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false); // indicates if to show spinner
  const [clear, setClear] = useState(false); // indicates if should clear the autocomplete
  const [transactionID, setTransactionID] = useState("");
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [transactionStatus, setTransactionStatus] = useState(null); // indicates if a transaction is finished
  const [receivedPrice, setReceivedPrice] = useState(false);
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      totalPrice: "",
      totalAmount: 0,
      origin: "",
      destination: "",
      roundTrip: true,
      numberOfPassengers: 1,
      project: "",
      journyes: 1,
    },
  });

  const getOffsets = async (didFail) => {
    if (didFail) setLoader(true);
    setError(false);
    try {
      const res = await fetchData(`/offsets`);
      const favProjects = extractFavorite(res);
      setProjects(res);
      reset({ ...getValues(), project: favProjects[0].name });
      favoriteProjects.current = [...favProjects];
      setLoader(false);
    } catch (e) {
      setError(true);
      setLoader(false);
    }
  };

  useEffect(() => {
    getOffsets();
  }, []);

  const getPaymentAmount = useCallback(async () => {
    const validInputs = validateEssentials(
      getValues("origin"),
      getValues("destination")
    );

    if (validInputs) {
      setLoader(true);
      setError(false);
      const chosenProject = findProjectByName(
        getValues("project"),
        favoriteProjects.current
      );
      try {
        const res = await fetchData(
          "/estimate",
          {
            sPoint: getValues("origin"),
            ePoint: getValues("destination"),
            passengers: getValues("numberOfPassengers"),
            journeys: getValues("journyes"),
            roundTrip: getValues("roundTrip"),
            project: chosenProject.uuid,
          },
          "POST"
        );
        setLoader(false);
        if (res) {
          setReceivedPrice(true);
          reset({
            ...getValues(),
            totalPrice: res.total_cost,
            totalAmount: res.co2Amount,
          });
        }
      } catch (e) {
        setError(true);
      }
    }
  }, [getValues, validateEssentials, reset, favoriteProjects, projects]);

  const handleAutoComplete = useCallback(
    (key, airport) => {
      reset({ ...getValues(), [key]: airport });
      getPaymentAmount();
    },
    [getValues, getPaymentAmount, reset]
  );

  const handleGetTransactionID = useCallback(
    async (data) => {
      setOpenPaymentModal(false);
      try {
        const chosenProject = findProjectByName(
          getValues("project"),
          favoriteProjects.current
        );
        const res = await fetchData(
          "/transactions",
          {
            sPoint: getValues("origin"),
            ePoint: getValues("destination"),
            passengers: getValues("numberOfPassengers"),
            roundtrip: getValues("roundTrip"),
            journeys: getValues("journyes"),
            project: chosenProject.uuid,
          },
          "POST"
        );
        setLoader(false);
        if (res) {
          setOpenPaymentModal(true);
          return setTransactionID(res.transaction_data.uuid);
        }
        setOpenPaymentModal(false);
        return setTransactionID("");
      } catch (e) {
        setLoader(false);
        setError(true);
      }
    },
    [getValues]
  );

  const clearFields = useCallback(() => {
    reset({
      totalPrice: "",
      totalAmount: 0,
      origin: "",
      destination: "",
      roundTrip: false,
      numberOfPassengers: 1,
      project: "",
      journyes: 0,
    });
    setClear(true);
    setReceivedPrice(false);
  }, [reset]);

  const handlePayment = useCallback(
    async (data) => {
      setPaymentProcessing(true);
      if (transactionID !== "") {
        setPaymentProcessing(true);
        setTransactionID("");
        setLoader(true);
        try {
          const res = await fetchData(
            `/transactions/${transactionID}/pay`,
            {
              card_number: removeWhiteSpaces(data.number),
              cvv: data.cvc,
              name_on_card: data.name,
              expire_date: data.expiry.replace("/", ""),
            },
            "POST"
          );
          clearFields();
          setPaymentProcessing(false);
          setLoader(false);
          setOpenPaymentModal(true);
          setTransactionID("");
          if (res.paymentApproved && res.paymentEnded) {
            setTransactionStatus(true);
            return setTransactionID(res.id);
          }
          return setTransactionStatus(false);
        } catch (e) {
          setError(true);
        }
      }
    },
    [transactionID, clearFields],
    []
  );

  const handleDebounce = useMemo(() => {
    return debounce((key, value) => {
      if (value === "") setReceivedPrice(false);
      reset({ ...getValues(), [key]: value });
      getPaymentAmount();
    }, 300);
  }, [getValues, reset, getPaymentAmount]);

  const orderSummaryFieldsData = orderSummaryFields(
    (getValues("totalAmount") / 1000).toFixed(2),
    getValues("totalPrice")
  );
  const stateFieldsData = stateFields(handleDebounce, handleAutoComplete);

  const resetTransactionStatus = useCallback(() => {
    setTransactionStatus(null);
  }, []);

  return (
    <Flex style={{ margin: "1.5rem 0rem" }}>
      <Checkout
        pageHeader={"Reduce Inhouse Travel"}
        description={decription}
        receivedPrice={receivedPrice}
        transactionID={transactionID}
        price={getValues("totalPrice")}
        openPaymentModal={openPaymentModal}
        handlePayment={handlePayment}
        handleGetTransactionID={handleGetTransactionID}
        loader={loader}
        error={error}
        resetTransactionStatus={resetTransactionStatus}
        transactionStatus={transactionStatus}
        paymentProcessing={paymentProcessing}
        orderFieldsSummary={orderSummaryFieldsData}
        children={
          <form>
            <BoxSize style={{ marginBottom: ".5rem" }} shadow={true}>
              <Flex>
                {stateFieldsData.map((section) => {
                  if (section.type === "autoComplete") {
                    return (
                      <BoxSize
                        flexSize={section.flexWidth}
                        style={{ textAlign: "left" }}
                      >
                        <BoxHeader>
                          {section.boxHeader}
                          {section.toolTip}
                        </BoxHeader>
                        <AutoCompleteInput
                          clear={clear}
                          suggestions={Airports}
                          control={control}
                          inputDetails={section}
                          handleAutoCompleteSelect={handleAutoComplete}
                        />
                      </BoxSize>
                    );
                  }
                  if (section.type === "checkbox") {
                    return (
                      <BoxSize
                        flexSize={section.flexWidth}
                        style={{ textAlign: "left" }}
                      >
                        <Checkbox
                          type={section.type}
                          size="lg"
                          id={section.name}
                          name={section.name}
                          control={control}
                          defaultChecked={getValues(section.name)}
                          onChange={(e) => {
                            reset({
                              ...getValues(),
                              [section.name]: e.target.value,
                            });
                            getPaymentAmount();
                          }}
                        >
                          <Parag color="black" style={{ fontSize: "1rem" }}>
                            {section.boxHeader}
                          </Parag>{" "}
                        </Checkbox>
                      </BoxSize>
                    );
                  }
                  if (section.type === "select") {
                    return (
                      <BoxSize
                        flexSize={section.flexWidth}
                        style={{ textAlign: "left" }}
                      >
                        <BoxHeader>
                          {section.boxHeader}
                          {section.toolTip}
                        </BoxHeader>
                        <Select
                          type={section.type}
                          size="md"
                          id={section.name}
                          name={section.name}
                          value={getValues(section.name)}
                          onChange={(e) => {
                            console.log(e.target.value);
                            reset({
                              ...getValues(),
                              [section.name]: e.target.value,
                            });
                            getPaymentAmount();
                          }}
                          color={"black"}
                          style={{
                            background: LightTheme,
                          }}
                          control={control}
                        >
                          {favoriteProjects.current &&
                            favoriteProjects.current.map((offset) => (
                              <Option
                                uuid={offset.uuid}
                                option={offset.name}
                                key={offset.name}
                              />
                            ))}
                        </Select>
                      </BoxSize>
                    );
                  }
                  return (
                    <BoxSize
                      flexSize={section.flexWidth}
                      style={{ textAlign: "left" }}
                    >
                      <BoxHeader>
                        {section.boxHeader}
                        {section.toolTip}
                      </BoxHeader>
                      <Input
                        type={section.type}
                        mb="3"
                        color={DarkerTheme}
                        control={control}
                        width={section.width}
                        defaultValue={getValues(section.name)}
                        placeholder={section.placeholder}
                        name={section.name}
                        onChange={(e) => {
                          if (section.maxLength && section.type === "number") {
                            const cut = () => {
                              e.target.value = Math.max(
                                0,
                                parseInt(e.target.value)
                              )
                                .toString()
                                .slice(0, section.maxLength);
                            };
                            cut();
                          }
                          section.func &&
                            section.func(section.name, e.target.value);
                        }}
                        id={section.name}
                        border="none"
                        background={LightTheme}
                      />
                    </BoxSize>
                  );
                })}
              </Flex>
            </BoxSize>
          </form>
        }
      />
    </Flex>
  );
};

export default Flights;
