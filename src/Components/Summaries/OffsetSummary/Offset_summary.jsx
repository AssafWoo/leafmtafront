import { Button, Heading, Image } from "@chakra-ui/react";
import { MainGreen, MainGrey, MainPink } from "../../../Styles/colors";
import {
	BoxSize,
	BreakLine,
	Flex,
	LittleBreakLine,
	Parag,
	SDGElement,
	SDGWrapper,
	SubHeader,
} from "../../../Styles/styles";
import { useScreenSize } from "../../../Utils/useScreenSize";
import SDGCard from "../../Cards/SDG/SDGCard";
import { SDGOptions } from "../../Cards/SDG/SDGOptions";
import { BenefitsList, BenefitsListItem } from "./style";

const OffsetSummary = ({ offset }) => {
	const size = useScreenSize();
	const directToGoogleMap = () => {
		window.open(
			`http://maps.google.com?q=${offset.lat},${offset.lng}`,
			"_blank"
		);
	};
	const directToFacts = () => {
		window.open(
			`https://registry.goldstandard.org/projects/details/3662`, // just example
			"_blank"
		);
	};
	return (
		<Flex>
			<BoxSize>
				<Flex>
					<BoxSize
						flexSize={
							size === "fullscreen" || size === "1-cols" ? "2 0 80%" : "2 0 30%"
						}
					>
						<Image
							style={{
								borderRadius: "15px",
							}}
							src={offset.offset_thumbnail}
						/>
					</BoxSize>
					<BoxSize flexSize="2 0 60%">
						<Heading {...SubHeader}>{offset.name}</Heading>
						<LittleBreakLine />
						<Parag color="black">{offset.country}</Parag>
						<LittleBreakLine />
						<Parag style={{ color: MainGrey }}>Project Owner: {offset.offset_verifier}</Parag>
						<LittleBreakLine />
						<Parag style={{ color: MainGrey }}>Project Verifier:{offset.offset_verifier}</Parag>
						<LittleBreakLine />
						<Parag style={{ color: MainGrey }}>
							Carbon Removal / {offset.offset_type}
						</Parag>
						<LittleBreakLine />
						<Parag style={{ color: MainGrey }}>
							{offset.price_per_ton_usd}$ per ton CO<sub>2</sub>
						</Parag>
						<LittleBreakLine />
						<Button
							colorScheme={"green"}
							background={MainGreen}
							borderRadius="20px"
							fontSize={".8rem"}
							padding="6px 12px"
							onClick={() => directToGoogleMap()}
						>
							View location
						</Button>
						<Button
							colorScheme={"pink"}
							background={MainPink}
							borderRadius="20px"
							fontSize={".8rem"}
							marginInlineStart=".2rem"
							padding="6px 12px"
							onClick={() => directToFacts()}
						>
							View Facts & History
						</Button>
					</BoxSize>
				</Flex>
				<LittleBreakLine />
				<Flex>
					<Parag color="black" style={{ fontSize: "1.2rem" }}>
						Sustainable Development Goals(SDG's):
					</Parag>
					<LittleBreakLine />
					<SDGWrapper>
						{offset.sdg.split(',').map((sdg) => (
							<SDGCard SDG={SDGOptions[`SDG${sdg}`]} />
						))}
						<SDGElement></SDGElement>
					</SDGWrapper>
				</Flex>
				<BreakLine />
				<BreakLine style={{ margin: "1rem 0" }} />
				<Parag color="black" style={{ fontSize: "1.2rem" }}>
					Summary
				</Parag>{" "}
				<LittleBreakLine />
				<hr />
				<LittleBreakLine />
				<Parag color="black">{offset.description}</Parag>
				<BreakLine />
				<Parag color="black" style={{ fontSize: "1.2rem" }}>
					Benefits:
				</Parag>
				<BenefitsList>
					{offset &&
						offset?.benefits.split(';').map((benefit) => (
							<BenefitsListItem>{benefit}</BenefitsListItem>
						))}
				</BenefitsList>
				<BreakLine />
				{/* <Button colorScheme="pink" bacground={MainPink}>
					Purchase
				</Button> */}
			</BoxSize>
		</Flex>
	);
};

export default OffsetSummary;
