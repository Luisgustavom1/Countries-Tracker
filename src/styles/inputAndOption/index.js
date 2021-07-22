import styled from 'styled-components'

const InputAndOption = styled.div`
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
    .input{
        background-color: ${props => props.theme.colors.elements};
        display: flex;
        align-items: center;
        width: 30vw;
        padding: 15px 25px;
        border-radius: 6px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        gap: 16px;       
    }
    select{
      width: 20vw;
    }
    .options{
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        padding: 15px 15px;
        background-color: ${props => props.theme.colors.elements};
        border-radius: 6px;
    }
    input, select{
      background-color: ${props => props.theme.colors.elements};
      width: 100%;
      color: ${props => props.theme.colors.text};
      ::-webkit-input-placeholder{
        color: ${props => props.theme.colors.text};                
      }
    }
`
export default InputAndOption