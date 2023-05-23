import { Badge } from "@chakra-ui/react";
import {  FaStar } from "react-icons/fa";
import { MainPurple } from "../../Styles/colors";

const PopularBadge = () => {
  return (
    <Badge
      textTransform="none"
      borderRadius="50%"
      px="1"
      marginInlineStart="1rem"
      py="1"
      color="white"
      cursor="pointer"
      top="1rem"
      right="4rem"
      position="absolute"
      colorScheme="green"
      bg={MainPurple}
      marginRight=".2rem"
      width="2rem"
      height="2rem"
    >
      <FaStar
        color={"white"}
        style={{
          position: "absolute",
          top: "50%",
          fontSize: "1.1rem",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Badge>
  );
};

export default PopularBadge;
