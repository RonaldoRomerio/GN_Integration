import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 300px;
`

export const Button = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 3px #FFF;
    height: 200px;
    width: 200px;
    background-color: rgba(166, 166, 166, 0.8);
    border-radius: 10px;
    margin: 20px;
    border: none;
    outline:none;
    &:hover{
        svg{
            color: #D65A18;
            transition: color 0.2s;
        };
        p{
            color:  #D65A31;
            transition: color 0.2s;
        }
    }
`
export const Title = styled.p`
    font-size: 13pt;
    font-weight: bold;
    margin-top: 20px;
`