import styled from "styled-components";

import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

function Home() {
    return (
        <Container>
            <SideBar />
            <NavBar />
        </Container>
    );
}

const Container = styled.section`
    display: flex;
`;

export default Home;