import { Badge, Heading } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import {
	DarkerTheme,
	LightBlue,
	MainGreen,
	MainOrange,
	MainPink,
	White,
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
			Leaf ensures that your funding directly supports your chosen climate projects by transferring it to our project implementation partners. These partners, in turn, provide equivalent carbon credits to Leaf's carbon registry, which are then canceled or retired. This allows you to select the specific projects you want your customers to see and contribute to when purchasing your products.
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
                        margin=".5rem 0rem"
                        padding=".5rem"
                        color={White}
                        cursor="pointer"
                        colorScheme="blue"
                        fontWeight="600"
                        bg={MainOrange}
						marginRight=".5rem"
                      >
                        {" "}
                        Please save your changes 
                      </Badge>
					 - The project is currently awaiting your save. Once saved, it will be updated in your selected projects.			</Parag>
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
