import { Form } from '@unform/web';
import React, {useEffect, useRef, useContext, useState} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'
import Select from '../../components/Input/Select'
import { Scope} from '@unform/core';
import ViaCep from '../../services/ViaCep'
import {api} from '../../services/API'
import {SwalContext} from '../../contexts/SwalContext'

export default function Auxiliar({infoModal, listarPessoas, statusModal}) {
    const isDisabled = (infoModal.tipo === 'i' ? "disabled": "");
    const titulo = (infoModal.tipo === 'i' ? "Informações da ": "Editar ");

    const formularioRef = useRef(null);
    console.log(isDisabled);
    useEffect(()=>{
        listarPessoa()
    },[])
    const opcoes = [
        { value: 'AC', label: 'AC' },{ value: 'AL', label: 'AL' },{ value: 'AP', label: 'AP' },{ value: 'AM', label: 'AM' },
        { value: 'BA', label: 'BA' },{ value: 'CE', label: 'CE' },{ value: 'DF', label: 'DF' },{ value: 'ES', label: 'ES' },
        { value: 'GO', label: 'GO' },{ value: 'MA', label: 'MA' },{ value: 'MT', label: 'MT' },{ value: 'MS', label: 'MS' },
        { value: 'MG', label: 'MG' },{ value: 'PA', label: 'PA' },{ value: 'PB', label: 'PB' },{ value: 'PR', label: 'PR' },
        { value: 'PE', label: 'PE' },{ value: 'PI', label: 'PI' },{ value: 'RJ', label: 'RJ' },{ value: 'RN', label: 'RN' },
        { value: 'RS', label: 'RS' },{ value: 'RO', label: 'RO' },{ value: 'RR', label: 'RR' },{ value: 'SC', label: 'SC' },
        { value: 'SE', label: 'SE' },{ value: 'TO', label: 'TO' }
    ];

    const {swalConfirm, swalToast, swalAlert} = useContext(SwalContext);
    //const {isDisabled, setIsDisabled} = useState("");
    

    function consultaCEP(){
        var cep = formularioRef.current.getFieldValue('endereco.cep')
        console.log(cep);
        ViaCep
        .get(`${cep.replace(".", "").replace("-", "")}/json/`)
        .then((response) => formularioRef.current.setData({
            endereco:{
                rua: response.data.logradouro,
                bairro: response.data.bairro,
                cidade: response.data.localidade,
                estado: response.data.uf
            },
        }))
        .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        });
    }
    async function listarPessoa(){
        await api
        .get(`pessoa/${infoModal.idPessoa}`)
        //.then((response) => {console.log(response)})
        .then((response) => formularioRef.current.setData({
            id:response.data.pessoa.id,
            nome:response.data.pessoa.nome_pessoa,
            cpf:response.data.pessoa.cpf_pessoa,
            rg:response.data.pessoa.rg_pessoa,
            email:response.data.pessoa.email_pessoa,
            telefone:response.data.pessoa.telefone_pessoa,
            endereco:{
                cep: response.data.pessoa.endereco_cep_pessoa,
                rua: response.data.pessoa.endereco_rua_pessoa,
                bairro: response.data.pessoa.endereco_bairro_pessoa,
                cidade: response.data.pessoa.endereco_cidade_pessoa,
                estado: response.data.pessoa.endereco_estado_pessoa,
                complemento: response.data.pessoa.endereco_complemento_pessoa,
                numero: response.data.pessoa.endereco_numero_pessoa,
            },
        })
        )
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        })
    }
    function editarPessoa(data, {reset}){
        console.log("editando", data);
        api
        .put('pessoa/', data)
        .then((response) => {
            swalToast('success',"Pessoa Editada com sucesso")
            listarPessoas();
            statusModal();
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    return (
        <>
            <div className='container'>
                <Title titulo={titulo + 'Pessoa'}/>
                <div className='content'>
                    <div className="formulario">
                        <Form ref={formularioRef} onSubmit={editarPessoa}>
                            <fieldset>
                                <legend>Informações do pagador</legend>
                                <Input nome="id" label="id"  required tipo={'hidden'} disabled={isDisabled}/>
                                <Input nome="nome" classe="cl2" label="nome"  required disabled={isDisabled}/>
                                <Input nome="cpf" classe="cl1" label="cpf" mask="999.999.999-99" required disabled={isDisabled}/>
                                <Input nome="rg"  classe="cl1" label="rg" type="number" required disabled={isDisabled}/>
                                <Input nome="email" classe="cl2" label="e-mail" type="email" required disabled={isDisabled}/>
                                <Input nome="telefone" classe="cl1"label="telefone" mask="(99)99999-9999" required disabled={isDisabled}/>
                                <Scope path='endereco'>
                                    <Input nome="cep" classe="cl1" label="cep" mask="99.999-999" required disabled={isDisabled} onBlur={((e) => consultaCEP())}/>
                                    <Input nome="rua" classe="cl3" label="Rua" required disabled={isDisabled}/>
                                    <Input nome="numero" classe="cl1" label="Número" type="number" required disabled={isDisabled}/>
                                    <Input nome="bairro" classe="cl2" label="Bairro" required disabled={isDisabled}/>
                                    <Input nome="cidade" classe="cl1" label="Cidade" required disabled={isDisabled}/>
                                    <Select nome="estado" classe="cl1" label="Estado" disabled={isDisabled}>
                                    {opcoes.map(op => (
                                        <option key={op.value} value={op.value}>
                                            {op.label}
                                        </option>
                                    ))}
                                    </Select>
                                    <Input nome="complemento" classe="cl2" label="Complemento" disabled={isDisabled}/>
                                </Scope>
                            </fieldset>
                            {(isDisabled ? '': <button type='submit'>Editar</button>)}
                        </Form>
                    </div>
                </div>
            </div> 
        </>
    )
}