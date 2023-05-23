import { Badge } from "@chakra-ui/react";
import { LightBlue, White } from "../../Styles/colors";

const PendingBadge = () => {
  return (
    <Badge
      textTransform="none"
      borderRadius="15px"
      px="1"
      py="1"
      color={White}
      cursor="pointer"
      colorScheme="blue"
      fontWeight="600"
      bg={LightBlue}
      marginRight=".2rem"
    >
      {" "}
      pending...
    </Badge>
  );
};

export default PendingBadge;
