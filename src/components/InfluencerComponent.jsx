
import React from "react";

export default function InfluencerComponent(props){
    var description = props.data.biography
    if(props.data.biography==="") {
        description = props.data.website;
        if(props.data.website===""){
            description=props.data.name;
        }
    }
    if(!props.data.biography==="") {
        description = props.data.name;
    }
    return (
        <React.Fragment>
            <img src={props.data.profilePicture} 
                className="w3-bar-item w3-circle w3-hide-small" alt="shit">
            </img>
            <div className="w3-bar-item bio">
                <b><span className="w3-large">@ {props.data.username}</span><br></br></b>
                <div className="biography"><span>{description}</span></div>
            </div>
        </React.Fragment>
    )
}