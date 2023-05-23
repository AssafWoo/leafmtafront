import { CirclesEffect } from "../../Styles/effects";

const FloatEffect = ({ size }) => {
	if (size === "lg") {
		return (
			<CirclesEffect>
				<ul className="circles">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</CirclesEffect>
		);
	}
	return (
		<CirclesEffect>
			<ul className="circles">
				<li></li>
				<li></li>
			</ul>
		</CirclesEffect>
	);
};

export default FloatEffect;
