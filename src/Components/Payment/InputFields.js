import {
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { DarkerTheme, LightTheme } from "../../Styles/colors";
import InputMask from "react-input-mask";
import { Parag } from "../../Styles/styles";

const InputFields = ({
	handleFieldChange,
	control,
	field,
	erroredInputs = [],
}) => {
	const [valid, setValid] = useState(true);

	useEffect(() => {
		if (erroredInputs.length === 0) {
			setValid(true);
		} else {
			const isInputValid = erroredInputs.map((error) => {
				if (error === field.name) {
					return true;
				}
			});
			if (isInputValid[0] === true) {
				setValid(false);
			} else {
				setValid(true);
			}
		}
	}, [erroredInputs, field, setValid]);

	const handleChange = (key, value) => {
		handleFieldChange(key, value);
	};

	return (
		<FormControl id={field.name} isRequired={true}>
			<FormLabel
				color={DarkerTheme}
				fontSize="1.1rem"
				textAlign="left"
				pb="0"
				htmlFor={field.labelForHtml}
				marginBottom="0px"
			>
				{field.label}
			</FormLabel>
			<FormHelperText mb="1" color={DarkerTheme}>
				{field.message}
			</FormHelperText>{" "}
			<Input
				as={InputMask}
				mask={field.mask}
				maskChar={null}
				type={field.type}
				mb="1"
				color={DarkerTheme}
				control={control}
				placeholder={field.placeHolder}
				name={field.name}
				style={{
					color: DarkerTheme,
					outline: valid ? "1px solid transparent" : "2px solid red",
				}}
				onChange={(e) => handleChange(field.name, e.target.value)}
				border="none"
				background={LightTheme}
			/>
			{!valid && (
				<Parag style={{ fontSize: ".8rem", color: "red" }}>
					Please enter valid values
				</Parag>
			)}
		</FormControl>
	);
};

export default InputFields;
