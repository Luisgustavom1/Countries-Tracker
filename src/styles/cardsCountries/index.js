import styled from 'styled-components'
import colors from '../colors'

const Cards = styled.div`
    width: 85%;
    flex-wrap: wrap;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 83px;
    
    div{
        background: ${props => props.darkMode === true ? colors.DarkModeElements : colors.LightModeBackground};
        width: 260px;
        height: 356px;
        border-radius: 6px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        margin: 50px 0 -53px 0;
        img{
            width: 100%;
            height: 174px;
            border-radius: 6px 6px 0 0;
        }
        section{
            padding: 0 15px 40px 20px;
            color: ${(props) => 
                props.darkMode === true ? colors.white : colors.LightModeText
            };
            h1{
                font-size: 18px;
                margin-bottom: 20px;
            }
            strong{
                font-weight: 600;
            }
            p{
                margin: 0;
                padding-bottom: 5px;
                font-size: 14px;
            }
        }
    }
`

export default Cards














