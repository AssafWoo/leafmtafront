import { Button, Image } from "@chakra-ui/react";
import FloatEffect from "../../../Components/FloatEffect/floatEffect";
import { Blue600, MainGrey } from "../../../Styles/colors";
import {
  ActionButton,
  BoxSize,
  BreakLine,
  Flex,
  LittleBreakLine,
  Parag,
} from "../../../Styles/styles";
import { BoxHeader, BoxParag } from "../style";
import PlaneSrc from "../../../Assets/images/plane.svg";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";

const Calculators = () => {
  const [removeEffect, setRemoveEffects] = useState(false);

  const handleHover = useCallback(() => {
    setRemoveEffects(true);
  }, []);

  const handleHoverOut = useCallback(() => {
    setRemoveEffects(false);
  }, []);
  return (
    <BoxSize shadow={true} isInvisible={false} flexSize="2 0 49%">
      <BoxHeader>Take a quick action</BoxHeader>
      <hr />
      <LittleBreakLine />
      <BoxParag color="black">
        Offset your corporate travel emissions with our program. Calculate and
        offset emissions from air transportation.
      </BoxParag>
      <BreakLine />

      <BoxSize>
        <Flex style={{ width: "100%" }} shadow={true}>
          <BoxSize flexSize="2 0 49%">
            <Parag style={{ color: Blue600 }}>Offset corporate travel</Parag>
            <Parag style={{ color: MainGrey, fontSize: ".9rem" }}>
              Calculate and offset your workforce travel habits and get
              certifications under your company's name
            </Parag>
          </BoxSize>
          <BoxSize flexSize="2 0 45%">
            <Image src={PlaneSrc} style={{ width: "12rem" }} />
          </BoxSize>
        </Flex>
        <BreakLine />
        <Link to="/self-purchase">
          <ActionButton
            onMouseOver={() => handleHover()}
            onMouseLeave={() => handleHoverOut()}
          >
            {!removeEffect ? <FloatEffect size="lg" /> : ""}
            Go Go Go
          </ActionButton>
        </Link>
      </BoxSize>
    </BoxSize>
  );
};

export default Calculators;
