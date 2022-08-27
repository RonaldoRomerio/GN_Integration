import styled from "styled-components" 

export const LayoutPaginaInicial = styled.div`
background: radial-gradient(circle, rgba(255,153,0,1) 0%, rgba(181,181,181,1) 100%);
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`   
export const LayoutLogin = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`   

export const BoxLogin = styled.div`
    height: 50vh;
    width: 40vW;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    box-shadow: 15px black;
    padding: 20px;
    background: #ADA996;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #EAEAEA, #DBDBDB, #F2F2F2, #ADA996); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`  
export const DivInput = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`    
export const Texto = styled.p`
    color: rgba(255,153,0,1);
    font-weight: bolder;
    font-size: 18pt;
`   
export const Input = styled.input`
    height: 30px;
    background-color: transparent;
    border: transparent;
    border-bottom: 2px solid  rgba(255,153,0,1);
    font-size: 15pt;
    color:rgba(255,153,0,1);
    outline: 0;
`   
export const Label = styled.label`
    text-align: start;
    font-size: 12pt;
    font-weight: bolder;
    text-transform: uppercase;
    color: rgba(255,153,0,1);
    margin-bottom: 10px;
`   
export const Botao = styled.button`
    height: 40px;
    width: 60%;
    border-radius: 10px;
    border: 2px solid rgba(255,153,0,1);
    text-align: center;
    font-size: 12pt;
    font-weight: bolder;
    text-transform: uppercase;
    color: rgba(255,153,0,1) ;
    outline: 0;
    background-color: #fff;
    &:hover{
        transition: all 0.5s;
        color: #fff;
        border: none;
        background-color: rgba(255,153,0,1);
    }
`   