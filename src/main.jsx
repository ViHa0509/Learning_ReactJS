import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout.jsx';
import UserContextProvider from "./contexts/UserContextProvider.jsx";
// import './index.css';
import Home from "./Home.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    {/* <Route path="createInfluencer" element={<CreateNewInflucencer/>}/> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </UserContextProvider>
  </React.StrictMode>,
)
