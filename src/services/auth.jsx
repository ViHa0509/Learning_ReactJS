
export const isLoggedIn = () => {
    console.log("CHECK LOGGED IN");
    let token = localStorage.getItem('mytoken');
    let isLogin = false;
    if(token !== null){
        isLogin = true;
    }
    console.log("logged in:", isLogin)
    return isLogin;
};