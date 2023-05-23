import { Heading } from "@chakra-ui/react";
import {
	BoxSize,
	BreakLine,
	Flex,
	Parag,
	SubHeader,
} from "../../../Styles/styles";

const TransactionSummary = ({ transaction }) => {
	return (
		<Flex style={{ width: "100%" }}>
			<Heading style={SubHeader}>Transaction</Heading>
			<BreakLine />
			<Flex>
				<BoxSize>
					<Parag color="black">
						Date:{" "}
						<b>
							{transaction.created_at.substr(
								0,
								transaction.created_at.indexOf("T")
							)}
						</b>
					</Parag>
					<Parag color="black">
						Time:{" "}
						<b>
							{transaction.created_at.substr(
								transaction.created_at.indexOf("T") + 1,
								transaction.created_at.indexOf("T") - 2
							)}
						</b>
					</Parag>

					<Parag color="black">
						Total Cost($):{" "}
						<b>{transaction.total_cost_usd ? transaction.total_cost_usd : "0"}</b>
					</Parag>
					<Parag color="black">
						Total Emissions: <b>{transaction.co2_amount_in_kg}(KG) CO<sub>2</sub></b>
					</Parag>
					<Parag color="black">
						Project name: <b>{transaction.offset_name}</b>
					</Parag>
				</BoxSize>
			
			</Flex>
		</Flex>
	);
};

export default TransactionSummary;
