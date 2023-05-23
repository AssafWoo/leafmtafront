/* eslint-disable react-hooks/rules-of-hooks */
import {
  DarkerTheme,
  LightTheme,
  MainGreen,
  MainPink,
} from "../../Styles/colors";
import { BoxSize, BreakLine, Flex, LeafIcon, Parag } from "../../Styles/styles";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useRef, useState } from "react";
import { useHistory } from "react-router";
import LeafLogo from "../../Assets/images/newLeaf.png";
import {
  Center,
  Checkbox,
  FormHelperText,
  Select,
  useToast,
} from "@chakra-ui/react";
import { inputNames } from "../../Modules/sign-up/fields";
import { validateForm } from "../../Utils/validation/signup/validateSignupForm";
import { useScreenSize } from "../../Utils/useScreenSize";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "../../axiosConfig";
import { StyledBox, StyledFlex } from "./style";

const companySizeOptions = [
  { value: 1, text: "1-10" },
  { value: 2, text: "11-40" },
  { value: 3, text: "41-60" },
  { value: 4, text: "61-100" },
  { value: 5, text: "101-500" },
  { value: 6, text: "500+" },
];

const Signup = () => {
  const toast = useToast();
  const size = useScreenSize();
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();
  const toastIdRef = useRef();
  const { control, handleSubmit, reset, getValues } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      companyName: "",
      companySize: companySizeOptions[0].text,
      accept: false,
      error: "",
      isLoading: false,
    },
  });

  const handleCheckBox = (state) => {
    if (state) {
      return setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const handleRegister = async (data) => {
    setIsDisabled(true);
    const isValid = validateForm(data);
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (isValid !== "valid") {
      setIsDisabled(false);

      return (toastIdRef.current = toast({
        title: "Something went wrong.",
        description: isValid,
        status: "error",
        duration: 4000,
        isClosable: true,
      }));
    }
    try {
      const reqObj = {
        email: getValues("email"),
        password: getValues("password"),
        username: getValues("name"),
        merchant_name: getValues("companyName"),
        company_size: getValues("companySize"),
      };
      const response = await axios.post(`/register`, reqObj);
      if (response.data.data[0] !== "Success") {
        return (toastIdRef.current = toast({
          title: "Email already in use",
          description: "",
          status: "error",
          duration: 4000,
          isClosable: true,
        }));
      } else {
        toastIdRef.current = toast({
          title: response.statusText,
          description: "Awesome! we've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        return history.push({
          pathname: "/login",
        });
      }
    } catch (e) {
      setIsDisabled(false);
      let header = e.name;
      let message = e.message;

      toastIdRef.current = toast({
        title: header,
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <>
      <BoxSize style={{ background: LightTheme }} shadow={false}>
        <Link to="/login">
          <Button colorScheme={"green"} background={MainGreen}>
            Back
          </Button>
        </Link>

        <form onSubmit={handleSubmit((data) => handleRegister(data))}>
          <Flex
            style={{
              display:
                size !== "fullscreen" || size === "1-cols"
                  ? "contents"
                  : "flex",
              justify: "left",
              align: "left",
              margin: ".1rem",
              wrap: "wrap",
              padding:
                size !== "fullscreen" || size === "1-cols"
                  ? "0rem 10rem 0rem 10rem"
                  : ".5rem",
            }}
          >
            <Center style={{ width: "95%", margin: "auto" }}>
              <StyledFlex>
                <StyledBox flexSize="1" isInvisible={false}>
                  <Flex style={{ justifyContent: "center" }}>
                    <LeafIcon
                      src={LeafLogo}
                      style={{ width: "7rem", display: "block" }}
                    />
                  </Flex>
                  <BreakLine />
                  <Parag
                    color="black"
                    align="center"
                    style={{ fontSize: "1.4rem" }}
                  >
                    Create your company profile and lets start!
                  </Parag>
                  <BreakLine />
                  <Flex style={{ display: "contents" }}>
                    <Flex>
                      <BoxSize
                        flexSize="5"
                        style={{
                          padding: "0rem 1.5rem",
                          background: "transparent",
                        }}
                      >
                        {inputNames.map((input) => (
                          <FormControl
                            id={input.name}
                            isRequired={input.required}
                          >
                            <FormLabel
                              color={DarkerTheme}
                              fontSize="1.1rem"
                              textAlign="left"
                              pb="0"
                              marginBottom="0px"
                            >
                              {input.name}
                            </FormLabel>
                            <FormHelperText mb="1" color={DarkerTheme}>
                              {input.message}
                            </FormHelperText>{" "}
                            <Input
                              type={input.type}
                              mb="3"
                              color={DarkerTheme}
                              control={control}
                              name={input.id}
                              onChange={(e) =>
                                reset({
                                  ...getValues(),
                                  [input.id]: e.target.value,
                                })
                              }
                              border="none"
                              background={LightTheme}
                            />
                          </FormControl>
                        ))}
                      </BoxSize>
                    </Flex>
                    <Flex>
                      <BoxSize
                        flexSize="5"
                        style={{
                          padding: "0rem 1.5rem",
                          background: "transparent",
                        }}
                      >
                        <FormControl
                          id={"company_size"}
                          isRequired={true}
                          mb="10"
                        >
                          <FormLabel
                            color={DarkerTheme}
                            fontSize="1.1rem"
                            textAlign="left"
                            pb="0"
                          >
                            Company Size
                          </FormLabel>
                          <Select
                            defaultValue={companySizeOptions[0].text}
                            color={DarkerTheme}
                          >
                            {companySizeOptions.map((size) => (
                              <option value={size.value}>{size.text}</option>
                            ))}
                          </Select>
                        </FormControl>

                        <FormControl id={"accept"} isRequired={true}>
                          <Checkbox
                            onChange={(e) => handleCheckBox(e.target.checked)}
                          >
                            <FormLabel
                              color={DarkerTheme}
                              fontSize=".9rem"
                              textAlign="left"
                              display="inline"
                              pb="0"
                            >
                              I accept Leaf Terms & Conditions
                            </FormLabel>
                          </Checkbox>
                        </FormControl>
                      </BoxSize>
                    </Flex>
                    <Button
                      type="submit"
                      disabled={isDisabled}
                      w="100%"
                      mt="3.3rem"
                      bg={MainPink}
                      color="white"
                      colorScheme="pink"
                      onClick={handleSubmit}
                    >
                      Go Go Go
                    </Button>
                  </Flex>
                </StyledBox>
              </StyledFlex>
            </Center>
          </Flex>
        </form>
      </BoxSize>
    </>
  );
};

export default Signup;
