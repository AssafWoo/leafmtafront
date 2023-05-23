/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import { GlobalContext } from "../Context/global/global-context";
import { fetchData } from "../Utils/useFetch";
import { setTransactions } from "../Context/actions/transactions";
import { Spinner, useToast } from "@chakra-ui/react";
import { MainGreen } from "../Styles/colors";
import CustomTable from "../Components/Table/react_table";
import { TransactionManipulation } from "../Utils/dataManipulation/transactionManipulation";
import NotFound from "../Components/NotFound/not-found";

const TransactionsComponent = () => {
  const { transactionsState, transactionsDispatch } = useContext(GlobalContext);
  const [transactionsData, setTransactionsData] = useState(
    transactionsState.allTransactions
  );
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
	const toast = useToast();
	const toastIdRef = useRef();

  const getTableData = useCallback(async () => {
    setError(false);
    try {
      const res = await fetchData(`/transactions`);
      const manipulatedData = TransactionManipulation(res);
      setTransactionsData(manipulatedData);
      transactionsDispatch(setTransactions(manipulatedData));
      setLoader(false);
      setError(false);
    } catch (e) {
      setError(true);
      setLoader(false);
    }
  }, [transactionsDispatch]);

  const deleteTransaction = useCallback(async (id) => {
    if (toastIdRef.current) {
			toast.close(toastIdRef.current);
		}
    try {
      const res = await fetchData(`/transactions/delete`,{
        transactionID:id
      },'POST');
      if(res) {
        toastIdRef.current = toast({
          title: `Transaction cancelled`,
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
      await getTableData();
      setLoader(false);
    } catch (e) {
      toastIdRef.current = toast({
        title: `Couldnt remove transaction, please contact us`,
        description: "",
				status: "error",
				duration: 3000,
				isClosable: true,
			});
      setLoader(false);
    }
  }, []);


  useEffect(() => {
    if (transactionsData?.length === 0 || !transactionsData) {
      setLoader(true);
    }
    getTableData();
  }, []);

  return (
    <Flex>
      <Heading {...SubHeader}>Transactions</Heading>
      <BreakLine />
      <BoxSize
        flexSize="5"
        style={{
          borderRadius: "15px",
        }}
        shadow={true}
      >
        {loader && <Spinner color={MainGreen} />}

        {error && <NotFound refetch={getTableData} reload={setLoader} />}

        {transactionsData && (
          <CustomTable
            data={transactionsData}
            displayPages={true}
            reFetch={getTableData}
            deleteTransaction={deleteTransaction}
          />
        )}
      </BoxSize>
    </Flex>
  );
};

export default TransactionsComponent;
