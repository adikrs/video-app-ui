import React from 'react';
import styled from 'styled-components'
import Card from '../components/Card';
import { useState } from 'react';
import axios from 'axios';
import { signInStart, signInFailure, signInSuccess } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

import { auth, provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth';


const Container = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: calc(100vh-20px);
`;

const Wrapper = styled.div`
display:flex;
flex-direction: column;
align-items: center;
border:1px solid;
gap:10px;
padding: 30px 65px;
background-color: #e2e2e2;
`;

const Title = styled.h1`
font-size: 25px;
`;

const SubTitle = styled.h2`
font-size: 20px;
font-weight: 300;
`;

const Input = styled.input`
border:1px solid;
border-radius: 2px;
padding: 11px;
background-color: transparent;
width: 100%;
`;

const Button = styled.button`
border-radius: 2px;
border: none;
padding: 10px 20px;
font-weight: 450px;
cursor: pointer;
`;

const SignIn = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()

    const loginHandler = async (e) => {
        e.preventDefault();

        dispatch(signInStart())
        //request
        try{
            const res = await axios.post("/auth/login", {username,password})
            // console.log(res.data);
            dispatch(signInSuccess(res.data))
        }
        catch(err)
        {
            console.log(err);
            dispatch(signInFailure())
        }
    }


    const googleLoginHandler = async (e) => {
        e.preventDefault();

        dispatch(signInStart())
        //request
        try{
            const res = await axios.post("/auth/login", {username,password})
            // console.log(res.data);
            dispatch(signInSuccess(res.data))
        }
        catch(err)
        {
            console.log(err);
            dispatch(signInFailure())
        }
    }


    return (
       <Container>
        <Wrapper>

            <Title> Sign In</Title>
            <SubTitle>to view the application</SubTitle>
            <Input placeholder='username' onChange={e=>setUserName(e.target.value)}></Input>
            <Input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}></Input>

            <Button onClick={loginHandler}> Click to sign in</Button>

            <Title> or </Title>

            {/* google login */}
            <Button onClick={googleLoginHandler}> Google Sign In</Button>

            <Title> or </Title>

            <Input placeholder='username' onChange={e=>setUserName(e.target.value)}></Input>
            <Input placeholder='email' onChange={e=>setEmail(e.target.value)}></Input>
            <Input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}></Input>
            <Button> Click to SignUp/Register</Button>

        </Wrapper>
       </Container>
    )
}

export default SignIn;