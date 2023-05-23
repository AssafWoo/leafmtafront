import { Tooltip } from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";

const StyledToolTip = ({ background, color, iconColor, content }) => {
	return (
		<Tooltip
			closeOnMouseDown={true}
			colorScheme="blue"
			borderRadius="15px"
			shouldWrapChildren
			style={{
				background: background,
				padding: "6px 12px",
				color: color,
			}}
			label={content}
			placement="right"
		>
			<FaInfoCircle
				color={iconColor}
				size="1rem"
				style={{
					display: "inline",
					marginInlineStart: ".4rem",
					cursor: "pointer",
				}}
			/>
		</Tooltip>
	);
};
export default StyledToolTip;
