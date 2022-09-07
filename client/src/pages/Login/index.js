import {useState, useContext} from 'react';
import {LayoutPaginaInicial, LayoutLogin, BoxLogin,Texto,Input, Label, DivInput, Botao} from './styled';
import {AuthContext} from '../../contexts/AuthContext'

export default function Login() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    const{login} = useContext(AuthContext);
    
    function entrar(){
        if(user === undefined || user === null || user === ''){
            alert("O campo Login é obrigatório");
            return
        }
        if(senha === undefined || senha === null || senha === ''){
            alert("O campo Senha é obrigatório");
            return
        }
        login(user, senha);

    }

    return (
    <LayoutPaginaInicial>
        <LayoutLogin>
            <BoxLogin>
                    <Texto>ACESSE COM SEU LOGIN</Texto>
                    <DivInput>
                        <Label>Login</Label>
                        <Input onChange={(e) => setUser(e.target.value)} value={user}/>
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