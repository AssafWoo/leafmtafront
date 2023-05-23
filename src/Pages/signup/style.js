import styled from "styled-components";
import { BoxSize, Flex } from "../../Styles/styles";

export const StyledFlex = styled(Flex)`
	display: flex;
	justify: left;
	width: 30rem;
	align: left;
	${(props) => {
		if (props.size === "fullscreen" || props.size === "1-cols") {
			return { flexDirection: "column" };
		} else {
			return { flexDirection: "row" };
		}
	}};
`;

export const StyledBox = styled(BoxSize)`
	width: 100%;
	border-radius: 15px;
`;
