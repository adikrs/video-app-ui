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

const Container = styled.div`
position: sticky;
top:0;
flex:2;
background-color:black;
height:100vh;
color:white;
font-size: 16px;
`;

const Wrapper = styled.div`
padding:20px 28px;
`;

const Logo =  styled.div`
display:flex;
gap:8px;
align-items: center;
font-weight: bold;
padding-bottom: 40px;
padding-top: 20px;
`;

const Image = styled.img`
height: 75px;
`;

const Hrblock =  styled.hr`
    margin: 18px 1px;
    border: 0.7px solid gray;
`

const SignIn = styled.div`
    
`

const Button = styled.div`
background-color: transparent;
border: 2px solid lightblue;
color: lightblue;
padding: 7px 17px;
margin-top: 10px;
gap:6px;
border-radius: 4px;
cursor: pointer;
display: flex;
align-items: center;
`



const Section = styled.div`
    display:flex;
    gap:20px;
    cursor: pointer;
    align-items: center;
    padding: 14px;
`;

const Title = styled.h2`
    font-weight: 600;
    font-size: 16px;
    color: #a7a7a7;
    
`

const Menu = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Image src={LogoImage} />
                        Video-APP
                </Logo>

                <SignIn> Sign in below to browse more!</SignIn>
                <Button> <AccountCircleIcon/> Sign In</Button>

                <Hrblock/>
                <Title>Fun Sections!</Title>
                <Section>
                    <HomeIcon/>
                    HomePage
                </Section>
                <Section>
                    <ExploreIcon/>
                    Explore
                </Section>

                <Section>
                    <TrendingUpIcon/>
                    Trending Videos
                </Section>

                <Hrblock/>
                <Title>Category Sections!</Title>

                <Section>
                    <SportsBaseballIcon/>
                    Sports
                </Section>

                <Section>
                    <FeedIcon/>
                    News
                </Section>

                <Section>
                    <LibraryMusicIcon/>
                    Music
                </Section>

                <Section>
                    <TheatersIcon/>
                    Movies
                </Section>

                <Hrblock/>


                <Section>
                    <HistoryIcon/>
                    History
                </Section>
            </Wrapper>
        </Container>
    )
}

export default Menu;