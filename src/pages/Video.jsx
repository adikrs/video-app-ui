import React from 'react';
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import Comments from '../components/Comments';
import Card from '../components/Card';

const Container = styled.div`
display:flex;
flex-wrap:wrap;
gap:20px;
`;

const Data = styled.div`
flex:5;
`;

const SimilarContent = styled.div`
flex:3;
`;

const VideoWrapper = styled.div`
/* flex:5; */
`;

const VideoTitle = styled.div`
/* flex:5; */
font-size: 20px;
font-weight: 420px;
margin-top: 18px;
margin-bottom: 10px;
`;

const Buttons = styled.div`
/* flex:5; */
display: flex;
gap:18px;

`;

const Button = styled.div`
/* flex:5; */
display: flex;
align-items: center;
cursor: pointer;
gap:7px;
`;

const Details = styled.div`
/* flex:5; */
display: flex;
justify-content: space-between;
align-items: center;
`;

const Info = styled.div`
/* flex:5; */
`;

const Icon = styled.img`
width: 40px;
height: 40px;
border-radius: 60%;
border: 1px solid black;
`;

const Hr = styled.hr`
    border: 0.7px solid black;
    margin: 14px 0px;
`

const UploadedBy = styled.div`
display: flex;
justify-content: space-between;
margin-top: 30px;
`;

const UploaderInfo = styled.div`
display: flex;
gap:20;
`;

const UploaderImage = styled.img`
height: 50px;
width: 50px;
border-radius: 50%;
`;

const Subscribe = styled.button`
background-color: #e64141;
font-weight:550;
color:white;
border-radius: 4px;
height: max-content;
padding: 10px 22px;
cursor: pointer;
`;

const UploaderDetails = styled.span`
`;
const UploaderName = styled.span`
`;
const UploaderDescription = styled.p`
`;



const Video = () => {
    return (
       <Container>
        <Data> Video content
            <VideoWrapper>
            <iframe width="100%"
                        height="550"
                        src="https://www.youtube.com/embed/tmg6d3T_T6Q"
                        title="Sports video"
                        allowFullScreen
                        frameBorder="0"
                        allow='autoplay; picture-in-picture;'
                         >
                </iframe>
            </VideoWrapper>
            <VideoTitle>Sports Video </VideoTitle>
            <Details>
                <Info> 2 hrs ago ... 1M Views </Info>
                <Buttons>
                    <Button> <ThumbUpIcon/> 100k </Button>
                    <Button> <ThumbDownIcon/> 2k </Button>
                    <Button> <ShareIcon/>  </Button>
                </Buttons>

            </Details>
            {/* <Hr/> */}

            <UploadedBy>
                <UploaderInfo>
                    <UploaderImage src="https://lamhas.com/wp-content/uploads/2022/06/3-1.png"/>
                    <UploaderDetails>
                        <UploaderName>Star Sports - </UploaderName>
                        <UploaderName>100k subscribers</UploaderName>
                        <UploaderDescription>Star Sports Network is a group of Indian pay television sports channels owned by Disney Star, a subsidiary of Disney India, the channel currently holds rights of flagship tournaments like Indian Premier League, ICC Events, Premier League, ONE Championship, Wimbledon etc.</UploaderDescription>
                    </UploaderDetails>

                </UploaderInfo>
                <Subscribe>SUBSCRIBE</Subscribe>
            </UploadedBy>

            <Hr/>

            <Comments/>

        </Data>

        <SimilarContent> Similar Videos
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        <Card type="small"/>
        </SimilarContent>
       </Container>

    )
}

export default Video;