import { Flex, BoxSize } from "../../Styles/styles";
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
} from "react-share";
import { useEffect, useState } from "react";
import { isObjEmpty } from "../../Utils/isObjEmpty";
import { MainGreen } from "../../Styles/colors";
import { Spinner } from "@chakra-ui/react";

const IconStyle = {
	padding: ".2px",
	fontSize: "1.2rem",
	cursor: "pointer",
	margin: ".4rem",
	background: "transparent",
};

const messageType = (type, item, companyName) => {
	if (type === "offset")
		return `We're excited to share that we now help flight change and work with: ${
			item.header || item.name
		}`;
	if (type === "impact")
		return `We're excited to share our latest impact here in ${companyName}: ${item.socialMsg}`;
	if (type === "favOffset")
		return `We take climate change very seriously here in ${companyName}, in fact our users most liked project is: ${
			item.header || item.name
		}`;
};

const Social = ({ item, type, userState, error = true }) => {
	const [message, setMessage] = useState("");
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		setLoader(true);
		if (!isObjEmpty(userState)) {
			const userMsg = messageType(type, item, userState?.companyName);
			setLoader(false);
			setMessage(userMsg);
		}
	}, [item, type, userState]);

	useEffect(() => {
		if (error) setLoader(false);
	}, [error]);

	return (
		<>
			<Flex
				style={{
					textAlign: "center",
					position: "absolute",
					top: ".5rem",
					right: "0rem",
				}}
			>
				{loader && <Spinner color={MainGreen} />}
				{message !== "" && (
					<>
						<BoxSize style={IconStyle}>
							<FacebookShareButton
								title={message}
								url={"https://ecoleaf.io"} // change to our domain
								hashtags={["savetheplanet", "environmentalsustainability"]}
							>
								<FacebookIcon size={32} round={true} />
							</FacebookShareButton>
						</BoxSize>
						<BoxSize style={IconStyle}>
							<WhatsappShareButton
								title={message}
								url={"https://ecoleaf.io"} // change to our domain
								hashtags={[item.header, item.name]}
							>
								<WhatsappIcon size={32} round={true} />
							</WhatsappShareButton>
						</BoxSize>
						<BoxSize style={IconStyle}>
							<LinkedinShareButton
								title="Check us out!"
								summary={message}
								source={"https://ecoleaf.io"} // change to our domain
								url={"https://ecoleaf.io"} // change to our domain
							>
								<LinkedinIcon size={32} round={true} />
							</LinkedinShareButton>
						</BoxSize>
						<BoxSize style={IconStyle}>
							<TwitterShareButton
								title={message}
								url={"https://ecoleaf.io"} // change to our domain
								hashtags={["savetheplanet", "environmentalsustainability"]}
							>
								<TwitterIcon size={32} round={true} />
							</TwitterShareButton>
						</BoxSize>
					</>
				)}
			</Flex>
		</>
	);
};

export default Social;
