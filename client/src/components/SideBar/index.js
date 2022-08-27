import React, { useContext } from 'react';
import { Container, Button, Title } from './styled';
import {AiFillFile, AiFillSetting, AiFillDatabase, AiOutlineUser} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function SideBar() {

    const{signed} = useContext(AuthContext);

    return (
        signed ? (
        <Container>
            <Link to="Pessoa">
                <Button>
                    <AiOutlineUser size={40}/>
                    <Title>Pagador</Title>
                </Button>
            </Link>
            <Link to="/">
                <Button>
                    <AiFillFile size={40}/>
                    <Title>Faturas</Title>
                </Button> 
            </Link>
            <Link to="Carnet">
                <Button>
                    <AiFillDatabase size={40}/>
                    <Title>Carnê</Title>
                </Button>
            </Link>
            <Link to="Ajustes">
                <Button>
                    <AiFillSetting size={40}/>
                    <Title>Config.</Title>
                </Button>
            </Link>
        </Container>) : 
        (<div></div>)
    );
}