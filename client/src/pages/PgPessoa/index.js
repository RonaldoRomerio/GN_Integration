import { Form } from '@unform/web';
import React, {useRef, useState} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'
import SelectBasic from '../../components/Input/SelectBasic'
import { Scope} from '@unform/core';
import ViaCep from '../../services/ViaCep'
export default function Carnet() {
const opcoes = [
    { value: 'AC', label: 'AC' },{ value: 'AL', label: 'AL' },{ value: 'AP', label: 'AP' },{ value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },{ value: 'CE', label: 'CE' },{ value: 'DF', label: 'DF' },{ value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },{ value: 'MA', label: 'MA' },{ value: 'MT', label: 'MT' },{ value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },{ value: 'PA', label: 'PA' },{ value: 'PB', label: 'PB' },{ value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },{ value: 'PI', label: 'PI' },{ value: 'RJ', label: 'RJ' },{ value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },{ value: 'RO', label: 'RO' },{ value: 'RR', label: 'RR' },{ value: 'SC', label: 'SC' },
    { value: 'SC', label: 'SC' },{ value: 'SE', label: 'SE' },{ value: 'TO', label: 'TO' }];

const formRef = useRef(null);

function consultaCEP(){
    var cep = formRef.current.getFieldValue('Endereco.cep')

    ViaCep
    .get(`${cep.replace(".", "").replace("-", "")}/json/`)
    .then((response) => formRef.current.setData({
        Endereco:{
            Rua: response.data.logradouro,
            Bairro: response.data.bairro,
            Cidade: response.data.localidade,
            Estado: response.data.uf
        },
    })
    )
    .catch((err) => {
    console.error("ops! ocorreu um erro" + err);
    });
}
return (
    <div className='container'>
        <Title titulo={'Gerenciar Pessoas'}/>
        <div className='content'>
            <Form ref={formRef}>
                <fieldset>
                <legend>Informações do pagador</legend>
                <Input nome="nome" classe="cl2" label="nome"  required/>
                <Input nome="cpf" classe="cl1" label="cpf" mask="999.999.999-99" required/>
                <Input nome="rg"  classe="cl1" label="rg" type="number" required/>
                <Input nome="e-mail" classe="cl2" label="e-mail" type="email" required/>
                <Input nome="telefone" classe="cl1"label="telefone" mask="(99)99999-9999" required/>
                <Scope path='Endereco'>
                    <Input nome="cep" classe="cl1" label="cep" mask="99.999-999" required onBlur={((e) => consultaCEP())}/>
                    <Input nome="Rua" classe="cl3" label="Rua" required/>
                    <Input nome="Número" classe="cl1" label="Número" type="number" required/>
                    <Input nome="Bairro" classe="cl1" label="Bairro" required/>
                    <Input nome="Cidade" classe="cl2" label="Cidade" required/>
                    <SelectBasic nome="Estado" classe="cl1" label="Estado" options={opcoes}/>
                    <Input nome="Complemento" classe="cl2" label="Complemento"/>
                </Scope>
                </fieldset>
                <button type='submit'>Enviar</button>
            </Form>
        </div>
    </div>
    );
}