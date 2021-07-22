import styled from 'styled-components'

export const Aside = styled.aside`
    margin: 80px 0 0 80px;
    color: ${props => props.theme.colors.text};

    display: grid;
    grid-template-rows: 90% 10%;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'div-1 div-2'
                        'footer footer';
    :nth-child(1){
        grid-area: div-1;
    }
    :nth-child(2){
        grid-area: div-2;
    }
    footer{
        display: flex;
        align-items: center;
        gap: 10px;
        flex-wrap: wrap;

        grid-area: footer;
    }

`
