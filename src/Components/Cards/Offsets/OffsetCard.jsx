import { Heading, Box, Image, Badge } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import {
  Blue600,
  DarkerTheme,
  MainGrey,
  LightBlue,
  MainBlue,
  MainGreen,
  MainRed,
  White,
  MainPink,
  MainPurple,
} from "../../../Styles/colors";
import { useScreenSize } from "../../../Utils/useScreenSize";
import { BigButton, SmallButton } from "./style";
import { FaCheck, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Tooltip } from "@chakra-ui/react";
import { BreakLine, Flex, Parag } from "../../../Styles/styles";
import { isObjEmpty } from "../../../Utils/isObjEmpty";
import ModalWindow from "../../Modal/modal_window";
import Social from "../../Social/Social";
import OffsetSummary from "../../Summaries/OffsetSummary/Offset_summary";

const OffsetCard = ({
  item,
  addFavorite,
  removeFavorite,
  type,
  justDisplay = false,
  userState,
  mostCommonProject,
}) => {
  const [clicked, setClicked] = useState(false);
  const [currProject, setCurrProject] = useState({});
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!isObjEmpty(item)) {
      setCurrProject({ ...item });
    }
  }, [item]);

  const size = useScreenSize();

  const cutDesc = (desc) => {
    return desc.substring(0, 200) + "...";
  };

  return (
    <>
      {!isObjEmpty(currProject) && (
        <>
          <Box
            maxW="md"
            m={justDisplay ? "auto" : ".5rem"}
            borderWidth="1px"
            borderRadius="25px"
            boxShadow="17px 10px 22px -11px rgba(0,0,0,0.07)"
            overflow="hidden"
            border="none"
            position="relative"
            background={White}
            flex={
              size === "1-cols" || size === "fullscreen"
                ? "0 0 100%"
                : "0 0 30%"
            }
            color="white"
          >
            <Image style={{ width: "100%" }} src={item.offset_thumbnail} />
            {mostCommonProject.uuid === item.uuid && (
              <Tooltip
                closeOnMouseDown={true}
                borderRadius="15px"
                style={{
                  background: MainPurple,
                  padding: "6px 12px",
                }}
                label="Most popular among your customers"
                placement="bottom"
              >
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
              </Tooltip>
            )}
            {item.allowed_for_merchant && (
              <Tooltip
                closeOnMouseDown={true}
                borderRadius="15px"
                style={{
                  background: MainPink,
                  padding: "6px 12px",
                }}
                label="Shown to your users"
                placement="bottom"
              >
                <Badge
                  textTransform="none"
                  borderRadius="50%"
                  px="1"
                  marginInlineStart="1rem"
                  py="1"
                  color="white"
                  cursor="pointer"
                  top="1rem"
                  right="1rem"
                  position="absolute"
                  colorScheme="green"
                  bg={MainPink}
                  marginRight=".2rem"
                  width="2rem"
                  height="2rem"
                >
                  <FaCheck
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
              </Tooltip>
            )}
            <Flex
              style={{
                position: "relative",
                width: "100%",
                display: "block",
              }}
            >
              <Box>
                <Social item={item} type={type} userState={userState} />
              </Box>
            </Flex>
            <BreakLine />
            <Box p="3">
              <Box display="flex" alignItems="baseline">
                {clicked && (
                  <>
                    <Tooltip
                      closeOnMouseDown={true}
                      colorScheme="blue"
                      borderRadius="15px"
                      style={{
                        background: LightBlue,
                        padding: "6px 12px",
                        color: White,
                      }}
                      label="Save changes to update"
                      placement="bottom"
                    >
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
                    </Tooltip>
                  </>
                )}

                <Badge
                  borderRadius="15px"
                  px="2"
                  colorScheme="blue"
                  bg={MainBlue}
                  marginRight=".2rem"
                >
                  {item.allowed_for_merchant}
                </Badge>
                <Badge
                  borderRadius="15px"
                  px="2"
                  colorScheme="blue"
                  bg={MainBlue}
                  marginRight=".2rem"
                  color={White}
                >
                  {item.offset_type}
                </Badge>
              </Box>
              <Heading
                color={DarkerTheme}
                padding=".5rem"
                fontWeight="600"
                height="3rem"
                fontSize="1.3rem"
                textAlign="left"
              >
                {item.name}
              </Heading>
              <BreakLine />
              <Parag
                style={{ padding: ".5rem", color: MainGrey, fontSize: "1rem" }}
              >
                {item.country}
              </Parag>
              <Parag
                style={{ padding: ".5rem", color: MainGrey, fontSize: "1rem" }}
              >
                {item.offset_verifier}
              </Parag>
              <hr />
              <Parag
                style={{ padding: ".5rem", fontSize: ".9rem" }}
                color="black"
              >
                {cutDesc(item.description)}
              </Parag>
              <BreakLine />
              {!justDisplay ? (
                <>
                  {item.allowed_for_merchant ? (
                    <Button
                      colorScheme="red"
                      cursor="pointer"
                      style={
                        size === "1-cols" || size === "fullscreen"
                          ? {
                              padding: "2px 4px",
                              margin: ".2rem",
                              fontSize: ".9rem",
                            }
                          : {
                              padding: "4px 8px",
                              margin: "1rem",
                            }
                      }
                      bg={MainRed}
                      disabled={disable}
                      color={"white"}
                      _hover={{ scale: "1.1" }}
                      onClick={() => {
                        setDisable(true);
                        setClicked(true);
                        removeFavorite && removeFavorite(item);
                      }}
                    >
                      Remove
                    </Button>
                  ) : (
                    <Button
                      colorScheme="green"
                      cursor="pointer"
                      style={
                        size === "1-cols" || size === "fullscreen"
                          ? {
                              padding: "2px 4px",
                              margin: ".2rem",
                              fontSize: ".9rem",
                            }
                          : {
                              padding: "4px 8px",
                              margin: "1rem",
                            }
                      }
                      bg={MainGreen}
                      disabled={disable}
                      color={"white"}
                      _hover={{ scale: "1.1" }}
                      onClick={() => {
                        setDisable(true);
                        setClicked(true);
                        addFavorite && addFavorite(item);
                      }}
                    >
                      Add
                    </Button>
                  )}
                </>
              ) : (
                ""
              )}

              <Button
                cursor="pointer"
                className={
                  size === "1-cols" || size === "fullscreen"
                    ? SmallButton
                    : BigButton
                }
                colorScheme="cyan"
                color="white"
                bg={Blue600}
                onClick={() => setOpen(true)}
              >
                Discover
              </Button>
            </Box>
          </Box>
          {open && (
            <ModalWindow
              open={open}
              setOpen={setOpen}
              content={<OffsetSummary offset={item} />}
            />
          )}
        </>
      )}
    </>
  );
};

export default OffsetCard;
