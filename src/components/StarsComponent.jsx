import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import InfluencerComponent from "./InfluencerComponent";

export default function StarsComponent(props){
    const {searchInput, filterResults} = useContext(UserContext)
    return (
        <ul className="w3-ul w3-card-4">
            {
            searchInput.length > 1 ? (
                filterResults.length > 0 ? (filterResults.map((influencer)=> 
            <li key={`${influencer.userId}-${influencer.name}`} className="w3-bar w3-hover-light-grey">
                    <InfluencerComponent data={influencer}/>
                </li>)) : (
                    <InfluencerComponent data={[]}/>
                )
            ):(props.data.map((influencer) =>
                <li key={`${influencer.userId}-${influencer.name}`} className="w3-bar w3-hover-light-grey">
                    <InfluencerComponent data={influencer}/>
                </li>
            ))}
        </ul>
    );
}