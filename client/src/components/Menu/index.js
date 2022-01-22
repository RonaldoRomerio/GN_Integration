import React from 'react';
import { Container, Button, Title } from './styled';
import {AiFillFile, AiFillSetting, AiFillDatabase} from "react-icons/ai";

export default function Menu() {
    return (
        <Container>
            <Button>
                <AiFillFile size={40}/>
                <Title>Faturas</Title>
            </Button>
            <Button>
                <AiFillDatabase size={40}/>
                <Title>Carnê</Title>
            </Button>
            <Button>
                <AiFillSetting size={40}/>
                <Title>Ajustes</Title>
            </Button>
        </Container>
    );
}