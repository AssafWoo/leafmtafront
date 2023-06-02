/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect } from "react";
import { Flex } from "../Styles/styles";
import { GlobalContext } from "../Context/global/global-context";
import { useState } from "react";
import { setTransactions } from "../Context/actions/transactions";
import { fetchData } from "../Utils/useFetch";
import { Spinner } from "@chakra-ui/spinner";
import { setUser } from "../Context/actions/user";
import { MainGreen } from "../Styles/colors";
import { TransactionManipulation } from "../Utils/dataManipulation/transactionManipulation";
import NotFound from "../Components/NotFound/not-found";
import DashboardContent from "../Modules/dashboard/dashboard-content";

const Dashboard = () => {
	const { transactionsState, transactionsDispatch, userDispatch } =
		useContext(GlobalContext);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);
	const [userData, setUserData] = useState();
	const [tableData, setTableData] = useState(
		transactionsState.allTransactions || []
	);
	const [favoriteData, setFavoriteData] = useState([]);
	const [chartData, setChartData] = useState([{}]);

	const getUserData = useCallback(
		async (didFail) => {
			if (didFail) setLoader(true);
			setError(false);
			try {
				const res = await fetchData("/profile");
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

	useEffect(()  => {
		getUserData()
	},[])

	const getTableData = useCallback(async () => {
		try {
			const res = await fetchData(`/transactions`);
			const manipulatedData = TransactionManipulation(res);
			setTableData(manipulatedData?.slice(0, 5));
			transactionsDispatch(setTransactions(manipulatedData));
		} catch (e) {
			return e;
		}
	}, [transactionsDispatch]);

	const getOffsets = async (didFail) => {
		if (didFail) setLoader(true);
		setError(false);
		try {
			const res = await fetchData(`/offsets`);
			setFavoriteData([...res]);
			setLoader(false);
		} catch (e) {
			setError(true);
			setLoader(false);
		}
	};

	useEffect(() => {
		if (userData && userData?.userName === "") {
			setLoader(true);
			getUserData();
		}
		getTableData();
		getOffsets();
		return {};
	}, [userData]);


	return (
		<Flex>
			{error ? (
				<NotFound refetch={getUserData} reload={setLoader} />
			) : loader ? (
				<Spinner color={MainGreen} />
			) : (
				userData &&
				userData?.userName !== "" && (
					<DashboardContent
						user={userData}
						chartData={chartData}
						tableData={tableData}
						reFetchTable={getTableData}
						favoriteData={favoriteData}
					/>
				)
			)}
		</Flex>
	);
};

export default Dashboard;
