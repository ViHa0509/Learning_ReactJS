import axios from 'axios';
const UserServices = () => {
    const token = localStorage.getItem('mytoken');

    const fetchClubUsers = async(club_id) => {
        try{
            const response = await axios.get(`http://localhost:8000/club/manage-club/${club_id}/all-member?user-detail=true`, {
                headers: {
                    'Content-Type': "application/json",
                    'Accept': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                credentials: 'include',
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching users:", error);
            throw error;
        }
    };

    const fetchUsers = async() => {
        try{
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
            console.error("Error fetching users:", error);
            throw error;
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
            console.error("Error update users:", error);
            throw error;
        }
    };

    const loginUser = async(data) => {
        try {
            const response = await axios.post('http://localhost:8000/member/login/', data, {
                headers: {
                    'Content-Type': "application/json"
                }
            });
            let token = response.data;
            console.log(token);
            localStorage.setItem('mytoken', token['token']);
            return token;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logoutUser = () => {
        console.log("LOG OUT")
        localStorage.clear();
        navigator('/login');
    }

    return {
        loginUser,
        fetchUsers,
        updateUsers,
        fetchClubUsers,
        logoutUser
    }
}

export default UserServices;