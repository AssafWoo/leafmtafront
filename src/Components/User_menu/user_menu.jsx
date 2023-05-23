import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { White } from "../../Styles/colors";

const UserMenu = ({ icon, children }) => {
	return (
		<Menu>
			<MenuButton color="white" righticon={<ChevronDownIcon />}>
				{icon}
			</MenuButton>
			<Portal>
				<MenuList
					boxShadow={"none"}
					_hover={{ background: White }}
					bg={White}
					style={{
						border: "none",
						borderRadius: "20px",
						padding: "1rem",
					}}
				>
					{children}
				</MenuList>
			</Portal>
		</Menu>
	);
};

export default UserMenu;
