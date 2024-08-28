import React from 'react';
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { logout } from '../redux/userSlice';

const Container = styled.div`
top:0;
position: sticky;
background-color: #e4e4e4;
height: 60px;
`;

const Wrapper = styled.div`
display: flex;
align-items: center;
height:100%;
padding: 1px 20px;
`;

const Search = styled.div`
position: absolute;
left:0px;
right:0px;
margin: auto;
width: 45%;
display: flex;
justify-content: space-between;
align-items: center;
border:2px solid black;
padding: 7px;
margin-top: 10px;
border: 1px solid #ccc;
border-radius: 4px;
`;

const Input = styled.div`
border: none;
background-color: transparent;
/* color: black; */
`;

const Button = styled.div`
background-color: transparent;
border: 2px solid #6d6de8;
color: #6d6de8;
padding: 7px 17px;
margin-top: 10px;
gap:6px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
font-weight: 600;
`

const User = styled.div`
display: flex;
align-items: center;
font-weight: 550;
gap:12px;

`

const Avatar = styled.img`
width :30px;
height: 30px;
border-radius: 60%;
background-color: grey;
`;


const Navbar = () => {

    const currentUser =  useSelector(state=>state.user)

    // const logoutHandler = async (e) => {
    //     e.preventDefault();
    
    //     dispatch(logout())
    //     //request
    //     try{
    //         const res = await axios.post("/auth/login", {username,password})
    //         // console.log(res.data);
    //         dispatch(signInSuccess(res.data))
    //     }
    //     catch(err)
    //     {
    //         console.log(err);
    //         dispatch(signInFailure())
    //     }
    // }


    return (
        // <div>Navbar</div>
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search Videos"/>
                    Search
                    <SearchIcon/>
                </Search>

                { (currentUser && currentUser.user) ? 
                (<User>
                    <Button> SIGN OUT</Button>  
                    <VideoLibraryIcon/>
                    <Avatar/>
                    { currentUser.user.name}
                </User>) :
                (<Link to="signIn" style={{textDecoration:"none"}}>
                <Button>
                    <AccountCircleIcon/>
                    SIGN IN!
                </Button>
                </Link>)
                }
            </Wrapper>
        </Container>
    )
}

export default Navbar;