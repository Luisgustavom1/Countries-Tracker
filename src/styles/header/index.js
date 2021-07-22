import styled from 'styled-components'

const Header = styled.header`
    font-weight: 800;
    width: 100vw;
    color: ${props => props.theme.colors.text};                
    background-color: ${props => props.theme.colors.elements};
    padding: 7px 0;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, .1);
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        margin: 0 auto;
        font-size: 16px;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            font-weight: 600;
            width: 90px;
        }
    }
`

export default Header