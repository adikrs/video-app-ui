import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import {format} from 'timeago.js'
import { useState, useEffect } from 'react';
import axios from 'axios';

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



const Card = ({type,video}) => {

    const [channel,setChannel] = useState({});
    useEffect(()=> {
        const fetchUploader = async () => {
            const res = await axios.get(`/users/find/${video.userId}`)
            setChannel(res.data)
            // console.log(res.data);
            // console.log(channel);
            // console.log("hi channel");
        }
        fetchUploader()
    },[video.userId])

    // src={channel?.img}

    return (
        <Link to="/video/abc" style={{textDecoration:"none"}}>
        <Container type={type}> 
            <Thumbnail type={type} src={video.imageUrl}/> 
            <Details type={type}>
                <Icon type={type}  src="https://lamhas.com/wp-content/uploads/2022/06/3-1.png"/>
                <About>
                    <Title> {video.title} </Title>
                    <UploadedBy> {channel?.name} </UploadedBy>
                    <Info> {format(video.createdAt)} --- {video.views} views </Info>
                </About>
            </Details>
        </Container>
        </Link>
    )
}

export default Card;