import React from 'react';
import { Titulo, DivTitulo, Divisao, Button, ButtonHeader } from './styled';
import { BiListUl} from "react-icons/bi";
import ButtonTheme from '../ButtonTheme';
export default function Title({titulo, setLayout}) {
  return (
    <>
      <DivTitulo>
          <Titulo>{titulo}</Titulo>
          <ButtonHeader>
            <Button onClick={((e) => setLayout())}> 
              <BiListUl size={25} color='#D65A31'/>
            </Button>
            <ButtonTheme />
          </ButtonHeader>
      </DivTitulo>
      <Divisao/>
    </>
  );
}