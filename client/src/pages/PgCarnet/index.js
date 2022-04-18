import { Form } from '@unform/web';
import React, {useRef} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'
export default function PgCarnet() {

  const formRef = useRef(null);
  return (
    <div className='container'>
      <Title titulo={'Gerenciar Faturas'}/>
      <div className='content'>
        <Form ref={formRef}>
          <fieldset>
            <legend>Informações da Fatura</legend>
            <Input nome="valor"  classe="cl1" label="valor" required/>
            <Input nome="Desconto" classe="cl1" label="Desconto" />
            <Input nome="Vencimento" classe="cl1" label="Vencimento" mask="99/99/9999" required/>
            <Input nome="qtdParcelas" classe="cl1" label="Quantidade de parcelas" type="number" required/>
            <Input nome="descricao" classe="cl2" label="descricao" />
          </fieldset>
          <button type='submit'>Enviar</button>
        </Form>
      </div>
    </div>
  );
}