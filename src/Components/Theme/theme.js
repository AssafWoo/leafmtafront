// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { LightTheme } from "../../Styles/colors";
// 2. Add your color mode config
const styles = {
	global: (props) => ({
		body: {
			bg: LightTheme,
		},
	}),
};

const components = {
	Drawer: {
		// setup light/dark mode component defaults
		baseStyle: (props) => ({
			dialog: {
				bg: LightTheme,
			},
		}),
	},
};

const theme = extendTheme({
	components,
	styles,
});

// 3. extend the theme
export default theme;
