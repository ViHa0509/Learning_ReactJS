import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import { styled } from '@mui/material';
import * as React from 'react';
import { UserContext } from '../contexts/UserContext';
import UserServices from '../services/userServices';

const UserDetailPopUp = ({ open, anchor }) => {
    const id = open ? 'simple-popup' : undefined;
    const { logoutUser } = UserServices();
    const { authUser } = React.useContext(UserContext);
    return (
        <div>
            <BasePopup id={id} open={open} anchor={anchor}>
                <PopupBody>
                    <Header>
                        <ProfileImage src='/assets/picture/bluemaex.jpg' alt="User" />
                        <UserInfo>
                            <UserName>{authUser.username}</UserName>
                            <UserFullName>{authUser.first_name} {authUser.last_name}</UserFullName>
                        </UserInfo>
                    </Header>
                    <LogoutButton onClick={() => logoutUser()}>
                        Logout
                    </LogoutButton>
                </PopupBody>
            </BasePopup>
        </div>
    );
};

const PopupBody = styled('div')(({ theme }) => `
    width: 400px;
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: white;
    box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  `,
);

const Header = styled('div')`
    display: flex;
    align-items: center;
    gap: 16px;
`;

const ProfileImage = styled('img')`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`;

const UserInfo = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const UserName = styled('h1')`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
`;

const UserFullName = styled('h2')`
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    color: grey;
`;

const LogoutButton = styled('button')`
    width: 30%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

export default UserDetailPopUp;