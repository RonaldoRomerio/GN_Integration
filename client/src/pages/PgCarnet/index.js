import { Form } from '@unform/web';
import React from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input'
import { Scope} from '@unform/core';
export default function Carnet() {

  const formRef = useRef(null);
  return (
    <div className='container'>
      <Title titulo={'Gerenciar Faturas'}/>
      <div className='content'>
        <Form ref={formRef}>
          <fieldset>
            <legend>Informações da Fatura</legend>
            <Input nome="valor"  label="valor" required/>
            <Input nome="Desconto"  label="Desconto" />
            <Input nome="Vencimento"  label="Vencimento" mask="99/99/9999" required/>
            <Input nome="qtdParcelas"  label="Quantidade de parcelas" type="number" required/>
            <Input nome="descricao"  label="descricao" />
          </fieldset>
          <fieldset>
            <legend>Informações do pagador</legend>
            <Input nome="nome" label="nome" required/>
            <Input nome="cpf" label="cpf" mask="999.999.999-99" required/>
            <Input nome="rg"  label="rg" type="number" required/>
            <Input nome="e-mail" label="e-mail" type="email" required/>
            <Input nome="telefone" label="telefone" type="(99)99999-9999" required/>
            <Scope path='Endereco'>
              <Input nome="cep" label="cep" mask="99.999-999" required/>
              <Input nome="Rua" label="Rua" required/>
              <Input nome="Número" label="Número" type="number" required/>
              <Input nome="Bairro" label="Bairro" required/>
              <Input nome="Cidade" label="Cidade" required/>
              <Input nome="estado" label="estado"  maxLength="2" required/>
              <Input nome="Complemento" label="Complemento"/>
            </Scope>
          </fieldset>
          <button type='submit'>Enviar</button>
        </Form>
      </div>
    </div>
  );
}