import { Button } from "@chakra-ui/button";
import { useContext } from "react";
import Store from "../../Context/global/global-context";
import { DarkTheme,MainBlue,MainYellow } from "../../Styles/colors";

const RankIcon = () => {
    const {state} = useContext(Store);
    const Rank = state.company.rank;
    if(Rank > 4){
        return(
            <Button width='100%' _hover={{background:MainYellow}} mt=".4rem" bg={MainYellow} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {Rank}</Button>
        )
    }
    if(Rank < 4){
        return(
            <Button width='100%' _hover={{background:MainBlue}} mt=".4rem" bg={MainBlue} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {Rank}</Button>
        )
    }
    else {
        return(
            <Button width='100%' _hover={{background:DarkTheme}} mt=".4rem" bg={DarkTheme} color={DarkTheme} size="sm" textAlign="left" marginBottom="1rem">Rank: {Rank}</Button>
        )
    }
}
export default RankIcon;