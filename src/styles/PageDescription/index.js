import styled from "styled-components";

const PageDescription = styled.div`
    width: 85%;
    margin: 0 auto;
    padding-top: 70px;
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'nav nav'
                'img aside';
    img{
        grid-area: img;
        margin-top: 60px;
        width: 600px;
        height: 400px;
    }
`

export default PageDescription