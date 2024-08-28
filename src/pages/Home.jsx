import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import Card from '../components/Card';
import axios from 'axios'
import { useState } from 'react';


const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-between;
`;

const Home = () => {

    const [videos,setVideos]  = useState([])

    useEffect(()=> {
        const fetchVideos = async () => {
            try{
                const res = await axios.get("/videos/find/")
                setVideos(res.data)
                // console.log(res);
                // console.log("hi hi");
            }
            catch(err)
            {
                console.log(err);
            }
        }
        fetchVideos()
    },[])

    return (
       <Container>
        {videos.map((video) => (
            <Card  key={video._id} video={video} />
        ))}
        {/* <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/> */}
       </Container>
    )
}

export default Home;