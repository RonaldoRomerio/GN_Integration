import { Form } from '@unform/web';
import React, {useRef} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'

export default function PgAjustes() {
const formRef = useRef(null);

return (
  <div className='container'>
    <Title titulo={'Configurações'}/>
    <div className='content'>
      <Form ref={formRef}>
        <fieldset>
          <legend>Credenciais Gerencianet</legend>
          <Input classe="cl3" nome="SecretId"  label="Secret_id" required/>
          <Input classe="cl3" nome="clientId"  label="Client_id" />
        </fieldset>
        <button type='submit'>Enviar</button>
      </Form>
    </div>
  </div>
);
}