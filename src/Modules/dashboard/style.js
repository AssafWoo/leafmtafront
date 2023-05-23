import { Heading } from "@chakra-ui/react";
import styled from "styled-components";
import { DarkerTheme } from "../../Styles/colors";
import { Parag } from "../../Styles/styles";

export const BoxHeader = styled(Heading)`
	font-weight: 600 !important;
	text-align: left;
	font-size: 1.4rem !important;
	color: ${DarkerTheme};
	margin-bottom: 0.5rem;
	display: block;
`;

export const IconRoundWrapper = styled.div`
	width: 5rem;
	height: 5rem;
	justify-content: center;
	display: flex;
	border-radius: 50%;
	padding: 12px 24px;
	margin: auto;
	position: relative;
`;

export const CenterIcon = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const BoxParag = styled(Parag)`
	font-weight: 300;
`;

export const ParagDivider = styled.div`
	width: 100%;
	display: block;
`;
