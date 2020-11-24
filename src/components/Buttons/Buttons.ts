import styled from "styled-components";

const Button = styled.button`
  width: 135px;
  height: 45px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: bold;
  border: none;
  font-family: "Montserrat";

  @media screen and (max-width: 960px) {
    width: 105px;
    height: 40px;
    font-size: ${({ theme }) => theme.fontSizes.normal};
  }

  @media screen and (max-width: 800px) {
    width: 95px;
    height: 35px;
    font-size: calc(${({ theme }) => theme.fontSizes.normal} - 2px);
  }
`;

export const SignInButton = styled(Button)`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.darkPurple};
  color: ${({ theme }) => theme.darkPurple};
  transition: box-shadow 0.2s;
  margin-right: 20px;
  &:hover {
    box-shadow: 0px 0px 6px ${({ theme }) => theme.darkPurple};
  }
`;

export const JoinButton = styled(Button)`
  background-color: ${({ theme }) => theme.veryLightGreen};
  color: ${({ theme }) => theme.darkerGreen};
  transition: box-shadow 0.2s, border 0.2s;
  &:hover {
    box-shadow: 0px 0px 6px ${({ theme }) => theme.darkerGreen};
    border: 1px solid ${({ theme }) => theme.darkerGreen};
  }
`;

export default Button;
