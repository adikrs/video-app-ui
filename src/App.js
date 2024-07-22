import styled from "styled-components"
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
display:flex;
`;

const Main = styled.div`
flex:10;
background-color: grey;
color: white;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu/>
      <Main>
        <Navbar/>
        Video section - with different video boxes
       <Wrapper>
        <h1>Video Title</h1>
        <h1>Video Title</h1>
        <h1>Video Title</h1>
        <h1>Video Title</h1>
       </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
