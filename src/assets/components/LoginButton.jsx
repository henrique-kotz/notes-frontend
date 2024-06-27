import styled from "styled-components";

function LoginButton({ text }) {
    return (
        <Button>
            {text}
        </Button>
    );
}

const Button = styled.button`
    width: 340px;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BURNT_YELLOW};
    border: none;
    border-radius: 10px;
    
    color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    font-size: 16px;
    font-weight: 500;

    margin-top: 24px;
`;

export default LoginButton;