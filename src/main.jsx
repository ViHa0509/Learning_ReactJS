import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout.jsx';
import UserContextProvider from "./contexts/UserContextProvider.jsx";
// import './index.css';
import Home from "./Home.jsx";
import SignInSide from './components/login.jsx';
import { isLoggedIn } from './services/auth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isLoggedIn() ? (
      <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    {/* <Route path="createInfluencer" element={<CreateNewInflucencer/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
      </UserContextProvider>
    ):(
      <SignInSide/>
    )}
  </React.StrictMode>,
)
