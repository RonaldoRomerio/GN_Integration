import { Form } from '@unform/web';
import React from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input'
export default function PgFatura() {
  return (
    <div className='container'>
      <Title titulo={'Gerenciar Faturas'}/>
      <div className='content'>
        <Form>
          <fieldset>
            <legend>Informações da Fatura</legend>
          </fieldset>
          
        </Form>
      </div>
    </div>
  );
}