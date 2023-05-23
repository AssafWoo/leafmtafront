/* eslint-disable no-unused-vars */
import { Input } from "@chakra-ui/input";
import { DarkerTheme, LightTheme } from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, Parag } from "../../Styles/styles";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useState } from "react";
import { Tag } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const AccountDetails = ({ accountDetails }) => {
  const [editable, setEditble] = useState(false);
  const { reset, getValues } = useForm({
    defaultValues: {
      userName: accountDetails?.userName || "",
    },
  });

  return (
    <form>
      <Flex>
        <BoxSize flexSize="1" isInvisible={false}>
          <FormControl id="userName">
            <FormLabel
              color={DarkerTheme}
              fontSize="1.1rem"
              textAlign="left"
              pb="2"
            >
              User Name
            </FormLabel>
            <Input
              disabled={!editable}
              background={LightTheme}
              border="none"
              name="userName"
              color={DarkerTheme}
              defaultValue={getValues("userName")}
              onChange={(e) =>
                reset({ ...getValues(), userName: e.target.value })
              }
              mb="5"
            />
          </FormControl>
        </BoxSize>
      </Flex>
      <br />
      <Tag colorScheme="blue" float="left">
        Password privacy
      </Tag>
      <BreakLine />
      <Flex>
        <BoxSize isInvisible={false} flexSize="5">
          <Parag color="black">
            In order to change password, please sent us an email and we'll get
            back to you.
          </Parag>
          <BreakLine />
        </BoxSize>
      </Flex>
    </form>
  );
};
export default AccountDetails;
