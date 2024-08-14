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

const Container = styled.div`
display: flex;
gap:10px;
margin: 25px 1px;
`;


const Details = styled.div`
display: flex;
flex-direction: column;
gap:12px;
`;

const Name = styled.span`
font-weight: 550;
font-size: 14px;
`;

const Date = styled.span`
font-weight: 400;
font-size: 12px;
margin-left: 5px;
`;

const Text = styled.span`
font-size: 14px;
`;

const Profile = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;



const Comment = () => {
    return (
        
       <Container> 
        <Profile  src='https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.1638464654.1723607774&semt=ais_hybrid'/>
        <Details>
            <Name> Ravi Kumar 
                <Date> 1 week ago</Date>
            </Name>
            <Text>Video looks fantastic! Learned how to play sports.</Text>
        </Details>
        </Container>
    )
}

export default Comment;