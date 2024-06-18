import { useState } from "react";
import jsonData from "../services/follower-suggestions.json";
import { UserContext } from "./UserContext";

jsonData.map((influencer) => influencer.isFollowed=false);
const UserContextProvider = (props) => {
    const [influencerData, setInfluencerData] = useState(jsonData);
    const [searchInput, setSearchInput] = useState('');
    const [filterResults, setFilterResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [influencer, setInfluencer] = useState({});
    const [openUpdate, setOpenUpdate] = useState(false);
    const [updateInfluencer, setUpdateInfluencer] = useState();
    
    function CreateInfluencer(influencer) {
        setInfluencerData([influencer,...influencerData]);
    }

    function DeleteInfluencer(userId){
        console.log("DELETE USER: ", userId)
        const index = influencerData.findIndex((item) => 
            item.userId === userId
        )
        if (index !== -1) {
            const updatedData = [...influencerData];
            updatedData.splice(index, 1);
            setInfluencerData(updatedData);
        }
    }

    function AllMember() {
        const headers = {
            'Content-Type': "application/json",
            'Authorization': "Token e3e77aee7d1f21ae265a65d0084a6886fd4093ee",
        }
        fetch("http://127.0.0.1:8000/member/users/all",{
            mode: 'cors',
            method: 'GET',
            headers: headers,
            credentials: 'include'
        }).then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json()
        }).then(json => console.log(JSON.stringify(json)));
            
    }
    const Members = AllMember();
    //console.log(Members)
    // function FuncUpdateInfluencer(influencer) {
    //     console.log(influencer);
    // }

    const value = {
        influencerData,
        searchInput,
        influencer,
        setSearchInput,
        filterResults,
        setFilterResults,
        open, setOpen,
        setInfluencer,
        CreateInfluencer,
        //FuncUpdateInfluencer,
        openUpdate, setOpenUpdate,
        updateInfluencer,
        setUpdateInfluencer,
        DeleteInfluencer
    };

    return (
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    );
};

export default UserContextProvider;