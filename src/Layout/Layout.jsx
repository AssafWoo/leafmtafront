import TopBar from "../Modules/TopBar/TopBar";
import { AppWrapper, BreakLine, MainWrapper } from "../Styles/styles";
import { useScreenSize } from "../Utils/useScreenSize";

export const Layout = ({ children }) => {
	const screenSize = useScreenSize();

	return (
		<>
			<TopBar size={screenSize} />
			<BreakLine />
			<MainWrapper size={screenSize}>
				<AppWrapper size={true}>{children}</AppWrapper>
			</MainWrapper>
		</>
	);
};
