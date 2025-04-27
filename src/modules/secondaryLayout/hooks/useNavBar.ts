export const useNavBar = () => {

    // clean local storage
    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
    };


    return {
        handleLogout
    }
}
