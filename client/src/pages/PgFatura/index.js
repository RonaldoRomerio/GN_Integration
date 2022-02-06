import { Form } from '@unform/web';
import React, {useRef} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'

export default function PgFatura() {
const formRef = useRef(null);

return (
  <div className='container'>
    <Title titulo={'Gerenciar Faturas'}/>
    <div className='content'>
      <Form ref={formRef}>
        <fieldset>
          <legend>Informações da Fatura</legend>
          <Input classe="cl1" nome="valor"  label="valor" required/>
          <Input classe="cl1" nome="Desconto"  label="Desconto" />
          <Input classe="cl1" nome="vencimento" label="Vencimento" mask="99/99/9999" required/>
          <Input classe="cl3" nome="descricao" label="descricao" />
        </fieldset>
        <button type='submit'>Enviar</button>
      </Form>
    </div>
  </div>
);
}