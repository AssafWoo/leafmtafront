/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Heading } from "@chakra-ui/layout";
import { BoxSize } from "../../../Styles/styles";
import { DarkerTheme, MainGreen } from "../../../Styles/colors";

import { Spinner } from "@chakra-ui/react";

import MapComponent from "../../../Components/Map/map";
import { BoxHeader } from "../style";

interface Iprops {
	favoriteData: Array<any>;
}

const MapSection = (props: Iprops) => {
	const { favoriteData } = props;

	return (
		<>
			<BoxSize
				shadow={true}
				style={{ marginTop: "1rem" }}
				isInvisible={false}
				flexSize="2 0 35%"
			>
				<BoxHeader>Your projects worldwide locations</BoxHeader>

				{favoriteData.length > 0 ? (
					<MapComponent offsets={favoriteData} />
				) : (
					<Spinner color={MainGreen} />
				)}
			</BoxSize>
		</>
	);
};

export default React.memo(MapSection);
