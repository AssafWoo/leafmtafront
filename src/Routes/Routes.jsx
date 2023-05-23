/* eslint-disable no-unused-vars */
import { Route, Switch } from "react-router";
import TransactionsComponent from "../Pages/transactions";
import Login from "../Pages/login";
import Dashboard from "../Pages/main-dashboard";
import Signup from "../Pages/signup/sign-up";
import ErrorPage from "../Pages/404";
import { Layout } from "../Layout/Layout";
import ProjectsMarketplace from "../Pages/projects-protfolio/projects";
import { GlobalContext } from "../Context/global/global-context";
import { useContext, useState } from "react";
import { useEffect } from "react";
import SelfPurchase from "../Pages/selfPurchase/selfPurchase";
import Profile from '../Pages/profile'
const Routes = () => {
	const { userState } = useContext(GlobalContext);
	const [authUser, setAuthUser] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("token")) {
			// i need to authenticate that the token is valid
			setAuthUser(true);
		} else {
			setAuthUser(false);
		}
	}, [userState]);

	return (
		<Switch>
			{localStorage.getItem("token") ? (
				<>
					<Layout>
						<Switch>
							<Route
								exact
								path="/transactions"
								component={TransactionsComponent}
							/>
							<Route exact path="/projects" component={ProjectsMarketplace} />
							<Route exact path="/dashboard" component={Dashboard} />
							<Route exact path="/profile" component={Profile} />

							<Route exact path="/self-purchase" component={SelfPurchase} />
							<Route exact path="/" component={Dashboard} />
							<Route path="/*" component={Dashboard} />
						</Switch>
					</Layout>
				</>
			) : (
				<Switch>
					<Route exact path="/error" component={ErrorPage} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/" component={Login} />
					<Route path="/*" component={ErrorPage} />
				</Switch>
			)}
		</Switch>
	);
};
export default Routes;
