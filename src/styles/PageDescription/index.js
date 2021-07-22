import styled from "styled-components";

const PageDescription = styled.div`
    width: 85%;
    margin: 0 auto;
    padding-top: 70px;
    display: flex;
    img{
        margin-top: 60px;
        width: 600px;
        height: 400px;
    }
    @media(max-width: 1050px){
        flex-direction: column;
        img{
            padding-top: 50px;
            margin: 0 auto;
        }
        aside{
            margin-bottom: 100px;
            div{
                text-align: center;
                padding-bottom: 50px;
            }
            h1{
                text-align: right;
            }
        }
        
    }
    
`

export default PageDescription