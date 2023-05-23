import styled from "styled-components";
import { DarkerTheme } from "../../Styles/colors";

export const List = styled.ul`
	margin-left: 2rem;
`;

export const ListItem = styled.li`
	display: block;
	font-size: 1.2rem;
	color: ${DarkerTheme};
	margin: 1.4rem 0;
	cursor: pointer !important;
`;
