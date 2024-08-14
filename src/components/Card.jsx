import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Container = styled.div`
width: ${(props)=>props.type !=="small" && "350px"}; 
margin-bottom: ${(props)=>props.type ==="small" ? "10px" : "35px"};
padding-left: 12px;
cursor: pointer;
display: ${(props)=>props.type ==="small" && "flex"};
gap:10px;
`;

const Thumbnail = styled.img`
width: 100%;
height: ${(props)=>props.type ==="small" ? "130px" : "210px"}; 
background-color: grey;
border: 2px solid black;
flex:1;
`;

const Icon = styled.img`
width: 40px;
height: 40px;
border-radius: 60%;
border: 1px solid black;
display : ${(props)=>props.type ==="small" && "none"}; 
`;

const Details = styled.div`
display: flex;
gap:10px;
margin-top: ${(props)=>props.type ==="small" && "15px"}; 
flex:1;
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



const Card = ({type}) => {
    return (
        <Link to="/video/abc" style={{textDecoration:"none"}}>
        <Container type={type}> 
            <Thumbnail type={type} src="https://theunn.com/wp-content/uploads/2024/06/Feature-and-Cover-India-Stuns-South-Africa-By-Winning-T20-World-Cup-Title.jpg"/> 
            <Details type={type}>
                <Icon type={type}  src="https://lamhas.com/wp-content/uploads/2022/06/3-1.png"/>
                <About>
                    <Title> Sports World Cup Video</Title>
                    <UploadedBy>Star Sports</UploadedBy>
                    <Info> 2 hrs ago ... 1M Views </Info>
                </About>
            </Details>
        </Container>
        </Link>
    )
}

export default Card;