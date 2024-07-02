import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import UserDetailPopUp from "./UserDetailNavBar";
export default function NavbarComponent(props) {
    const {searchInput, setSearchInput, setFilterResults, setOpen, authUser, setOpenUserDetail} = useContext(UserContext);
    const [anchor, setAnchor] = useState(null);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput!==''){
            const filteredData = props.data.filter((user)=>{
                let searchString = searchInput.toLowerCase()
                return Object.values(user.username||user.email||user.first_name||user.last_name).join('').toLowerCase().includes(searchString)
            });
            setFilterResults(filteredData);
        } else {
            setFilterResults(props.data);
        }
    }
    
    function closePop() {
        setOpenUserDetail(false);
        setAnchor(null);
    }
    
    const handleUserDetailClick = (event) => {
        setAnchor(anchor ? null : event.currentTarget);
        setOpenUserDetail(true);
    }

    return (
        <div style={
           {
           display: 'flex',
           justifyContent: "center",
           alignItems: 'center'

           }
        } className="w3-padding w3-large w3-top w3-blue">
            <div className="w3-quarter"></div>
            <div className="w3-half">
                <input type="text" className=" w3-border-0 w3-padding w3-round" style={{width:"100%"}}
                    onChange={(e) => searchItems(e.target.value)}
                />
            </div>
            <div className="w3-quarter">
                <div className="w3-bar w3-large">
                    <span className="w3-bar-item w3-left"><i className="fa fa-search"></i></span>
                    <button 
                        onClick={handleUserDetailClick} 
                        className="w3-bar-item w3-btn w3-right  w3-text-white" 
                        style={{height:"40px"}}
                    >
                        <span className="w3-large">{authUser.username}</span>
                    </button>
                </div>
            </div>
            <UserDetailPopUp open={Boolean(anchor)} anchor={anchor} onClose={closePop}/>
        </div>
    );
};