import { css } from '@emotion/css';
import { Dialog } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
export default function CreateNewInflucencer() {
    const {open, setOpen, setInfluencer, CreateInfluencer} = useContext(UserContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        console.log(formData)
        const userName = formData.get('userName');
        const name = formData.get('name');
        console.log(userName);
        console.log(name);
        const newInfluencer = {
            profilePicture: "",
            username: userName,
            name: name,
        }
        console.log(newInfluencer)
        // setInfluencer(newInfluencer);
        CreateInfluencer(newInfluencer);
    }
    return (
        <>
            <Dialog className={css`.MuiPaper-root {width: 100%; max-width: 800px !important;}`} 
                open={open} onClose={() => setOpen(false)}>
                <div className="w3-card-4" style={{margin:"auto", width:"100%"}}>
                    <div className="w3-container w3-blue w3-center">
                        <h2><i className="fa" aria-hidden="true"></i>Create Influencer</h2>
                    </div>
                    <form id="taskForm" onSubmit = {(e)=> handleSubmit(e)}  className="w3-container w3-padding-16" style={{backgroundColor:"#EEEEEE"}}>
                        <label><i className="fa fa-star" aria-hidden="true"></i>Username</label>
                        <input name="userName" className="w3-input w3-margin-bottom"  type="text"/>
                        <label><i className="fa fa-star" aria-hidden="true"></i>Name</label>
                        <input name="name" id="name" className="w3-input w3-margin-bottom"  type="text"/>
                        <button className="w3-input w3-btn w3-blue w3-margin-top" style={{margin:"auto", width:"50%"}}> 
                            Add
                        </button>
                    </form>
                </div>
            </Dialog>
        </>
    )
}