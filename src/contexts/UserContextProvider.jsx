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

    function CreateInfluencer(influencer) {
        console.log(influencer);
        setInfluencerData([influencer,...influencerData]);
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
        CreateInfluencer
    };

    return (
        <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
    );
};

export default UserContextProvider;