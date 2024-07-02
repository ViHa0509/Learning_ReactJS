import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const checkLogIn = () => {
    const {setIsLoggedIn} = useContext(UserContext);
    console.log("CHECK LOGGED IN");
    const mytoken = localStorage.getItem('mytoken');
    if(mytoken !== null) {
        setIsLoggedIn(true);
        return true;
    }
    return false;
};