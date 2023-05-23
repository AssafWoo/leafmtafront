/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import CompanyDetails from "../Modules/profile/company-details";
import { useCallback, useContext, useEffect, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { TabList, Tabs, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { DarkerTheme, MainGreen } from "../Styles/colors";
import AccountDetails from "../Modules/profile/account-details";
import { fetchData } from "../Utils/useFetch";
import { Spinner } from "@chakra-ui/spinner";
import { GlobalContext } from "../Context/global/global-context";
import { setUser } from "../Context/actions/user";
import NotFound from "../Components/NotFound/not-found";

const tabsStyle = {
  color: "white",
  bg: MainGreen,
  borderTopRightRadius: "15px",
  borderTopLeftRadius: "15px",
  transition: "ease-in .3s",
};

const Settings = () => {
  const [status, setStatus] = useState("");
  const { userState, userDispatch } = useContext(GlobalContext);
  const [userData, setUserData] = useState(userState);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleSubmit = useCallback(({ status }) => {
    setStatus(status);
  }, []);

  const getUserData = useCallback(
    async (didFail) => {
      if (didFail) setLoader(true);
      setError(false);
      try {
        const res = await fetchData(`/profile`);
        setUserData(res);
        userDispatch(setUser(res));
        setLoader(false);
        setError(false);
      } catch (e) {
        setError(true);
        setLoader(false);
      }
    },
    [userDispatch]
  );

  useEffect(() => {
    if (userData && userData?.userName === "") {
      setLoader(true);
    }
    getUserData();
  }, [userData.userName]);

  return (
    <Flex>
      <Heading {...SubHeader}>Your Profile</Heading>
      <BreakLine />
      {error ? (
        <NotFound refetch={getUserData} reload={setLoader} />
      ) : loader ? (
        <Spinner color={MainGreen} />
      ) : (
        userData &&
        userData?.userName !== "" && (
          <BoxSize flexSize="5">
            <Tabs colorScheme="cyan" defaultIndex={0}>
              <TabList>
                <Tab index={0} _selected={tabsStyle} color={DarkerTheme}>
                  Company Settings
                </Tab>
                <Tab index={1} _selected={tabsStyle} color={DarkerTheme}>
                  Account Settings
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel paddingLeft="0" paddingRight="0">
                  <CompanyDetails
                    handleSubmit={handleSubmit}
                    companyDetails={userData}
                  />
                </TabPanel>
                <TabPanel paddingLeft="0" paddingRight="0">
                  <AccountDetails accountDetails={userData} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </BoxSize>
        )
      )}
    </Flex>
  );
};

export default Settings;
