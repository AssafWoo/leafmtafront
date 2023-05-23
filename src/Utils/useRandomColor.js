import { useEffect, useState } from "react";
import {  MainBlue, MainGreen, MainGrey, MainYellow } from "../Styles/colors";

const COLORS = [
    MainGreen,
    MainBlue,
    MainGrey,
    MainYellow,
]

const useRandomColorPick = () => {
    const [choosenColor, setChoosenColor] = useState('')
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const randomColor = COLORS[randomNumber];
    useEffect(() => {
        setChoosenColor(randomColor);
    },[])
    return choosenColor;
}

export default useRandomColorPick;