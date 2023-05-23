import { DarkerTheme, White } from "../../../Styles/colors";
import styled from "styled-components";

export const IconStyle = {
	padding: ".5rem",
	width: "3rem",
	height: "3rem",
	borderRadius: "50%",
	color: White,
	display: "inline",
	background: DarkerTheme,
};

export const BenefitsList = styled.ul``;
export const BenefitsListItem = styled.li`
	font-size: 1.2rem;
	color: ${DarkerTheme};
	margin-inline-start: 2rem;
`;
