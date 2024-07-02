import { useContext, useEffect, useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import StarsComponent from "./components/StarsComponent";
import { UserContext } from "./contexts/UserContext";
import UserServices from "./services/userServices";
import "./styles.css";

let influencersPerPage = 5;
let arrayForHoldingInfluencers = [];

export default function App() {
    const { influencerData, loading, setInfluencerData, token } = useContext(UserContext);
    const [next, setNext] = useState(6);
    const { fetchUsers, fetchClubUsers } = UserServices();
    useEffect(() => {
        //console.log("token: ", token)
        const loadUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setInfluencerData(usersData);
                // const clubUsers = await fetchClubUsers(1);
                // setInfluencerData(clubUsers);
            } catch (error) {
                console.error("Failed to load users:", error);
            }
        }
        loadUsers()
    }, [token]);

    useEffect(
        () => {
            if (influencerData.length > 0) {
                if (influencerData.length >= influencersPerPage) {
                    for (let i = 0; i < influencersPerPage; i++) {
                        arrayForHoldingInfluencers[i] = influencerData[i];
                    }
                } else {
                    for (let i = 0; i < influencerData.length; i++) {
                        arrayForHoldingInfluencers[i] = influencerData[i];
                    }
                }
            }

        }
        , [influencerData])

    const showMoreInfluencers = (e) => {
        if(arrayForHoldingInfluencers.length === influencerData.length) {
            scrollToTop(e);
        }
        if (arrayForHoldingInfluencers.length >= influencerData.length) {
            arrayForHoldingInfluencers = [];
            for (let i = 0; i < influencersPerPage; i++) {
                if (influencerData[i] !== undefined) {
                    arrayForHoldingInfluencers[i] = influencerData[i];
                }
            }
            setNext(influencersPerPage);
        } else {
            let diff = influencerData.length - arrayForHoldingInfluencers.length;
            if (diff >= influencersPerPage) {
                for (let i = next; i < next + influencersPerPage; i++) {
                    if (influencerData[i] !== undefined) {
                        arrayForHoldingInfluencers[i] = influencerData[i];
                    }
                }
                setNext(next + influencersPerPage)
            } else {
                for (let i = next; i <= next + diff; i++) {
                    if (influencerData[i] !== undefined) {
                        arrayForHoldingInfluencers[i] = influencerData[i];
                    }
                }
                setNext(next + diff)
            }
        }
    }

    const scrollToTop = (e) => {
        e.preventDefault();
        const element = document.getElementById('user-app');
        return element.scrollIntoView({behavior: 'smooth', block: 'start'})
    }
    return (
        <div className="App">
            {loading && <p id="spinner"><i className="fa fa-spinner w3-spin w3-display-middle" style={{ fontSize: "64px" }}></i></p>}
            <NavbarComponent data={influencerData} />
            <section id="user-app">
                <StarsComponent data={arrayForHoldingInfluencers} />
                {
                arrayForHoldingInfluencers.length >= influencersPerPage ? (
                    <div className="loadButton">
                        <button onClick={showMoreInfluencers} className="w3-button w3-white w3-border w3-border-blue">
                            <span className="w3-large" >{
                                arrayForHoldingInfluencers.length == influencerData.length ?  'Show Less' : 'Show More'
                            }</span>
                        </button>
                    </div>
                ) : <></>
            }
            </section>
        </div>
    )
}