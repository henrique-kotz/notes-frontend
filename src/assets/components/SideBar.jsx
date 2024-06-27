import { useState } from "react";
import styled from "styled-components";

import CreateButton from "./CreateButton";

function SideBar() {
    const [tags, setTags] = useState(["Marcador1", "Marcador2", "Marcador3"]);
    const [selected, setSelected] = useState(true);

    return (
        <Container>
            <Title>
                <h2>Rocket Notes</h2>
            </Title>

            <Wrapper>
                <ul>
                    <Item selected>Todos</Item>
                    {tags.map((item, index) => <Item key={index}>{item}</Item>)}
                </ul>
                <CreateButton />
            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    height: 100vh;

    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    width: 250px;
    height: 106px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT};

    display: flex;

    h2 {
        color: ${({ theme }) => theme.COLORS.BURNT_YELLOW};
        font-size: 24px;
        font-weight: 700;

        margin: auto;
    }
`;

const Wrapper = styled.div`
    height: calc(100vh - 106px);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    ul {
        text-align: center;
        margin-top: 64px;
        color: ${({ theme }) => theme.COLORS.LIGHT_GREY};

        display: flex;
        flex-direction: column;
    }
`;

const Item = styled.li`
        font-size: 16px;
        margin-bottom: 24px;
        color: ${({ selected, theme }) => selected ? theme.COLORS.BURNT_YELLOW : theme.COLORS.LIGHT_GREY};
`;

export default SideBar;