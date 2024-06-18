
import { css } from '@emotion/css';
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function InfluencerComponent(props){
    const {setOpenUpdate, setUpdateInfluencer, DeleteInfluencer} = useContext(UserContext);
    const {data} = props;
    function handleUpdate(data) {
        setOpenUpdate(true);
        setUpdateInfluencer(data);
    }
    function handleDelete(userId) {
        DeleteInfluencer(userId);
    }
    let description = data?.biography || data?.website || data?.name;
    return (
        data?.username ?(
            <div className={
                css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                ` 
            }>
                <img src={data.profilePicture} 
                    className="w3-bar-item w3-circle w3-hide-small" alt="shit">
                </img>
                <div className="w3-bar-item bio">
                    <b><span className="w3-large">@ {data.username}</span><br></br></b>
                    <div className="biography"><span>{description}</span></div>
                </div>
                {/* <button className="w3-bar-item w3-right" onClick={() => handleUpdate(data)}>
                    Edit
                </button> */}
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-black" style={{width: '150px'}} type="button" id="dropdownMenuButton">
                        Action
                    </button>
                    <div className="w3-dropdown-content w3-bar-block w3-border">
                        {/* <a class="w3-bar-item w3-button" href="#">Add</a> */}
                        <a className="w3-bar-item w3-button" onClick={() => handleUpdate(data)}>Edit</a>
                        <a className="w3-bar-item w3-button" onClick={() => handleDelete(data.id)}>Delete</a>
                    </div>
                </div>
            </div>
        ):(
            <h3 style={{textAlign: "center"}}>No result</h3>
        )
    );
}