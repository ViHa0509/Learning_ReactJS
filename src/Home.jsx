import { useContext, useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import StarsComponent from "./components/StarsComponent";
import { UserContext } from "./contexts/UserContext";
import "./styles.css";


let influencersPerPage = 6;
let arrayForHoldingInfluencers = [];

export default function App() {
    const {influencerData, loading} = useContext(UserContext);
    const [next, setNext] = useState(6);
    for(let i=0; i<influencersPerPage; i++){
        arrayForHoldingInfluencers[i]=influencerData[i];
    }
    useEffect(
        () => {
            console.log('abc');}
    , [influencerData])

     const showMoreInfluencers = () => {
        if(arrayForHoldingInfluencers.length >= influencerData.length){
            arrayForHoldingInfluencers = [];
            for(let i=0; i<influencersPerPage; i++){
                arrayForHoldingInfluencers[i]=influencerData[i];
            }
            setNext(influencersPerPage);
        } else {
            let diff = influencerData.length-arrayForHoldingInfluencers.length;
            if(diff>=6){
                for(let i=next; i<next+influencersPerPage; i++){
                    arrayForHoldingInfluencers[i]=influencerData[i];
                }
                setNext(next+influencersPerPage)
            } else {
                for(let i=next; i<=next+diff; i++) {
                    arrayForHoldingInfluencers[i]=influencerData[i];
                }
                setNext(next+diff);
            }
        }
        console.log(arrayForHoldingInfluencers)
    }
    return(
        <div className="App">
            {loading && <p id="spinner"><i className="fa fa-spinner w3-spin w3-display-middle" style={{fontSize:"64px"}}></i></p>}
            <NavbarComponent data={arrayForHoldingInfluencers}/>
            <StarsComponent data={arrayForHoldingInfluencers}/>
            <div className="loadButton">
                <button className="w3-button w3-white w3-border w3-border-blue">
                    {(arrayForHoldingInfluencers.length==influencerData.length)?
                        <span className="w3-large" onClick={showMoreInfluencers}>Show less</span>:
                        <span className="w3-large" onClick={showMoreInfluencers}>Show more</span>
                    }
                </button>
            </div>
        </div>
    )
}