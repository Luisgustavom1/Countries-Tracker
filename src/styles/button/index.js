import styled from "styled-components";
import colors from '../colors'

const Button = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${props => props.teste == true ? colors.DarkModeElements : colors.white};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
    color: ${props => props.teste == true ? colors.white : colors.LightModeText};
    font-size: 14px;
    border-radius: 4px;
`

export default Button