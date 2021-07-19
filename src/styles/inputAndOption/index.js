import styled from 'styled-components'
import colors from '../colors'

const InputAndOption = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    .input{
        background-color: ${props => props.darkMode == true ? colors.DarkModeElements : colors.white};
        display: flex;
        align-items: center;
        width: 400px;
        padding: 15px 25px;
        border-radius: 6px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        gap: 16px;       
    }
    .options{
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        padding: 15px 15px;
        background-color: ${props => props.darkMode == true ? colors.DarkModeElements : colors.white};
        border-radius: 6px;
    }
`
export default InputAndOption