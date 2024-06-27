import styled from "styled-components";

function TextInput({ type, icon, placeholder }) {
    return (
        <Box>
            <IconWrapper>
                {icon}
            </IconWrapper>
            <Input type={type} placeholder={placeholder} />
        </Box>
    );
}

const Box = styled.div`
    display: flex;    
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 300px;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.TEXT};

    margin-bottom: 8px;

    &::placeholder {
        color: ${({ theme }) => theme.COLORS.DARK_GREY}
    }
    &:focus {
       outline: none;
    }
`;

export default TextInput;