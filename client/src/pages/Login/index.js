import {useState} from 'react';
import {LayoutPaginaInicial, LayoutLogin, BoxLogin,Texto,Input, Label, DivInput, Botao} from './styled';

export default function Login() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    
    function entrar(){
        if(login === undefined || login === null || login === ''){
            alert("O campo Login é obrigatório");
            return
        }
        if(senha === undefined || senha === null || senha === ''){
            alert("O campo Senha é obrigatório");
            return
        }
    }

 return (
   <LayoutPaginaInicial>
       <LayoutLogin>
           <BoxLogin>
                <Texto>ACESSE COM SEU LOGIN</Texto>
                <DivInput>
                    <Label>Login</Label>
                    <Input onChange={(e) => setLogin(e.target.value)} value={login}/>
                </DivInput>
                <DivInput>
                    <Label>Senha</Label>
                    <Input type='password' onChange={(e) => setSenha(e.target.value)} value={senha}/>
                </DivInput>
                <Botao onClick={() => entrar()}>Acessar</Botao>
           </BoxLogin>
       </LayoutLogin>
   </LayoutPaginaInicial>
 );
}