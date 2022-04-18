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
    input, select{
        height:35px;
        border: 3px solid ${(props) => props.theme.input.border};
        border-radius: 10px;
        color: ${(props) => props.theme.input.textInput};
        background-color: ${(props) => props.theme.backGround.color};
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
    select{
        text-align: left;
        padding: 0;
        font-size: 12pt;
    }
    .InputForm input, .InputForm .spanError, .InputForm label, select{
        width: 100%;
    }
    button{
        cursor: pointer;
    }
    .container{
        height: 100%;
        width: 100%;
        padding:20px;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.0);
        border: 1px 1px solid red;
        margin: 20px 10px 0px 20px;
        display: block;
    }
    .containerModal{
        width: 80%;
        padding:20px;
        border-radius: 15px;
        background-color: ${(props) => props.theme.backGround.color};
        border: 1px 1px solid red;
        margin: 20px 10px 0px 20px;
        display: flex;
        flex-direction: column;
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
    ::-webkit-scrollbar {
        width: 12px;               /* width of the entire scrollbar */
    }

    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0.3);        /* color of the tracking area */
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.button.backGroundGradient1};    /* color of the scroll thumb */
        border-radius: 20px;       /* roundness of the scroll thumb */
    }
    ::-webkit-scrollbar {
        width: 5px;
    }
    .tabela{
        margin-top: 50px;
        height: 50px;
    }
    .buttonList button{
        border: none;
        outline: none;
        border-radius: 10px;
        background: rgba(0,0,0,0.5);
        margin-right: 5px;
    }
    table{
        width: 100%;
        color: ${(props) => props.theme.button.textInput};
        border: 1px solid ${(props) => props.theme.input.border};
        border-radius: 10px;
        padding: 5px;
    }
    thead tr th{
        border-bottom: 3px solid ${(props) => props.theme.input.border};
        padding-bottom: 5px;
    }
    tbody tr{
        height: 30px;
        margin-bottom: 3px;
    }
    tbody tr:nth-child(odd){
        background: rgba(0,0,0,0.3);
    }
    tbody tr:nth-child(even){
        background: rgba(100,100,100,0.3);
    }
`