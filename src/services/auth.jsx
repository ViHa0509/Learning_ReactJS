
export const isLoggedIn = () => {
    console.log("CHECK LOGGED IN");
    return localStorage.getItem('mytoken') != null;
};