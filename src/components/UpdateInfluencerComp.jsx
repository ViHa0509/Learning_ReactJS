import { css } from '@emotion/css';
import { Dialog } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserServices from '../services/userServices';
export default function UpdateInfluencerComp() {
    const {openUpdate, setOpenUpdate, userUpdate, setUserUpdate} = useContext(UserContext);
    const {updateUsers}  = UserServices();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const userName = formData.get('userName');
        const name = formData.get('name');
        const biography = formData.get('biography');
        userUpdate.username = userName;
        userUpdate.last_name = name;
        userUpdate.biography = biography;
        setUserUpdate(userUpdate);
        updateUsers(userUpdate);
        setOpenUpdate(false);
    }
    return (
        <>
            <Dialog className={css`.MuiPaper-root {width: 100%; max-width: 800px !important;}`} 
                open={openUpdate} onClose={() => setOpenUpdate(false)}>
                <div className="w3-card-4" style={{margin:"auto", width:"100%"}}>
                    <div className="w3-container w3-blue w3-center">
                        <h2><i className="fa" aria-hidden="true"></i>Update Influencer</h2>
                    </div>
                    <form id="taskForm" onSubmit = {(e)=> handleSubmit(e)}  className="w3-container w3-padding-16" style={{backgroundColor:"#EEEEEE"}}>
                        <label><i className="fa fa-star" aria-hidden="true"></i>Username</label>
                        <input name="userName" className="w3-input w3-margin-bottom"  type="text" defaultValue={userUpdate?.username}/>
                        <label><i className="fa fa-star" aria-hidden="true"></i>Name</label>
                        <input name="name" id="name" className="w3-input w3-margin-bottom"  type="text" defaultValue={userUpdate?.last_name}/>
                        <label><i className="fa fa-star" aria-hidden="true"></i>Biography</label>
                        <input name="biography" id="biography" className="w3-input w3-margin-bottom"  type="text" defaultValue={userUpdate?.biography}/>
                        <button className="w3-input w3-btn w3-blue w3-margin-top" style={{margin:"auto", width:"50%"}}> 
                            Update
                        </button>
                    </form>
                </div>
            </Dialog>
        </>
    )
}