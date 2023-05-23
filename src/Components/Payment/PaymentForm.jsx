import { FormControl } from "@chakra-ui/form-control";
import { MainGrey, MainPink } from "../../Styles/colors";
import { Flex, BoxSize, Parag } from "../../Styles/styles";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";
import { Checkbox } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { billingFields } from "./fields";
import { validateFields } from "./utils";
import InputFields from "./InputFields";

const PaymentForm = ({ onSubmit, paymentProcced }) => {
	const { control, handleSubmit, reset, getValues } = useForm({
		defaultValues: {
			name: "", // longer than 0
			number: "", // longer than x
			expiry: "", // put a mask
			cvv: "", // 3 digits
			authorize: false, // has to be true
		},
	});
	const [disableSubmit, setDisableSubmit] = useState(true);
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [erroredInputs, setErroredInputs] = useState([]);

	const checkFields = (data) => {
		if (loading) return;
		const valid = validateFields(data);
		setErroredInputs([...valid]);
		if (valid.length === 0) {
			handleSave(data);
		}
	};

	const handleSave = async (data) => {
		setLoading(true);
		onSubmit(data);
	};

	const handleFieldChange = useCallback(
		(key, value) => {
			reset({ ...getValues(), [key]: value });
		},
		[getValues, reset]
	);

	return (
		<BoxSize shadow={true}>
			<form
				onSubmit={handleSubmit((data) => {
					setSubmitted(true);
					checkFields(data);
				})}
			>
				<Flex>
					{billingFields.map((field) => {
						return (
							<BoxSize flexSize={field.boxSize}>
								{field.type === "input" ? (
									<InputFields
										field={field}
										erroredInputs={erroredInputs}
										control={control}
										handleFieldChange={handleFieldChange}
									/>
								) : (
									<FormControl id={field.name} isRequired={true}>
										<Checkbox
											name={field.name}
											id={field.name}
											required={true}
											onChange={(e) => {
												reset({
													...getValues(),
													[field.name]: e.target.checked,
												});
												if (e.target.checked) {
													return setDisableSubmit(false);
												} else {
													return setDisableSubmit(true);
												}
											}}
										>
											<Parag style={{ color: MainGrey, fontSize: ".8rem" }}>
												{field.label}
											</Parag>
										</Checkbox>
									</FormControl>
								)}
							</BoxSize>
						);
					})}
					<Flex>
						<BoxSize>
							<Button
								type="submit"
								colorScheme="pink"
								background={MainPink}
								disabled={disableSubmit}
							>
								Lets roll
							</Button>
						</BoxSize>
					</Flex>
				</Flex>
			</form>
		</BoxSize>
	);
};

export default PaymentForm;
