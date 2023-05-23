import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { LightBlue } from "../../Styles/colors";
import { BoxSize, Flex, SubHeader } from "../../Styles/styles";

const NotFound = ({ refetch, reload }) => {
	return (
		<Flex style={{ justifyContent: "center", width: "100%" }}>
			<BoxSize isInvisible={true}>
				<Heading {...SubHeader} style={{ fontSize: "1.2rem" }}>
					Oh my, seems like we have a problem...
				</Heading>
				<Button
					colorScheme="blue"
					bg={LightBlue}
					onClick={() => {
						reload(true);
						refetch(true);
					}}
				>
					Try again
				</Button>
			</BoxSize>
		</Flex>
	);
};

export default React.memo(NotFound);
