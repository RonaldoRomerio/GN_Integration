import { Form } from '@unform/web';
import React, {useRef} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input'
import { Scope} from '@unform/core';
import ViaCep from '../../services/ViaCep'
export default function PgFatura() {
  const formRef = useRef(null);

  function consultaCEP(){
    var cep = formRef.current.getFieldValue('Endereco.cep')

    ViaCep
    .get(`${cep.replace(".", "").replace("-", "")}/json/`)
    .then((response) => formRef.current.setData({
      Endereco:{
        rua: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf
      },
    })
    )
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }
  return (
    <div className='container'>
      <Title titulo={'Gerenciar Faturas'}/>
      <div className='content'>
        <Form ref={formRef}>
          <fieldset>
            <legend>Informações da Fatura</legend>
            <Input nome="valor" classe="tam4" label="valor" required/>
            <Input nome="Desconto" classe="tam4" label="Desconto" />
            <Input nome="vencimento" classe="tam2" label="Vencimento" mask="99/99/9999" required/>
            <Input nome="descricao" classe="tam2" label="descricao" />
          </fieldset>
          <fieldset>
            <legend>Informações do pagador</legend>
            <Input nome="nome" classe="tam4" label="nome" required/>
            <Input nome="cpf" classe="tam4" label="cpf" mask="999.999.999-99" required/>
            <Input nome="rg" classe="tam2" label="rg" type="number" required/>
            <Input nome="e-mail" classe="tam2" label="e-mail" type="email" required/>
            <Input nome="telefone" classe="tam2" label="telefone" type="(99)99999-9999" required/>
            <Scope path='Endereco'>
              <Input nome="cep" classe="tam2" label="cep" mask="99.999-999" required onBlur={((e) => consultaCEP())}/>
              <Input nome="rua" classe="tam2" label="Rua" required/>
              <Input nome="número" classe="tam2" label="Número" type="number" required/>
              <Input nome="bairro" classe="tam2" label="Bairro" required/>
              <Input nome="cidade" classe="tam2" label="Cidade" required/>
              <Input nome="estado" classe="tam2" label="estado"  maxLength="2" required/>
              <Input nome="complemento" classe="tam2" label="Complemento"/>
            </Scope>
          </fieldset>
          <button type='submit'>Enviar</button>
        </Form>
      </div>
    </div>
  );
}