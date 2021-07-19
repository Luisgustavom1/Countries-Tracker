import styled from 'styled-components'
import colors from '../colors'

const Header = styled.header`
    font-weight: 800;
    background-color: ${props => props.Darks == true ? colors.DarkModeElements : colors.white};
    padding: 7px 0;
    .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 85%;
        margin: 0 auto;
        color: ${props => props.Darks == true ? colors.white : colors.LightModeText};
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