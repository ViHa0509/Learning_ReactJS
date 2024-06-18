import axios from 'axios';
import { useContext, useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import StarsComponent from "./components/StarsComponent";
import { UserContext } from "./contexts/UserContext";
import "./styles.css";


let influencersPerPage = 6;
let arrayForHoldingInfluencers = [];

export default function App() {
    const { influencerData, loading, setInfluencerData } = useContext(UserContext);
    const [next, setNext] = useState(6);

    const token = 'e3e77aee7d1f21ae265a65d0084a6886fd4093ee';

    useEffect(() => {
        async function getAPI() {
            const users = await axios.get('http://localhost:8000/member/users/all/', {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                credentials: 'include',

            });
            setInfluencerData(users.data)
        }
        getAPI();
       
    }, []);

    useEffect(
        () => {
            if (influencerData?.length > 0) {
                for (let i = 0; i < influencersPerPage; i++) {
                    arrayForHoldingInfluencers[i] = influencerData[i];
                }
            }
        }
        , [influencerData])

    const getUsers = async () => {
        const users = await axios.get('http://localhost:8000/member/users/all/', {
            headers: {
                'Content-Type': "application/json",
                'Accept': 'application/json',
                'Authorization': `Token ${token}`,
            },
            credentials: 'include',
        });
        return users;
    }

    const showMoreInfluencers = () => {
        if (arrayForHoldingInfluencers.length >= influencerData.length) {
            arrayForHoldingInfluencers = [];
            for (let i = 0; i < influencersPerPage; i++) {
                arrayForHoldingInfluencers[i] = influencerData[i];
            }
            setNext(influencersPerPage);
        } else {
            let diff = influencerData.length - arrayForHoldingInfluencers.length;
            if (diff >= 6) {
                for (let i = next; i < next + influencersPerPage; i++) {
                    arrayForHoldingInfluencers[i] = influencerData[i];
                }
                setNext(next + influencersPerPage)
            } else {
                for (let i = next; i <= next + diff; i++) {
                    arrayForHoldingInfluencers[i] = influencerData[i];
                }
                setNext(next + diff);
            }
        }
        console.log(arrayForHoldingInfluencers)
    }
    return (
        <div className="App">
            {loading && <p id="spinner"><i className="fa fa-spinner w3-spin w3-display-middle" style={{ fontSize: "64px" }}></i></p>}
            <NavbarComponent data={arrayForHoldingInfluencers} />
            <div>
                <StarsComponent data={arrayForHoldingInfluencers} />
            </div>
            <div className="loadButton">
                <button className="w3-button w3-white w3-border w3-border-blue">
                    {(arrayForHoldingInfluencers.length == influencerData.length) ?
                        <span className="w3-large" onClick={showMoreInfluencers}>Show less</span> :
                        <span className="w3-large" onClick={showMoreInfluencers}>Show more</span>
                    }
                </button>
            </div>
        </div>
    )
}