import { Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { BoxHeader } from "../../../Modules/dashboard/style";
import {
  FadeMainGreen,
  MainGrey,
  MainPink,
  MainRed,
} from "../../../Styles/colors";
import {
  BoxSize,
  BreakLine,
  CheckoutButton,
  Flex,
  Parag,
} from "../../../Styles/styles";
import { numberWithCommas } from "../../../Utils/dataManipulation/numberComma";

const OrderSummary = ({
  fields,
  receivedPrice,
  openPayment,
  totalPriceToCharge,
  handleGetTransactionID,
  loader,
  error,
  shadow,
  resetTransactionStatus,
}) => {
  const [spinner, setSpinner] = useState(false);
  const handleClick = async () => {
    resetTransactionStatus();
    setSpinner(true);
    await handleGetTransactionID();
    setSpinner(false);
  };
  return (
    <BoxSize shadow={shadow}>
      <BoxHeader style={{ color: MainGrey }}>Order Summary</BoxHeader>
      <BreakLine />
      <Flex>
        {fields.map((field) => {
          if (!field.total) {
            return (
              <>
                <BoxSize flexSize="2 0 70%">
                  <Parag
                    align="left"
                    color="black"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {field.field}
                  </Parag>
                </BoxSize>
                <BoxSize flexSize="2 0 20%">
                  <Parag
                    align="right"
                    color="black"
                    style={{ fontSize: "1.1rem" }}
                  >
                    {field.amount == "" ? 0 : field.amount}{" "}
                    {field.amount == 0 ? "" : field.amountAddon}
                  </Parag>
                </BoxSize>
              </>
            );
          }
        })}
      </Flex>
      <hr />
      <BreakLine />

      <Flex style={{ borderRadius: "25px", background: FadeMainGreen }}>
        <BoxSize flexSize="2 0 70%" isInvisible={true}>
          <Parag align="right" color="black">
            Total Price(USD)
          </Parag>
        </BoxSize>

        <BoxSize flexSize="2 0 20%" isInvisible={true}>
          <Parag align="right" color="black">
            {loader ? (
              error ? (
                ""
              ) : (
                <Spinner />
              )
            ) : (
              <>{`${numberWithCommas(
                String(
                  Number.parseFloat(
                    Number(totalPriceToCharge) > 0 ? totalPriceToCharge : 0
                  )
                )
              )}$`}</>
            )}
          </Parag>
        </BoxSize>
      </Flex>
      {error && (
        <Parag style={{ color: MainRed }}>
          Woops, we encountered a problem...please try again
        </Parag>
      )}
      <BreakLine />
      <CheckoutButton
        colorScheme="pink"
        background={MainPink}
        disabled={!receivedPrice || error}
        onClick={handleClick}
      >
        {spinner ? (
          <Spinner colorScheme={"white"} color="white" />
        ) : (
          "Lets roll!"
        )}
      </CheckoutButton>
    </BoxSize>
  );
};

export default OrderSummary;
