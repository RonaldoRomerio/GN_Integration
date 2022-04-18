import React,{useState} from 'react';
import { Titulo, DivTitulo, Divisao, Button, ButtonHeader } from './styled';
import { BiListUl, BiAddToQueue} from "react-icons/bi";
import ButtonTheme from '../ButtonTheme';
export default function Title({titulo, setLayout, blListar}) {
    const [Display, setDisplay] = useState(setLayout == undefined ? "none" : "")
    
  return (
    <>
      <DivTitulo>
          <Titulo>{titulo}</Titulo>
          <ButtonHeader style={{display: Display}}>
            <Button onClick={((e) => setLayout())}> 
              {(blListar ?  <BiAddToQueue size={25} color='#D65A31'/> : <BiListUl size={25} color='#D65A31'/>)}
            </Button>
            <ButtonTheme />
          </ButtonHeader>
      </DivTitulo>
      <Divisao/>
    </>
  );
}