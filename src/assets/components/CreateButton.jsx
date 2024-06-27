import styled from "styled-components";
import { IoAdd } from "react-icons/io5";

function CreateButton() {
    return (
        <Button>
            <Icon size="24px" />
            <p>Criar nota</p>
        </Button>
    );
}

const Button = styled.button`
    width: 250px;
    height: 80px;
    background-color: ${({ theme }) => theme.COLORS.BURNT_YELLOW};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    p {
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    }
`;

const Icon = styled(IoAdd)`
    color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
`;

export default CreateButton;