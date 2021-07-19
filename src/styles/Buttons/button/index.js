import styled from "styled-components";
import colors from '../../colors'

const Buttons = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${props => props.darkMode == true ? colors.DarkModeElements : colors.white};
    color: ${props => props.darkMode == true ? colors.white : colors.DarkModeElements};
    box-shadow: 2px 2px 10px rgba(0, 0, 0, .3);
    font-size: 14px;
    border-radius: 4px;
`

export default Buttons