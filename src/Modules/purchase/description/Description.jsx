import { Flex } from "@chakra-ui/react";
import { BoxSize, Parag } from "../../../Styles/styles";

const Description = ({ icon, desc, backgroundColor }) => (
	<BoxSize style={{ width: "100%", background: backgroundColor }}>
		<Parag color="black">
			<Flex style={{ flexWrap: "wrap" }}>
				<BoxSize flexSize="2 0 10%" isInvisible={true}>
					{icon}
				</BoxSize>
				<BoxSize flexSize="2 0 89%" isInvisible={true}>
					<Parag color="black">{desc}</Parag>
				</BoxSize>
			</Flex>
		</Parag>
	</BoxSize>
);

export default Description;
