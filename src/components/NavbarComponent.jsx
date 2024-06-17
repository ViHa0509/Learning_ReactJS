import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function NavbarComponent(props) {
    const {searchInput, setSearchInput, setFilterResults, setOpen} = useContext(UserContext);
    const navigate = useNavigate();
    const searchItems = (searchValue) => {
        setSearchInput(searchValue);
        if (searchInput!==''){
            const filteredData = props.data.filter((item)=>{
                console.log(item)
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            });
            setFilterResults(filteredData);
        } else {
            setFilterResults(props.data);
        }
    }

    function handleClickOpen() {
        setOpen(true)
    }

    return (
        <div className="w3-padding w3-large w3-top w3-blue">
            <div className="w3-quarter">
                <div className="w3-bar">
                <span className="w3-bar-item">
                    <span className="w3-text-black">{0}</span> Following</span>
                </div>
            </div>
            <div className="w3-half">
                <input type="text" className=" w3-border-0 w3-padding w3-round" style={{width:"100%"}}
                    onChange={(e) => searchItems(e.target.value)}
                />
            </div>
            <div className="w3-quarter">
                <div className="w3-bar w3-large">
                    <span className="w3-bar-item w3-left"><i className="fa fa-search"></i></span>
                    <a href="#" className="w3-bar-item w3-btn w3-right  w3-text-white" 
                        style={{height:"40px"}} to="../CreateInfluencer">
                        <span className="w3-large">Admin</span>
                    </a>
                    <button className="w3-bar-item w3-margin-left w3-button w3-right w3-circle w3-white" 
                        style={{height:"40px"}} onClick={handleClickOpen}><span className="w3-large">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};