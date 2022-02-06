import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 60px;
    backGround: ${(props) => props.theme.backGround.colorSideBar};
    box-shadow: 0px 4px rgba(0,0,0,0.3);
    text-align: center;
    padding-top: 17px;
`
export const Title = styled.span`
    font-size: 20pt;
    font-weight: 1000;
    color: ${(props) => props.theme.colors.Text};
`