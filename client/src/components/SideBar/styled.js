import styled from "styled-components";

export const Container = styled.div`
    width: 5%;
    height: 92vh;
    background-color: ${(props) => props.theme.backGround.colorSideBar};
    //border-right: 3px solid ${(props) => props.theme.backGround.borderSideBar};
    display: block;
    padding: 2px;
    z-index: 1;
`

export const Button = styled.button`
    background: ${(props) => props.theme.button.backGroundColor}; 
    //background: -webkit-linear-gradient(to right, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2});
    //background: linear-gradient(to right, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2});    
    border: none;
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    margin: 2px;
    border-radius: 5px;
    width: 100%;
    & span{
        display: none;
    }
    &:hover{
        background: ${(props) => props.theme.button.backGroundColor}; 
        //background: -webkit-linear-gradient(to left, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2});
        //background: linear-gradient(to left, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2});    
        width: 200%;
        transition: width 1s;
        & span{
            display: block;
        }
    }
`
export const Title = styled.span`
    font-size: 12pt;
    font-weight: bolder;
    text-decoration: none;
`