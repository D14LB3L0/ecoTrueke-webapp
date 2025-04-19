import { useStore } from "@/stores/useStore"
import { useEffect, useState } from "react";

export const useNavBar = () => {

    const user = useStore(state => state.user);
    
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    // if user is logged
    useEffect(() => {
        if (user.token != '' && user.id != '') {
            setIsLoggedIn(true)
        }
    }, [user])

    // clean local storage
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };


    return {
        isLoggedIn,
        handleLogout
    }
}
