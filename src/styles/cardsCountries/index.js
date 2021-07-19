import styled from 'styled-components'
import colors from '../colors'

const Cards = styled.div`
    width: 85%;
    flex-wrap: wrap;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => 
        props.DarkMode === true ? colors.white : colors.LightModeText
    };
    div{
        background: ${props => props.DarkMode === true ? colors.DarkModeElements : colors.LightModeBackground};
        width: 260px;
        border-radius: 6px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, .1);
        margin: 50px 0 20px 0;
        img{
            width: 100%;
            border-radius: 6px 6px 0 0;
        }
        section{
            padding: 0 15px 40px 20px;
            h1{
                font-size: 18px;
                margin-bottom: 20px;
            }
            a{
                color: ${(props) => 
                    props.DarkMode === true ? colors.white : colors.LightModeText
                };
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














