/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Flex, BoxSize, Parag } from "../../Styles/styles";
import { RightNav } from "./style";
import UserMenu from "../../Components/User_menu/user_menu";
import SingleUser from "../../Components/UserAvatar/SingelUser";
import { Link } from "react-router-dom";
import { MenuItem } from "@chakra-ui/menu";
import {
  DarkerTheme,
  LightBlue,
  LightTheme,
  MainPink,
  White,
} from "../../Styles/colors";
import { useContext } from "react";
import { GlobalContext } from "../../Context/global/global-context";
import { useHistory } from "react-router";
import { logoutUser } from "../../Context/actions/user";

const RightSideBar = () => {
  const { userDispatch } = useContext(GlobalContext);
  const history = useHistory();
  const getUserName = localStorage.getItem("userName");

  const handleLogout = () => {
    userDispatch(logoutUser);
    history.push({
      pathname: "/login",
    });
  };

  return (
    <RightNav>
      <BoxSize
        flexSize="1"
        style={{
          top: "0.1rem",
          padding: "0px",
          right: "0",
          position: "fixed",
        }}
      >
        <Flex>
          <BoxSize
            style={{
              padding: "0",
              textAlign: "right",
              boxShadow: "none !important",
            }}
            flexSize="1"
          >
            {getUserName && (
              <UserMenu
                icon={
                  <SingleUser
                    userFirstLetter={getUserName && getUserName.charAt(0)}
                  />
                }
              >
                <Link to="/profile">
                  <MenuItem
                    _focus={{ background: "trasparent" }}
                    _hover={{ background: LightTheme, color: MainPink }}
                    style={{ borderRadius: "20px" }}
                    color={DarkerTheme}
                  >
                    Profile
                  </MenuItem>
                </Link>
                <MenuItem
                  _hover={{ background: LightTheme, color: MainPink }}
                  style={{ borderRadius: "20px" }}
                  _focus={{ background: "trasparent" }}
                  onClick={() => handleLogout()}
                  color={DarkerTheme}
                >
                  Logout
                </MenuItem>
              </UserMenu>
            )}
          </BoxSize>
        </Flex>
      </BoxSize>
    </RightNav>
  );
};

export default RightSideBar;
