import { useState } from "react";
//import jsonData from "../services/follower-suggestions.json";
import { UserContext } from "./UserContext";

//jsonData.map((influencer) => influencer.isFollowed=false);
const UserContextProvider = (props) => {
    const [influencerData, setInfluencerData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filterResults, setFilterResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [influencer, setInfluencer] = useState({});
    const [openUpdate, setOpenUpdate] = useState(false);
    const [userUpdate, setUserUpdate] = useState();
    const [loadUser, setLoadUser] = useState(false);

    function CreateInfluencer(influencer) {
        setInfluencerData([influencer,...influencerData]);
    }

    function DeleteInfluencer(userId){
        console.log("DELETE USER: ", userId)
        const index = influencerData.findIndex((item) => 
            item.id === userId
        )
        if (index !== -1) {
            const updatedData = [...influencerData];
            updatedData.splice(index, 1);
            setInfluencerData(updatedData);
        }
    }
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
        openUpdate, setOpenUpdate,
        userUpdate,
        setUserUpdate,
        DeleteInfluencer,
        setInfluencerData,
        loadUser, setLoadUser
    };

    return (
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    );
};

export default UserContextProvider;