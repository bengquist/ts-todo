import styled from "styled-components";

interface IButtonProps {
  primary: boolean;
}

const Button = styled.button<IButtonProps>`
  color: black;
  height: 30px;
  background-color: ${props => (props.primary ? "salmon" : "black")};
`;

export default Button;
