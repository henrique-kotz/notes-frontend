import styled from "styled-components";

function NavBar() {
    return (
        <Container>

        </Container>
    );
}

const Container = styled.nav`
    height: 106px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};
`;

export default NavBar;