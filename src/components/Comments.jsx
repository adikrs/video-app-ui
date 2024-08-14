import React from 'react';
import styled from 'styled-components'
import LogoImage from "../images/icon.jpeg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TheatersIcon from '@mui/icons-material/Theaters';
import FeedIcon from '@mui/icons-material/Feed';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Comment from './Comment';

const Container = styled.div`
`;


const NewComment = styled.div`
display: flex;
align-items: center;
gap:15px;
`;

const Profile = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const Input = styled.input`
width: 100%;
outline: nobe;
padding: 4px;
border: none;
border-bottom: 2px solid;
background-color: transparent;
`;


const Comments = () => {
    return (
       <Container>
        <NewComment>
            <Profile  src='https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?size=626&ext=jpg'/>
            <Input placeholder='Please add your comment!...'/>
        </NewComment>

        {/* older comments */}
        <Comment/>
        <Comment/>
        <Comment/>

       </Container>
    )
}

export default Comments;