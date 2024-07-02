import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
const UserServices = () => {
    const {token, setToken, setAuthUser} = useContext(UserContext);
    const navigate = useNavigate();
    const {setIsLoggedIn} = useContext(UserContext);

    useEffect(() => {
        if(token == '') {
            let mydata = JSON.parse(localStorage.getItem('mydata'));
            if(mydata!== null){
                setToken(mydata['token']);
                setAuthUser(mydata)
            }
        }
    }, [setToken]);


    const fetchClubUsers = async(club_id) => {
        try{
            const response = await axios.get(`http://localhost:8000/club/manage-club/${club_id}/all-member?user-detail=true`, {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json',
                    'Authorization': `Token ${token['token']}`,
                },
                credentials: 'include',
            });
            return response.data;
        } catch (error) {
            return '';
        }
    };
    
    const fetchUsers = async() => {
        try{
            console.log("token", token)
            const response = await axios.get('http://localhost:8000/member/users/all/', {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                credentials: 'include',
            });
            return response.data;
        } catch (error) {
            return '';
        }
    };

    const updateUsers = async(data) => {
        try{
            const response = await axios.put(`http://localhost:8000/member/users/${data.id}/`, data, {
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Token ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            return '';
        }
    };

    const loginUser = async(data) => {
        try {
            const response = await axios.post('http://localhost:8000/member/login/', data, {
                headers: {
                    'Content-Type': "application/json"
                }
            });
            let data_response = response.data;
            console.log("data response :", data_response)
            if (data_response) {
                localStorage.setItem('mydata', JSON.stringify(data_response));
            }
            return data_response;
        } catch (error) {
            return '';
        }
    };

    const signUpUser = async(data) => {
        try {
            const response = await axios.post('http://localhost:8000/member/register/', data, {
                headers: {
                    'Content-Type': "application/json"
                }
            });
            let response_data = response.data;

            console.log("data result: ", response_data)
            return response_data;
        } catch (error) {
            return '';
        }
    };

    const logoutUser = () => {
        localStorage.removeItem("mydata");
        setIsLoggedIn(false);
        return navigate("/login");
    }

    return {
        loginUser,
        fetchUsers,
        updateUsers,
        fetchClubUsers,
        logoutUser,
        signUpUser
    }
}

export default UserServices;