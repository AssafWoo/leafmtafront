/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Heading } from "@chakra-ui/layout";
import { BoxSize, Flex, Parag, SubHeader } from "../../Styles/styles";
import OffsetCard from "../../Components/Cards/Offsets/OffsetCard";
import { useCallback, useContext, useRef } from "react";
import { Skeleton, useToast } from "@chakra-ui/react";
import { Blue600, LightBlue } from "../../Styles/colors";
import { fetchData } from "../../Utils/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { getToken } from "../../Utils/getToken";
import ModalWindow from "../../Components/Modal/modal_window";
import { FaInfoCircle } from "react-icons/fa";
import NotFound from "../../Components/NotFound/not-found";
import InfoSummary from "./info-summary";
import axios from "../../axiosConfig";
import { GlobalContext } from "../../Context/global/global-context";
import { TransactionManipulation } from "../../Utils/dataManipulation/transactionManipulation";
import {
  getMostFrequentOffsetUuid,
  getProjectByUuid,
} from "../../Utils/getFavoriteProject";
import { useScreenSize } from "../../Utils/useScreenSize";

const ProjectsMarketplace = () => {
  const size = useScreenSize();
  const [projects, setProjects] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);
  const [error, setError] = useState(false);
  const toast = useToast();
  const toastIdRef = useRef();
  const [loader, setLoader] = useState(false);
  const [open, setOpen] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [mostCommonProject, setMostCommonProject] = useState({});
  const [infoOpen, setInfoOpen] = useState(false);
  let validToken = getToken();
  let config = {
    headers: {
      Authorization: "Bearer " + validToken,
    },
  };

  const getTransactions = useCallback(async () => {
    try {
      const res = await fetchData(`/transactions`);
      const manipulatedData = TransactionManipulation(res);
      setTransactions(manipulatedData?.slice(0, 5));
    } catch (e) {
      return e;
    }
  }, []);

  const getOffsets = async (didFail) => {
    if (didFail) setLoader(true);
    setError(false);
    try {
      const res = await fetchData(`/offsets`);
      setProjects(res);
      const allFavs = extractFavorite(res);
      setFavoriteData([...allFavs]);
      setLoader(false);
    } catch (e) {
      setError(true);
      setLoader(false);
    }
  };

  const changeOffsets = async (ids) => {
    const data = await axios.post(
      `/offsets`,
      { allowed_for_merchant: [...ids] },
      config
    );
    return data;
  };

  useEffect(() => {
    if (projects?.length === 0) {
      setLoader(true);
    }
    getOffsets();
    getTransactions();
  }, []);

  const extractFavorite = (data) => {
    const favorites = data?.filter((project) => project.allowed_for_merchant);
    return favorites;
  };

  const addFavorite = useCallback(
    async (project) => {
      setFavoriteData([...favoriteData, project]);
    },
    [favoriteData]
  );

  const removeFavorite = useCallback(
    async (project) => {
      const newFavoriteArray = favoriteData?.filter(
        (item) => item.uuid !== project.uuid
      );
      setFavoriteData(newFavoriteArray);
    },
    [favoriteData]
  );

  const successToast = () => {
    toastIdRef.current = toast({
      title: "Project changed",
      description: "",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const saveChanges = async () => {
    setLoader(true);
    if (projects?.length > 0) {
      const ids = favoriteData.map((item) => item.uuid);
      if (toastIdRef.current) toast.close(toastIdRef.current);
      try {
        const changedOffsets = await changeOffsets(ids);
        const newProjectData = await getOffsets();
        setLoader(false);
        successToast();
      } catch (e) {
        setLoader(false);
      }
    }
  };
  const toggleInfoSummary = () => {
    setInfoOpen(true);
    setOpen(true);
  };

  useEffect(() => {
    if (transactions.length > 0 && favoriteData.length > 0) {
      const mostPopularID = getMostFrequentOffsetUuid(transactions);
      const mostPopularOffset = getProjectByUuid(mostPopularID, favoriteData);
      setMostCommonProject({ ...mostPopularOffset });
    }
  }, [transactions, favoriteData]);
  return (
    <Flex>
      <Heading {...SubHeader}>
        Project Catalog{" "}
        <FaInfoCircle
          style={{ display: "inline-block", color: Blue600, cursor: "pointer" }}
          size={"1.1rem"}
          onClick={() => toggleInfoSummary()}
        />
      </Heading>
      <Flex>
        <BoxSize isInvisible={true} style={{ paddingLeft: "0" }}>
          <Parag color="black">
            Leaf projects are verified by offical 3rd-party organizations to
            ensure our projects match the impact of the transaction and meet
            sustainability standards.
          </Parag>
        </BoxSize>
      </Flex>
      {(size === "fullscreen" ||
        size === "1-cols") && (
          <BoxSize
            isInvisible={true}
            style={{ textAlign: "right", paddingLeft: "0" }}
          >
            <Button
              colorScheme="blue"
              bg={LightBlue}
              onClick={() => saveChanges()}
            >
              Save changes
            </Button>
          </BoxSize>
        )}
      {loader && (
        <Flex
          style={{
            marginBottom: "3rem",
            display: "block",
            width: "100%",
          }}
        >
          <Skeleton>
            <BoxSize />
          </Skeleton>
          <Skeleton>
            <BoxSize />
          </Skeleton>
        </Flex>
      )}
      {error ? (
        <NotFound refetch={getOffsets} reload={setLoader} />
      ) : (
        projects?.length > 0 && (
          <>
            {loader ? (
              ""
            ) : (
              <Flex>
                {projects.map((item) => (
                  <OffsetCard
                    type="offset"
                    key={item.id}
                    addFavorite={addFavorite}
                    removeFavorite={removeFavorite}
                    item={{ ...item }}
                    isFav={false}
                    mostCommonProject={mostCommonProject}
                  />
                ))}
              </Flex>
            )}
            <BoxSize
              isInvisible={true}
              style={{
                textAlign: "right",
                paddingLeft: "0",
                marginBottom: "3rem",
              }}
            >
              <Button
                colorScheme="blue"
                bg={LightBlue}
                onClick={() => saveChanges()}
              >
                Save changes
              </Button>
            </BoxSize>
          </>
        )
      )}
      {open && (
        <ModalWindow
          open={open}
          onOpen={() => setOpen(true)}
          header={""}
          setOpen={setOpen}
          handleClose={() => setInfoOpen(false)}
          content={InfoSummary}
        />
      )}
    </Flex>
  );
};

export default ProjectsMarketplace;
