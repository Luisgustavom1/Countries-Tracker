import styled from "styled-components";

const Buttons = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
    font-size: 14px;
    border-radius: 4px;

`

export default Buttons