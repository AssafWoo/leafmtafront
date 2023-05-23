import { Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { DarkerTheme, FadeMainPink } from "../../../Styles/colors";
import { Parag } from "../../../Styles/styles";

export const StyledParag = styled(Parag)`
	color: white;
	text-align: center;
`;

export const RoundParagraphLG = styled(Parag)`
	padding: 0.5rem;
	font-size: 2.5rem;
	width: 5.5rem;
	height: 5rem;
	border-radius: 50%;
	background: ${DarkerTheme};
	text-align: center;
	color: white;
`;

export const CommonHeader = styled(Heading)`
	color: ${DarkerTheme} !important;
	font-weight: 300 !important;
	text-align: left !important;
	font-size: 1.4rem !important;
`;

export const IconStyle = {
	padding: ".5rem",
	width: "3rem",
	height: "3rem",
	borderRadius: "50%",
	margin: "auto",
};
