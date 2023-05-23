import { Button, Text } from "@chakra-ui/react";
import styled from "styled-components";
import {
	DarkerTheme,
	DarkTheme,
	InputColor,
	LightBlue,
	MainGreen,
	MainGrey,
	MainPink,
	MainRed,
	White,
} from "./colors";
import { Ripple, ShadowEffect } from "./effects";

// heading fontsize - 1.1rem;
// text fontsize - .7rem;
// font weight - 500;

//Wrappers

export const LayoutGapWrapper = styled.div`
	padding: 2rem;
`;

export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	align-content: flex-start;
	box-shadow: ${(props) =>
		props.shadow ? "17px 10px 22px -11px rgba(0,0,0,0.07)" : ""};
	${(props) => {
		if (props.justify) {
			return { justifyContent: props.justify };
		} else {
			return { justifyContent: "flex-start" };
		}
	}}
	align-items: stretch;
	${(props) => {
		if (props.isStyled) {
			return StyledFlex;
		}
	}}
`;

export const StyledFlex = {
	width: "100%",
	background: `${DarkTheme}`,
	borderRadius: "15px",
};

export const AppWrapper = styled.div`
	text-align: center;
	width: 100%;

	.actionButton {
		&:hover {
			background-color: ${MainPink};
		}
	}
`;
export const MainWrapper = styled.div`
	width: 90%;
	${(props) => {
		if (props.size === "3-cols" || props.size === "2-cols") {
			return { margin: "8% auto 0 auto" };
		} else {
			return { margin: "20% auto 0 auto" };
		}
	}};
`;

export const LittleBreakLine = styled.div`
	margin: 0.5rem 0;
`;

export const TableWrapper = styled.div`
	padding: 1rem;
	width: 100%;
	background-color: ${DarkTheme};
	border-radius: 15px;

	overflow-x: ${(props) => {
		switch (props.size) {
			case "3-cols":
				return "hidden";
			case "2-cols":
				return "hidden";
			case "1-cols":
				return "scroll";
			case "fullscreen":
				return "scroll";
			default:
				return "hidden";
		}
	}};
	th {
		font-weight: 400;
		font-size: 1.1rem;
		text-transform: none;
	}
	tr {
		cursor: pointer;
		font-size: 0.9rem;
		color: white;
		border: none;
		&:hover {
			background-color: ${DarkerTheme};
		}
	}
`;
export const SwitchWrapper = styled.div`
	width: 15rem;
	background-color: ${InputColor};
	cursor: pointer;
	user-select: none;
	border-radius: 15px;
	height: 2rem;
	position: relative;
	.disabled {
		left: -1px;
		color: white;
		background: ${MainGreen};
	}
`;

//Boxes
// SM - flex:1
// MD - flex:3
// LG - flex:5
export const internalBoxStracture = `
    padding:1rem;
    border-radius:15px;
    color:white;
    margin:.2rem;
	color: white;

`;
export const BoxSize = styled.div`
	flex: ${(props) => props.flexSize};
	background: ${(props) => (props.isInvisible ? "" : White)};
	box-shadow: ${(props) =>
		props.shadow ? "17px 10px 22px -11px rgba(0,0,0,0.07)" : ""};
	${internalBoxStracture}
	${(props) =>
		props.header
			? {
					background: MainGreen,
					color: "black",
					position: "relative",
					border: "none",
			  }
			: ""};
`;

//Common

export const AddCancelButtons = `
	border-radius: 15px;
	padding: 0.9rem;
	border: none;
	color: white;
	position: relative;
	cursor: pointer;
`;

export const SDGWrapper = styled.ul`
	text-align: left;
	list-style-type: none;
	display: inline-block;
	width: 100%;
`;

export const SDGElement = styled.li`
	display: inline;
	float: left;
`;

export const CancelButton = styled.button`
	${AddCancelButtons}
	background-color: ${MainRed};
`;

export const AddButton = styled.button`
	${AddCancelButtons}
	background-color: ${MainGreen};
`;

export const CheckoutButton = styled.button`
	width: 100%;
	border-radius: 25px;
	font-size: 1.2rem;
	padding: 0.7rem;
	background: ${(props) => {
		if (props.disabled) {
			return `${MainGrey}`;
		}
		return `${MainPink}`;
	}};
`;

export const ActionButton = styled.button`
	display: block;
	width: 100%;
	height: 4rem;
	color: ${DarkerTheme};
	background: white;
	position: relative;
	font-size: 1.2rem;
	font-weight: 600;
	border-radius: 15px;
	border: 2px solid ${MainPink};
	background: linear-gradient(to right, white 50%, #f72585 50%) left !important;
	background-size: 200% 100% !important;
	background-position: left bottom;
	transition: all 1s ease;
	&:hover {
		transition: all 1s ease;
		background: linear-gradient(to left, #f72585 50%, white 50%) right !important;
		background-size: 200% 100% !important;
		background-position: right bottom;
		color: white !important;
	}
`;

export const CenteredSpan = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	cursor: pointer;
	transform: translate(-42%, -59%);
`;

export const BreakLine = styled.div`
	margin: 2.5rem 0;
`;
export const SubHeader = {
	fontSize: "2rem",
	marginBottom: ".5rem",
	textAlign: "left",
	fontWeight: "600",
	width: "100%",
	color: "#08133f",
};

export const Parag = styled.p`
	font-size: 1.1rem;
	font-weight: 600;
	${(props) =>
		props.align === "center" ? { textAlign: "center" } : { textAlign: "left" }};
	color: ${(props) =>
		props.color === "green"
			? MainGreen
			: props.color === "black"
			? DarkerTheme
			: White};
	display: inline-block;
	width: 100%;
`;

export const InputProperties = {
	size: "sm",
	borderRadius: "full",
	variant: "solid",
	margin: "0.5rem 0.3rem",
};

export const LeafIcon = styled.img`
	float: left;
	display: inline;
	width: 4rem;
	margin-top: 0.5rem;
	margin-left: 0.5rem;
`;
export const Card = styled.div`
	flex: 2;
	${internalBoxStracture};
	background: ${(props) => (props.isInvisible ? "" : `1px solid ${DarkTheme}`)};
	${ShadowEffect}
	${(props) => (props.isChoosen ? Ripple : "")};
`;

//Switch
export const SwitchContent = styled.div`
	font-weight: 400;
	cursor: pointer;
	color: white;
	height: 2rem;
	padding: 0.3rem 1rem;
	background: ${LightBlue};
	border-radius: 15px;
	display: flex;
	font-size: 1.1rem;
	justify-content: center;
	align-items: center;
	width: 7.5rem;
	border-radius: 15px;
	box-sizing: border-box;
	position: absolute;
	left: 7.5rem;
	transition: all 0.3s ease;
`;

// ul for signup
export const List = {
	background: InputColor,
	listStyle: "none",
	color: "black",
	borderRadius: "15px",
	padding: ".7rem",
	zIndex: "1",
	maxHeight: "8rem",
	width: "100%",
	overflow: "auto",
};

export const ElipsisStyle = styled(Text)`
	overflow: hidden;
	width: 4rem;
`;
