import styled from "styled-components";

export const DivModal = styled.div`
    background-color: rgba(0, 0, 0, 0.652);
    height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999999999999;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ButtonClose = styled.button`
    background-color: transparent;
    align-self: flex-end;
    outline: none;
    border: none;
    svg{
        color: ${(props) => props.theme.button.backGroundColor};
    }

`