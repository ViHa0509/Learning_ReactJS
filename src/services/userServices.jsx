import axios from 'axios';
const UserServices = () => {
    const token = 'e3e77aee7d1f21ae265a65d0084a6886fd4093ee';

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


    return {
        fetchUsers,
        updateUsers,
        fetchClubUsers
    }
}

export default UserServices;