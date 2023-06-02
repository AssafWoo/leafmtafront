import StyledToolTip from "../../../Components/ToolTip/ToolTip";
import { Blue600, DarkerTheme, LightTheme } from "../../../Styles/colors";

export const orderSummaryFields = (totalAmount, totalPrice) => {
	return [
		{
			field: "Amount of CO2e in tons",
			amount: totalAmount,
			amountAddon: "t",
		},
	];
};

export const stateFields = (handleDebounce, handleAutoCompleteSelect, size) => {
	return [
		{
			name: "origin",
			type: "autoComplete",
			flexWidth: size === "fullscreen" || size === "1-cols" ? "2 0 100%" : "2 0 40%",
			width: "100%",
			placeholder: "Flight's origin airport",
			func: handleAutoCompleteSelect,
			boxHeader: "Origin",
			sideParag: null,
			toolTip: (
				<StyledToolTip
					background={LightTheme}
					color={DarkerTheme}
					iconColor={Blue600}
					content={"Departure airport code"}
				/>
			),
		},
		{
			name: "destination",
			type: "autoComplete",
			flexWidth: size === "fullscreen" || size === "1-cols" ? "2 0 100%" :"2 0 40%",
			width: "100%",
			placeholder: "Flight's destination airport",
			func: handleAutoCompleteSelect,
			boxHeader: "Destination",
			sideParag: null,
			toolTip: (
				<StyledToolTip
					background={LightTheme}
					color={DarkerTheme}
					iconColor={Blue600}
					content={"Landing airport code"}
				/>
			),
		},

		{
			name: "numberOfPassengers",
			type: "number",
			flexWidth: "2 0 10%",
			width: "10rem",
			maxLength: 2,
			boxHeader: "Passengers",
			placeholder: "Passengers",
			func: handleDebounce,
			sideParag: null,
			toolTip: (
				<StyledToolTip
					background={LightTheme}
					color={DarkerTheme}
					iconColor={Blue600}
					content={"Number of passengers"}
				/>
			),
		},
		{
			name: "journyes",
			type: "number",
			flexWidth: "2 0 10%",
			width: "10rem",
			maxLength: 2,
			boxHeader: "Journeys",
			placeholder: "Journeys",
			func: handleDebounce,
			sideParag: null,
			toolTip: (
				<StyledToolTip
					background={LightTheme}
					color={DarkerTheme}
					iconColor={Blue600}
					content={
						"You can add the number of times this route has been used, if it's a common route being travled more than once"
					}
				/>
			),
		},
		{
			name: "project",
			type: "select",
			flexWidth: "2 0 100%",
			width: "fit-content",
			boxHeader: "Project",
			placeholder: null,
			func: null,
			sideParag: null,
			toolTip: (
				<StyledToolTip
					background={LightTheme}
					color={DarkerTheme}
					iconColor={Blue600}
					content={
						"You must choose projects before you can purchase credits"
					}
				/>
			),
		},
		{
			name: "roundTrip",
			type: "checkbox",
			flexWidth: "2 0 100%",
			width: "fit-content",
			boxHeader: "Round trip",
			placeholder: null,
			func: null,
			sideParag: null,
		},
		
	];
};
