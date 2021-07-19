import styled from "styled-components";
import colors from '../colors'

const PageDescription = styled.div`
    width: 85%;
    margin: 0 auto;
    padding-top: 70px;
    display: grid;
    grid-template-row: 25% 75%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'nav nav'
                'img text';
    nav{
        grid-area: nav;
    }
    img{
        grid-area: img;
        margin-top: 60px;
    }
`

export default PageDescription