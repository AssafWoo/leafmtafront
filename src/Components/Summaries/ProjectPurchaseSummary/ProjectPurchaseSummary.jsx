import { MainGreen, MainGrey, MainPink } from "../../../Styles/colors";
import {
	BoxSize,
	BreakLine,
	Flex,
	LittleBreakLine,
	Parag,
} from "../../../Styles/styles";
import { BenefitsList, BenefitsListItem } from "../OffsetSummary/style";
import { Button, Image } from "@chakra-ui/react";
import { BoxHeader } from "../../../Modules/dashboard/style";

const ProjectPurchaseSummary = ({ project }) => {
	const openFacts = () => {
		window.open(
			`https://registry.goldstandard.org/projects/details/3662`, // just example
			"_blank"
		);
	};
	const directToGoogleMap = () => {
		window.open(
			`http://maps.google.com?q=${project.address.latitude},${project.address.longitude}`,
			"_blank"
		);
	};

	return (
		<BoxSize flexSize="2 0 60%" shadow={true}>
			<Flex>
				<BoxSize flexSize="2 0 38%">
					<Image
						style={{
							borderRadius: "15px",
						}}
						src={project.url}
					/>
				</BoxSize>
				<BoxSize flexSize="2 0 60%">
					<BoxHeader>{project.name}</BoxHeader>
					<Parag style={{ color: MainGrey }}>{project.address.country}</Parag>
					<LittleBreakLine />
					<Parag style={{ color: MainGrey }}>
						Project owner: {project.developer}
					</Parag>
					<LittleBreakLine />
					<Parag style={{ color: MainGrey }}>
						Verifier: {project.verifier}
					</Parag>
					<LittleBreakLine />

					<Parag style={{ color: MainGrey }}>
						<Button
							colorScheme={"green"}
							background={MainGreen}
							borderRadius="20px"
							fontSize={".8rem"}
							onClick={() => directToGoogleMap()}
						>
							View location
						</Button>
						<Button
							onClick={() => openFacts()}
							colorScheme={"pink"}
							background={MainPink}
							borderRadius="20px"
							marginInlineStart={".2rem"}
							fontSize={".8rem"}
						>
							View Facts & History
						</Button>
					</Parag>
				</BoxSize>
			</Flex>
			<BoxSize>
				<Parag color="black" style={{ fontSize: "1.2rem" }}>
					Summary
				</Parag>
				<LittleBreakLine />
				<Parag color="black">{project.description}</Parag>
				<BreakLine />
				<Parag color="black" style={{ fontSize: "1.2rem" }}>
					Project Benefits
				</Parag>
				<LittleBreakLine />
				<BenefitsList style={{ textAlign: "left" }}>
					{project &&
						project?.benefits.map((benefit) => (
							<BenefitsListItem>{benefit}</BenefitsListItem>
						))}
				</BenefitsList>
			</BoxSize>
		</BoxSize>
	);
};

export default ProjectPurchaseSummary;
