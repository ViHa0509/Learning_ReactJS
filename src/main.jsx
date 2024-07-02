import React, { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from './Layout.jsx';
import UserContextProvider from "./contexts/UserContextProvider.jsx";
// import './index.css';
import Home from "./Home.jsx";
import SignUpSide from './components/SignUp.jsx';
import SignInSide from './components/login.jsx';
import { UserContext } from './contexts/UserContext.jsx';

const AppRouter = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);

    useEffect(() => {
        console.log("Check login!!!")
        const mydata = localStorage.getItem('mydata');
        console.log(mydata)
        if (mydata !== null) {
            setIsLoggedIn(true);
        }
    }, [setIsLoggedIn]);

    return (
        <BrowserRouter>
            <Routes>
                {
                    isLoggedIn ? (
                        <Route path="/" element={<Layout />}>
                            <Route path="/login" element={<Navigate to="/home" />} />
                            {/* <Route path="/signup" element={<Navigate to="/home" />} /> */}
                            <Route index element={<Navigate to="/home" />} />
                            <Route path="home" element={<Home />} />
                        </Route>
                    ) : (
                        <>
                            <Route path="/" element={<Navigate to="/login" />} />
                            <Route path="/home" element={<Navigate to="/login" />} />
                            <Route path="/login" element={<SignInSide />} />
                            <Route path="/signup" element={<SignUpSide />} />
                        </>
                    )
                }
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserContextProvider>
            <AppRouter />
        </UserContextProvider>
    </React.StrictMode>,
);
