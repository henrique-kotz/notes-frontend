import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;

  img {
    width: 60%;
    object-fit: cover;
  }
`;

export const Form = styled.div`
  width: 40%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 48px;
  }

  a {
    color: ${({ theme }) => theme.COLORS.BURNT_YELLOW};
    font-size: 16px;
    margin-top: 124px;
  }
`;