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
        background-color: ${(props) => props.theme.backGround.color};
    }
    input{
        height:35px;
        border: 3px solid ${(props) => props.theme.input.border};
        border-radius: 10px;
        color: ${(props) => props.theme.input.textInput};
        background-color: ${(props) => props.theme.backGround.color};
        font-size: 12pt;
    }
    label{
        color: ${(props) => props.theme.colors.Text};
        text-transform: uppercase;
        font-size: 10pt;
        font-weight: bold;
    }
    
    a{text-decoration: none}

    .spanError{
        color: ${(props) => props.theme.colors.Text};
        font-size: 10pt;
    }
    fieldset{
        color: ${(props) => props.theme.colors.Text};
        font-weight: bolder;
        text-transform: uppercase;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
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
        margin: 20px 10px 0px 20px;
        display: block;
    }
    form button[type="submit"]{
        background: ${(props) => props.theme.button.backGroundGradient1}; 
        background: -webkit-linear-gradient(to right, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2});
        background: linear-gradient(to right, ${(props) => props.theme.button.backGroundGradient1}, ${(props) => props.theme.button.backGroundGradient2}); 
        border: none;
        border-radius: 5px;
        outline: none;
        background-color:  ${(props) => props.theme.colors.color};
        color: ${(props) => props.theme.button.textInput};
        width: 15%;
        height: 32px;
        font-weight: bold;
        font-size: 14pt;
        float: right;
        margin-top: 5px;
    }
    .cl1{
        grid-column: span 1;
        align-self: stretch;
    }
    .cl2{
        grid-column: span 2;
        align-self: stretch;
    }
    .cl3{
        grid-column: span 3;
        align-self: stretch;
    }
    .cl4{
        grid-column: span 4;
        align-self: stretch;
    }
    .cl5{
        grid-column: span 5;
        align-self: stretch;
    }
    .cl6{
        grid-column: span 5;
        align-self: stretch;
    }
`