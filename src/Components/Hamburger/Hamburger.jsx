/* eslint-disable jsx-a11y/anchor-is-valid */
import {
	Button,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { BreakLine } from "../../Styles/styles";
import { IconStyle, MenuNames } from "../../Modules/TopBar/TopBar";
import { List, ListItem } from "./style";
import { useHistory } from "react-router";
import { GlobalContext } from "../../Context/global/global-context";
import { logoutUser } from "../../Context/actions/user";
import { FaHome, FaPowerOff } from "react-icons/fa";
import { MainPink } from "../../Styles/colors";

const Hamburger = () => {
	const history = useHistory();
	const { userDispatch } = useContext(GlobalContext);
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const handleLogout = ({ name, children }) => {
		userDispatch(logoutUser);
		history.push({
			pathname: "/login",
		});
	};

	return (
		<>
			<Button
				ref={btnRef}
				style={{
					background: "transparent",
					position: "absolute",
					left: "0",
					top: "0",
				}}
				onClick={onOpen}
			>
				<GiHamburgerMenu style={{ color: MainPink }} size="1.3rem" />
			</Button>
			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay width={"100%"} height="100%" />
				<DrawerContent>
					<DrawerCloseButton color={MainPink} left="1rem" fontSize="1rem" />
					<BreakLine />
					<List>
						<NavLink exact to={`/dashboard`}>
							<ListItem onClick={onClose}>
								<FaHome style={IconStyle} /> Home
							</ListItem>
						</NavLink>
						{MenuNames.map((value, index) => (
							<NavLink exact to={`${value.link}`}>
								<ListItem onClick={onClose}>
									{value.icon} {value.name}
								</ListItem>
							</NavLink>
						))}
						<ListItem onClick={handleLogout}>
							<FaPowerOff style={IconStyle} /> Logout
						</ListItem>
					</List>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default Hamburger;
