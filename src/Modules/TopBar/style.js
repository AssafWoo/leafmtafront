import styled from "styled-components";
import { DarkerTheme, MainGreen } from "../../Styles/colors";

export const TopBarWrapper = styled.div`
	z-index: 2;
	background: white;
	position: fixed;
	top: 0;
	margin-right: 0.3rem;
	width: 100%;
	padding: 0.2rem;
	height: auto;
	${(props) => {
		if (props.size === "fullscreen" || props.size !== "3-cols") {
			return { height: "3rem" };
		}
	}};
	box-shadow: 0px 19px 5px -19px rgba(0, 0, 0, 0.35);
`;

export const RightNav = styled.div`
	border-top-left-radius: 15px;
	box-shadow: none;
`;

export const LogoWrapperMobile = styled.div`
	display: flex;
	justify-content: center;
`;

export const ItemsNav = styled.ul`
	top: 1.3rem;
	text-align: left;
	list-style-type: none;
	display: inline-block;
	width: 100%;
`;

export const ItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const Item = styled.li`
	display: inline;
	float: left;
	${(props) => {
		if (props.size) {
			return { margin: "0.6rem 0rem 0.6rem 0.6rem" };
		} else {
			return { margin: "0.6rem 0rem 0.6rem 0.6rem" };
		}
	}};
	${(props) => {
		if (props.size) {
			return { textAlign: "center" };
		} else {
			return { textAlign: "left" };
		}
	}};
	font-weight: 600;
	font-size: 1.2rem;
	color: ${DarkerTheme};
	.active {
		color: ${MainGreen} !important;
		font-weight: 600;
	}
`;

export const StyledSpan = styled.span``;
