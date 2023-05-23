const ColorCircle = ({ color }) => {
	return (
		<div
			style={{
				height: "1.5rem",
				width: "1.5rem",
				background: color,
				borderRadius: "50%",
				border: "none",
				display: "inline-block",
			}}
		></div>
	);
};

export default ColorCircle;
