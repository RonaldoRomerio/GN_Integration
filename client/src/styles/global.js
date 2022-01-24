import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, :root{
        min-height: 100%;
    }
    body{
        background-color: ${(props) => props.theme.colors.backGround};
    }
    input{
        height:30px;
        border: 3px solid ${(props) => props.theme.colors.border};
        border-radius: 10px;
        color: ${(props) => props.theme.colors.textInput};
        background-color: ${(props) => props.theme.colors.backGround};
    }
    label{
        color: ${(props) => props.theme.colors.color};
        text-transform: uppercase;
        font-size: 10pt;
        font-weight: bold;
    }
    .spanError{
        color: ${(props) => props.theme.colors.color};
        font-size: 10pt;
    }
    fieldset{
        color: ${(props) => props.theme.colors.color};
        font-weight: bolder;
        text-transform: uppercase;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .InputForm{
        text-align: left;
        padding: 10px
    }
    .InputForm input, .InputForm .spanError, .InputForm label{
        width: 100%;
    }
    button{
        cursor: pointer;
    }
    .container{
        height: 88vh;
        width: 100%;
        padding:20px;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.3);
        border: 1px 1px solid red;
        margin: 50px 10px 0px 50px;
        display: block;
    }
    form button[type="submit"]{
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: ${(props) => props.theme.colors.color};
        color: ${(props) => props.theme.colors.textInput};
        width: 15%;
        height: 32px;
        font-weight: bold;
        font-size: 14pt;
        float: right;
        margin-top: 5px;
    }
`