/* eslint-disable no-unused-vars */
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout";
import {
	DarkerTheme,
	LightTheme,
} from "../../Styles/colors";
import { BoxSize, Flex } from "../../Styles/styles";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
} from "@chakra-ui/form-control";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const inputFields = [
	{ name: "Company Name", id: "companyName" },
	{ name: "Company Size", id: "companySize" },
	{ name: "Company Email", id: "email" },
];
const CompanyDetails = ({companyDetails}) => {
	const [editable, setEditble] = useState(false);
	const { control, handleSubmit, reset, getValues } = useForm({
		defaultValues: {
			companyName: companyDetails.companyName || "",
			companySize: companyDetails.companySize || "",
			email: companyDetails.email || "",
		},
	});

	return (
		<>
			<Flex>
				{inputFields.map((input) => (
					<BoxSize flexSize="1" isInvisible={false}>
						<FormControl id={input.id}>
							<FormLabel
								color={DarkerTheme}
								fontSize="1.1rem"
								textAlign="left"
								pb="2"
							>
								{input.name}
							</FormLabel>
							<Input
								disabled={!editable}
								border="none"
								color={DarkerTheme}
								control={control}
								background={LightTheme}
								name={input.id}
								defaultValue={getValues(input.id)}
								onChange={(e) =>
									reset({ ...getValues(), [input.id]: e.target.value })
								}
								mb="5"
							/>
							<FormErrorMessage>'</FormErrorMessage>
						</FormControl>
					</BoxSize>
				))}
			</Flex>
			<Flex style={{ marginTop: "1rem" }}>
				<BoxSize flexSize="1" style={{ background: LightTheme }}>
					<Heading
						color={DarkerTheme}
						fontSize="1rem"
						textAlign="left"
						fontWeight="600"
					>
						Emissions certificates will be send to your email.
					</Heading>
				</BoxSize>
			</Flex>
		</>
	);
};
export default React.memo(CompanyDetails);
