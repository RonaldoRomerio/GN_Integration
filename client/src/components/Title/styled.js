import styled from "styled-components";

export const Titulo = styled.span`
    color: ${((props) => props.theme.colors.Text)};
    font-size: 25pt;
    font-weight: bolder;
`
export const DivTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
`
export const Divisao = styled.div`
    height: 3px;
    background: #f12711;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`