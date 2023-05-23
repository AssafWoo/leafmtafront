import { Heading } from "@chakra-ui/layout";
import { LightBlue, White } from "../../Styles/colors";
import { BoxSize, BreakLine, Parag, SubHeader } from "../../Styles/styles";
import { useScreenSize } from "../../Utils/useScreenSize";
import FeaturedVideo from "./video/video";

const RegisterContent = ({ isDisabled }) => {
	const size = useScreenSize();

	return (
		<BoxSize
			isInvisible={false}
			flexSize="2"
			style={{
				width: "fit-content",
				color: "white",
				background: LightBlue,
				marginLeft:
					size === "fullscreen" || size === "1-cols" ? ".2rem" : "0rem",
				borderTopLeftRadius:
					size === "fullscreen" || size === "1-cols" ? "15px" : "0",
				borderBottomLeftRadius:
					size === "fullscreen" || size === "1-cols" ? "15px" : "0",
			}}
		>
			{/* <LeafIcon style={{ margin: "0" }} isSmall={false} src={LeafLogo} /> */}
			<Heading {...SubHeader} color={White}>
				Welcome, your journey starts now
			</Heading>
			<BreakLine />
			<FeaturedVideo />
		</BoxSize>
	);
};

export default RegisterContent;
