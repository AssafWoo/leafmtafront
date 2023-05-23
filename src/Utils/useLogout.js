import { useEffect } from "react";
import { useContext } from "react";
import Store from "../Context/global/global-context";

const useLogout = () => {
    const {_, dispatch} = useContext(Store);
    useEffect(() => {
        dispatch({type:'USER_LOGOUT',})
    },[dispatch])
}

export default useLogout;