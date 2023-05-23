/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Heading } from "@chakra-ui/layout";
import {
	Flex,
	BoxSize,
	Parag,
	BreakLine,
	LittleBreakLine,
} from "../../../Styles/styles";
import {
	Blue600,
	DarkerTheme,
	FadeBlue600,
	FadeMainGreen,
	FadeMainPink,
	MainGreen,
	MainPink,
	White,
} from "../../../Styles/colors";
import { UserType } from "../../../interfaces/user";
import { FaCloud, FaTree } from "react-icons/fa";
import { useScreenSize } from "../../../Utils/useScreenSize";
import DoughNut from "../../../Components/Charts/doughnut";
import { Button, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IconStyle } from "./style";
import { BoxHeader, CenterIcon, IconRoundWrapper } from "../style";
import { GiReceiveMoney } from "react-icons/gi";
import { numberWithCommas } from "../../../Utils/dataManipulation/numberComma";

// interface Iprops {
// 	user: UserType;
// 	favoriteData: Array<any>;
// 	tableData: Array<any>;
// }

const HeaderSection = (props) => {
	const { favoriteData } = props;

	const size = useScreenSize();

	const { user } = props;

	return (
		<>
			<BoxSize
				flexSize="3"
				style={{ textAlign: "center", padding: "0" }}
				isInvisible={true}
			>
				<Flex style={{ alignItems: "stretch" }}>
					<BoxSize
						flexSize={
							size === "3-cols" || size === "2-cols" ? "2 0 25%" : "2 0 60%"
						}
						shadow={true}
					>
						<BoxHeader>Lets talk about your carbon (CO<sub>2</sub>)</BoxHeader>
						<BreakLine />
						<BoxSize
							flexSize="1"
							shadow={false}
							style={{ background: Blue600 }}
						>
							<Heading
								color={White}
								fontWeight="300"
								textAlign="left"
								fontSize="2rem"
								display="inline"
								mr=".5rem"
							>
								<FaTree
									style={{
										...IconStyle,
										background: FadeBlue600,
										color: Blue600,
									}}
								/>{" "}
								{user?.totalTreesEq ? numberWithCommas(user.totalTreesEq) : "0"}
							</Heading>
							<Parag
								style={{ display: "inline", fontSize: "1rem" }}
								color="white"
								align="left"
							>
								Equivalent of trees planted since started working with Leaf
							</Parag>
						</BoxSize>
						<BoxSize shadow={false} style={{ background: MainPink }}>
							<Heading
								color={White}
								textAlign="left"
								fontWeight="300"
								fontSize="2rem"
								display="inline"
								mr=".5rem"
							>
								<FaCloud
									style={{
										...IconStyle,
										background: FadeMainPink,
										color: MainPink,
									}}
								/>{" "}
								{user?.totalCO2
									? numberWithCommas(user.totalCO2)
									: "0"}
							</Heading>
							<Parag
								color="white"
								align="left"
								style={{ display: "inline", fontSize: "1rem" }}
							>
								Kg of CO<sub>2</sub> removed
							</Parag>
						</BoxSize>
					</BoxSize>
					<BoxSize
						flexSize={
							size === "3-cols" || size === "2-cols" ? "2 0 25%" : "2 0 60%"
						}
						shadow={true}
						style={{
							marginInlineEnd: ".5rem",
						}}
					>
						<BoxHeader>Your popular project types</BoxHeader>
						<BreakLine />
						{favoriteData.length > 0 ? (
							<DoughNut data={favoriteData} />
						) : (
							<Spinner color={MainGreen} />
						)}
					</BoxSize>
					<BoxSize
						flexSize={
							size === "3-cols" || size === "2-cols" ? "2 0 20%" : "2 0 60%"
						}
						shadow={true}
						style={{
							marginInlineEnd: ".5rem",
						}}
					>
						<BoxHeader>Total No. of transactions</BoxHeader>
						<BoxSize flexSize="1" style={{ height: "40%" }}>
							<IconRoundWrapper
								style={{
									background: FadeMainGreen,
									width: "8rem",
									height: "8rem",
									marginTop: "1.5rem",
								}}
							>
								<CenterIcon>
									<GiReceiveMoney size="4rem" />
								</CenterIcon>
							</IconRoundWrapper>
						</BoxSize>
						<BoxSize flexSize="3">
							<Parag
								align="center"
								color="black"
								style={{
									fontSize: "1.8rem",
									fontWeight: "600",
									color: MainGreen,
								}}
							>
								{user?.transactions
									? user?.transactions
									: "0"}{" "}
							</Parag>

							<Parag color="black" align="center">
								Transactions
							</Parag>
							<LittleBreakLine />
							<Link to="/projects">
								<Button
									colorScheme={"green"}
									background={FadeMainGreen}
									color={DarkerTheme}
								>
									Explore your projects choice
								</Button>
							</Link>
						</BoxSize>
					</BoxSize>
				</Flex>
			</BoxSize>
		</>
	);
};

export default React.memo(HeaderSection);
