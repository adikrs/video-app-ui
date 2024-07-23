import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
width: 350px;
margin-top: 25px;
margin-bottom: 25px;
padding-left: 12px;
cursor: pointer;
`;

const Thumbnail = styled.img`
width: 100%;
height:210px;
background-color: grey;
border: 2px solid black;
`;

const Icon = styled.img`
width: 40px;
height: 40px;
border-radius: 60%;
border: 1px solid black;
`;

const Details = styled.div`
display: flex;
gap:10px;
margin-top: 12px;
`;

const About = styled.h1`
`;

const Title = styled.h1`
font-size: 17px;
`;

const UploadedBy = styled.h2`
font-size: 13px;
margin: 10px 1px;
`;

const Info = styled.div`
font-size: 11px;
`;



const Card = () => {
    return (
        <Container> 
            <Thumbnail src="https://theunn.com/wp-content/uploads/2024/06/Feature-and-Cover-India-Stuns-South-Africa-By-Winning-T20-World-Cup-Title.jpg"/> 
            <Details>
                <Icon src="https://lamhas.com/wp-content/uploads/2022/06/3-1.png"/>
                <About>
                    <Title> Sports World Cup Video</Title>
                    <UploadedBy>Star Sports</UploadedBy>
                    <Info> 2 hrs ago ... 1M Views </Info>
                </About>
            </Details>
        </Container>
    )
}

export default Card;