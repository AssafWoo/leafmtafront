import { Parag } from "../../Styles/styles";

const SingleUser = ({ desiredPhoto, userFirstLetter }) => {
	const getUserColor = localStorage.getItem("userColor");
	return (
		<Parag
			style={{
				padding: ".2rem",
				borderRadius: "50%",
				color: "white",
				width: "2rem",
				display: "flex",
				height: "2rem",
				background: getUserColor,
				position: "relative",
				fontWeight: "600",
				alignContent: "center",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{userFirstLetter.toUpperCase()}
		</Parag>
	);
};

export default SingleUser;
