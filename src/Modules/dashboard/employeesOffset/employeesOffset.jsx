import { Image, Tooltip } from "@chakra-ui/react";
import {
  DarkerTheme,
  FadeMainPink,
  LightTheme,
  MainGreen,
  MainGrey,
  MainPink,
} from "../../../Styles/colors";
import {
  BoxSize,
  BreakLine,
  Flex,
  LittleBreakLine,
  Parag,
} from "../../../Styles/styles";
import WorkersLogo from "../../../Assets/images/workers.svg";
import { BoxHeader, BoxParag, CenterIcon, IconRoundWrapper } from "../style";
import { useScreenSize } from "../../../Utils/useScreenSize";
import { FaCloud, FaInfoCircle } from "react-icons/fa";
import { numberWithCommas } from "../../../Utils/dataManipulation/numberComma";

const EmployeesOffset = ({ user }) => {
  const size = useScreenSize();
  return (
    <BoxSize flexSize="2 0 49%">
      <BoxHeader>Compensate Workforce</BoxHeader>
      <hr />
      <LittleBreakLine />
      <BoxParag color="black">
        Your current recurring plan is covering for
        <Tooltip
          closeOnMouseDown={true}
          colorScheme="blue"
          borderRadius="15px"
          shouldWrapChildren
          style={{
            background: LightTheme,
            padding: "6px 12px",
            color: DarkerTheme,
          }}
          label="You can choose different plans to offset your whole workforce, best recommend to contact us so we can tailor you the best plan possible"
          placement="right"
        >
          <FaInfoCircle
            color={MainGreen}
            style={{
              display: "inline",
              marginInlineStart: "1rem",
              cursor: "pointer",
            }}
          />
        </Tooltip>
      </BoxParag>

      <BreakLine />
      <Flex>
        <BoxSize
          style={{ padding: "0" }}
          shadow={true}
          flexSize={size === "3-cols" ? "1" : "2 0 49%"}
        >
          <BoxSize flexSize="1" style={{ height: "60%" }}>
            <Image src={WorkersLogo} width="15rem" margin="auto" />
          </BoxSize>
          <BoxSize flexSize="3">
            <Parag
              color="black"
              align="center"
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: MainPink,
              }}
            >
              {user.companySize.length > 0 ? user.companySize : 0}
            </Parag>
            <Parag align="center" color="black">
              Employees
            </Parag>
            <Parag
              style={{ color: MainGrey, fontSize: ".8rem" }}
              align="center"
            >
              You can change the number of employees anytime
            </Parag>
          </BoxSize>
        </BoxSize>
        <BoxSize
          style={{ padding: "0" }}
          shadow={true}
          flexSize={size === "3-cols" ? "1" : "2 0 49%"}
        >
          <BoxSize flexSize="1" style={{ height: "60%" }}>
            <IconRoundWrapper
              style={{
                background: FadeMainPink,
                width: "8rem",
                height: "8rem",
                marginTop: "1.5rem",
              }}
            >
              <CenterIcon>
                <FaCloud size="4rem" />
              </CenterIcon>
            </IconRoundWrapper>
          </BoxSize>
          <BoxSize flexSize="3">
            <Parag
              align="center"
              color="black"
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: MainPink,
              }}
            >
              {user.employeesEmissions > 0
                ? numberWithCommas(user.employeesEmissions)
                : 0}{" "}
              Kg
            </Parag>

            <Parag color="black" align="center">
              CO<sub>2</sub> per Month
            </Parag>
            <Parag
              style={{ color: MainGrey, fontSize: ".8rem" }}
              align="center"
            >
              Emitted from your workers annually
            </Parag>
          </BoxSize>
        </BoxSize>
      </Flex>
      <BreakLine />
      <Parag style={{ color: MainGrey, fontSize: ".8rem" }} align="center">
        You don't have a plan yet, contact us to tailor you the best plan
        possible
      </Parag>
      {/* <Button colorScheme={"pink"} background={MainPink}>
				Start a plan
			</Button> */}
    </BoxSize>
  );
};

export default EmployeesOffset;
