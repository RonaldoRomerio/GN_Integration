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
    .tam4{
        width: 23%;
    }
    .tam2{
        width: 47%;
    }
    .tam1{
        width: 100%;
    }
    .tam2{
        width: 47%;
    }
    .tam1m2{
        width: 75%;
    }
    .container{
        height: 88vh;
        width: 100%;
        padding:20px;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.3);
        border: red;
        margin: 50px 10px 0px 50px;
    }
`