import { Heading, Img } from "@chakra-ui/react";
import { GiPartyPopper } from "react-icons/gi";
import { DarkerTheme, LightTheme, MainPink } from "../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag, SubHeader } from "../Styles/styles";
import PartyIcon from "../Assets/images/party.svg";

const Thanks = () => {
	return (
		<Flex style={{ justifyContent: "center" }}>
			<BoxSize style={{ background: LightTheme }}>
				<BoxSize isInvisible={true} style={{ padding: "1rem 1rem 0rem 1rem" }}>
					<Heading
						{...SubHeader}
						style={{ textAlign: "center", fontWeight: 600, color: MainPink }}
					>
						<GiPartyPopper size={"5rem"} style={{ display: "inline-block" }} />
						<br />
						Thank you for your purchase!
					</Heading>
					<BreakLine />

					<Parag
						style={{
							textAlign: "center",
							fontSize: "1.4rem",
							color: DarkerTheme,
						}}
					>
						Your transaction is on it's way to make a difference!
						<br /> The world is a little better place thanks to you
					</Parag>
				</BoxSize>
				<BoxSize
					isInvisible={true}
					style={{ display: "contents", padding: "1rem" }}
				>
					<Img style={{ width: "50%", margin: "auto" }} src={PartyIcon} />
				</BoxSize>
			</BoxSize>
		</Flex>
	);
};
export default Thanks;
