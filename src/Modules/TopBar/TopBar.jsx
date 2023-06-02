import { Link, NavLink } from "react-router-dom";
import { LeafIcon } from "../../Styles/styles";
import {
  ItemsNav,
  TopBarWrapper,
  Item,
  StyledSpan,
  ItemsWrapper,
} from "./style";
import LeafLogo from "../../Assets/images/newLeaf.png";
import { FaTree, FaDollarSign, FaShoppingCart, FaUser } from "react-icons/fa";

import RightSideBar from "./right-side-bar";
import Hamburger from "../../Components/Hamburger/Hamburger";

export const IconStyle = {
  margin: "auto",
  display: "inline",
  marginInlineEnd: ".3rem",
  cursor: "pointer",
};

export const MenuNames = [
  {
    name: "Projects",
    link: "/projects",
    icon: <FaTree style={IconStyle} />,
  },
  {
    name: "Purchase",
    link: "/self-purchase",
    icon: (
      <FaShoppingCart
        style={{ margin: "auto", display: "inline", marginInlineEnd: ".3rem" }}
      />
    ),
  },

  {
    name: "Transactions",
    link: "/transactions",
    icon: <FaDollarSign style={IconStyle} />,
  },

  {
    name: "Profile",
    link: "/profile",
    icon: <FaUser style={IconStyle} />,
  },
];

const TopBar = ({ size }) => {
  return (
    <TopBarWrapper size={size}>
      {size !== "3-cols" || size === "fullscreen" ? (
        <>
          <ItemsNav>
            <ItemsWrapper>
              <Hamburger />
              <Item style={{ display: "contents" }}>
                <Link to="/">
                  <LeafIcon
                    src={LeafLogo}
                    style={{ top: "0", position: "absolute", marginLeft: "0" }}
                  />
                </Link>
              </Item>
            </ItemsWrapper>
          </ItemsNav>
        </>
      ) : (
        <ItemsNav>
          <ItemsWrapper>
            <Link to="/" style={{ position: "absolute", left: ".5rem" }}>
              <LeafIcon src={LeafLogo} />
            </Link>
            {MenuNames.map((value, index) => (
              <Item size={size}>
                <NavLink exact to={`${value.link}`} activeClassName="active">
                  <StyledSpan
                    activeClassName="active"
                    style={{ marginLeft: ".5rem", fontSize: "1.05rem" }}
                  >
                    {value.name}
                  </StyledSpan>
                </NavLink>
              </Item>
            ))}
            <RightSideBar />
          </ItemsWrapper>
        </ItemsNav>
      )}
    </TopBarWrapper>
  );
};
export default TopBar;
