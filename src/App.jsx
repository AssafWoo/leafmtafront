import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import { GlobalProvider } from "./Context/global/global-context";

const App = () => {
	return (
		<GlobalProvider>
			<BrowserRouter>
				{/* <FloatEffect size="lg" /> */}
				<Routes />
			</BrowserRouter>
		</GlobalProvider>
	);
};

export default App;
