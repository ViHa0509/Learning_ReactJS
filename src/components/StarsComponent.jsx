import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import InfluencerComponent from "./InfluencerComponent";

export default function StarsComponent(props){
    const {searchInput, filterResults} = useContext(UserContext)
    const renderInfluencers = (influencers) => {
        return influencers?.length > 0 ? (
            influencers.map((influencer) => (
                <li key={`${influencer?.id}-${influencer?.last_name}`} 
                style={{margin: '20px 0'}}
                className="w3-bar w3-card-4">
                    <InfluencerComponent data={influencer} />
                </li>
            ))
        ) : (
            <li className="w3-bar w3-hover-light-grey">
                <InfluencerComponent data={[]} />
            </li>
        );
    };
    if (searchInput && searchInput.length > 0) {
        return <ul className="w3-ul">{renderInfluencers(filterResults)}</ul>;
    } else {
        return <ul className="w3-ul">{renderInfluencers(props?.data)}</ul>;
    }
}