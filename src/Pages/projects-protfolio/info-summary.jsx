import { Badge, Heading } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import {
	DarkerTheme,
	LightBlue,
	MainGreen,
	MainPink,
} from "../../Styles/colors";
import {
	BoxSize,
	BreakLine,
	Flex,
	Parag,
	SubHeader,
} from "../../Styles/styles";

const InfoSummary = (
	<Flex>
		<BoxSize>
			<Heading color={DarkerTheme} {...SubHeader}>
				How to use
			</Heading>
			<BreakLine />
			<Parag color="black" style={{ fontSize: "1rem" }}>
				Leaf ensure that your funding goes to your choosen climate projects, by
				transferring it to the project implementation partners. They then send
				equivalent carbon credits to Leaf's carbon registry, which are then
				cancelled or retired.
				<br />
				you can choose the ones you want your customers to see and contribute to
				while purchasing your products.
			</Parag>
			<BreakLine />
			<Parag color="black">
				<Badge
					textTransform="none"
					borderRadius="15px"
					px="1"
					py="1"
					cursor="pointer"
					colorScheme="green"
					bg={MainGreen}
					marginRight=".2rem"
				>
					<FaCheck color={"white"} />
				</Badge>{" "}
				- the project is currently shown to your users.
			</Parag>
			<Parag color="black" style={{ marginTop: "1rem" }}>
				<Badge
					textTransform="none"
					borderRadius="15px"
					px="1"
					py="1"
					color="white"
					cursor="pointer"
					colorScheme="blue"
					fontWeight="300"
					bg={LightBlue}
					marginRight=".2rem"
				>
					{" "}
					pending...
				</Badge>
				- the project is awaiting your save.
			</Parag>
			<Parag style={{ marginTop: "1rem", color: MainPink }}>
				If you remove all projects you'll be set back to our default (all
				projects will be active)
			</Parag>
			<BreakLine />
			<Parag style={{ fontWeight: 600, color: MainGreen }}>
				Please choose wisley and add the projects that stands with your
				company's values.
			</Parag>
		</BoxSize>
	</Flex>
);

export default InfoSummary;
