import React, { useEffect } from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize, BreakLine, LeafIcon } from "../Styles/styles";
import { Button } from "@chakra-ui/button";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import { DarkerTheme, MainPink } from "../Styles/colors";
import LeafLogo from "../Assets/images/newLeaf.png";

const ErrorPage = () => {
	useEffect(() => {
		localStorage.clear();
	}, []);
	return (
		<>
			<BreakLine />
			<Flex Flex justify="center" align="center" m="auto" w="fit-content">
				<BoxSize shadow={true}>
					<BoxSize>
						<LeafIcon src={LeafLogo} style={{ width: "10rem" }} />
					</BoxSize>
					<BoxSize style={{ textAlign: "center" }}>
						<Heading
							fontWeight="300"
							textAlign="center"
							fontSize="2rem"
							color={DarkerTheme}
						>
							{" "}
							Oops, seems like we had a problem
						</Heading>{" "}
						<BreakLine />
						<Link to="/login">
							<Button
								colorScheme="pink"
								background={MainPink}
								marginTop=".5rem"
							>
								Go to safety
							</Button>
						</Link>
					</BoxSize>
				</BoxSize>
			</Flex>
		</>
	);
};

export default ErrorPage;
