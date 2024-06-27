import styled from "styled-components";

function Header() {
    return (
        <>
            <Title>
                Rocket Notes
            </Title>
            <Subtitle>
                Aplicação para salvar e gerenciar seus links úteis.
            </Subtitle>
        </>
    );
}

const Title = styled.h1`
    color: ${({ theme }) => theme.COLORS.BURNT_YELLOW};
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 8px;
`;

const Subtitle = styled.h2`
    color: ${({ theme }) => theme.COLORS.LIGHT_GREY};
    font-size: 14px;
    font-weight: 500;

    margin-bottom: 48px;
`;

export default Header;