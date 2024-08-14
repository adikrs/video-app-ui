import styled from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Video from "./pages/Video";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";


const Container = styled.div`
display:flex;
`;

const Main = styled.div`
flex:10;
background-color: white;
color: black;
`;

const Wrapper = styled.div`
padding: 20px 40px;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Menu/>
      <Main>
        <Navbar/>
        {/* Video section - with different video boxes */}
       <Wrapper>
        {/* <h1>Video Title</h1>
        <h1>Video Title</h1>
        <h1>Video Title</h1>
        <h1>Video Title</h1> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="signIn" element={<SignIn/>}/>
              <Route path="video">
                <Route path=":videoId" element={<Video/>}/>
              </Route>
          </Route>
        </Routes>
       </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
