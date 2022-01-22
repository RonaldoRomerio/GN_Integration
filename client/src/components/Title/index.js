import React from 'react';
import { Titulo, DivTitulo, Divisao } from './styled';
import ButtonTheme from '../ButtonTheme';
export default function Title({titulo}) {
  return (
    <>
      <DivTitulo>
          <Titulo>{titulo}</Titulo>
          <ButtonTheme />
      </DivTitulo>
      <Divisao/>
    </>
  );
}