import styled from "styled-components";
import colors from "../colors";

export const Main = styled.main`
    background-color: ${props => props.darkMode === true ? colors.DarkModeBackground : colors.LightModeBackground};
    min-height: 100vh;
`