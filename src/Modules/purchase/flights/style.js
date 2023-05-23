import { FaPlane } from "react-icons/fa";
import { Blue600, FadeBlue600, LightTheme } from "../../../Styles/colors";
import { Parag } from "../../../Styles/styles";
import Description from "../description/Description";

export const IconStyle = {
  padding: ".5rem",
  width: "4.5rem",
  height: "4.5rem",
  borderRadius: "50%",
  margin: "auto",
};

export const Option = ({ option }) => (
  <option style={{ background: LightTheme, fontSize: "1rem" }} value={option}>
    {option}
  </option>
);

export const decription = (
  <Description
    backgroundColor={FadeBlue600}
    desc={
      <Parag color="black">
        Reduce inhouse travel of your workforce, find the right flight and
        offset employee's share. <br />
        All certificates will be sent to your email.
      </Parag>
    }
    icon={
      <FaPlane
        style={{
          ...IconStyle,
          background: "white",
          color: Blue600,
        }}
      />
    }
  />
);
