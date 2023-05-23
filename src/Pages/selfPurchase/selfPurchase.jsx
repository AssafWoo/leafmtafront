import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { BoxSize, Flex } from "../../Styles/styles";
import {
	DarkerTheme,
	FadeBlue600,
} from "../../Styles/colors";
import { tabsStyle } from "./style";
import Flights from "../../Modules/purchase/flights/Flights";

const SelfPurchase = () => {
	return (
		<Flex style={{ marginBottom: "4rem" }}>
			<BoxSize flexSize="5">
				<Tabs colorScheme="green" defaultIndex={0}>
					<TabList>
	
						<Tab
							index={0}
							_selected={{ ...tabsStyle, bg: FadeBlue600 }}
							color={DarkerTheme}
						>
							Flights
						</Tab>

					</TabList>
					<TabPanels>

						<TabPanel paddingLeft="0" paddingRight="0">
							<Flights />
						</TabPanel>

					</TabPanels>
				</Tabs>
			</BoxSize>
		</Flex>
	);
};

export default SelfPurchase;
