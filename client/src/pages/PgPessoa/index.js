import { Form } from '@unform/web';
import React, {useEffect, useRef, useState, useContext} from 'react';
import Title from '../../components/Title'
import Input from '../../components/Input/Input'
import Select from '../../components/Input/Select'
import Auxiliar from './Auxiliar.js';
import { Scope} from '@unform/core';
import ViaCep from '../../services/ViaCep'
import {rotaPessoa} from '../../services/API'
import {SwalContext} from '../../contexts/SwalContext'
import {BiTrash, BiEditAlt, BiInfoCircle} from 'react-icons/bi'
import Modal from '../../components/Modal';

export default function PgPessoa() {
    const{swalConfirm, swalToast, swalAlert} = useContext(SwalContext);
    const [lstPessoas, setLstPessoas] = useState(null);
    const [layoutListar, setLayoutListar] = useState(1);
    

    //modal
    const[isModalVisible, setIsModalVisible] = useState(false);
    const [infoModal, setinfoModal] = useState({});

    useEffect(() =>{
        listarPessoas();
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

    const formRef = useRef(null);

    function alterarLayout(){
        setLayoutListar(!layoutListar)
    }

    function consultaCEP(){
        var cep = formRef.current.getFieldValue('endereco.cep')
        ViaCep
        .get(`${cep.replace(".", "").replace("-", "")}/json/`)
        .then((response) => formRef.current.setData({
            endereco:{
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
    async function listarPessoas(){
        await rotaPessoa
        .get('/')
        .then((response) => setLstPessoas(response.data.pessoas))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    function inserirPessoa(data, {reset}){
        rotaPessoa
        .post('/', data)
        .then((response) => {
            swalToast('success',"Pessoa inserida com sucesso")
            const pessoa = response.data.pessoa;
            setLstPessoas([pessoa
                ,...lstPessoas])
            reset();
            alterarLayout()
        })
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    function statusModal(tipo, idPessoa){
        let status = !isModalVisible
        if(status == true){
            setinfoModal({
                'tipo': tipo,
                'idPessoa':idPessoa
            })
        }else{
            setinfoModal({})
        }
        setIsModalVisible(status);
    }
    function removerPessoa(idPessoa){
        swalConfirm("Deseja realmente excluir essa pessoa? Essa ação não é reversível")
        .then((result) => {
            if (result.isConfirmed) {
                rotaPessoa
                .patch("/" + idPessoa)
                .then((response) => {
                    let novalst = lstPessoas.filter(e => e.id != response.data.idPessoa);
                    setLstPessoas(novalst);
                    swalAlert("Exclusão concluída","A pessoa selecionada foi excluida com sucesso",'success')
                })
                .catch((err) => {
                    swalAlert(
                        "Não foi possível Excluir",
                        err,
                        'error'
                    )
                })
            }
        })
    }
    return (
        (layoutListar == 1 ? 
            <div className='container'>
            <Title titulo={'Gerenciar Pessoas'} setLayout={alterarLayout} blListar={layoutListar}/>
            <div className='content'>
                <div className="tabela">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>E-mail</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lstPessoas != null && lstPessoas.length > 0 ? lstPessoas.map((pessoa) => 
                                (
                                    <tr key={pessoa.id}>
                                        <td>{pessoa.nome_pessoa}</td>
                                        <td>{pessoa.cpf_pessoa}</td>
                                        <td>{pessoa.telefone_pessoa}</td>
                                        <td>{pessoa.email_pessoa}</td>
                                        <td className='buttonList'>
                                            <button><BiEditAlt size={25} color={'orange'} onClick={((e) => statusModal('e', pessoa.id))}/></button>
                                            <button><BiTrash size={25} color={'red'} onClick={((e) => removerPessoa(pessoa.id))}/></button>
                                            <button><BiInfoCircle size={25} color={'gray'} onClick={((e) => statusModal('i', pessoa.id))}/></button>
                                        </td>
                                    </tr>
                                )
                                ) :
                                <tr>
                                    <td colSpan={5}>Não Há informações de pessoa</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalVisible ? <Modal statusModal={statusModal}><Auxiliar infoModal={infoModal} statusModal={statusModal} listarPessoas={listarPessoas}/></Modal> : ''}
        </div> 
            :
        <div className='container'>
            <Title titulo={'Gerenciar Pessoas'} setLayout={alterarLayout} blListar={layoutListar}/>
            <div className='content'>
                <div className="formulario">
                    <Form ref={formRef} onSubmit={inserirPessoa}>
                        <fieldset>
                        <legend>Informações do pagador</legend>
                        <Input nome="nome" classe="cl2" label="nome"  required/>
                        <Input nome="cpf" classe="cl1" label="cpf" mask="999.999.999-99" required/>
                        <Input nome="rg"  classe="cl1" label="rg" type="number" required/>
                        <Input nome="email" classe="cl2" label="e-mail" type="email" required/>
                        <Input nome="telefone" classe="cl1"label="telefone" mask="(99)99999-9999" required/>
                        <Scope path='endereco'>
                            <Input nome="cep" classe="cl1" label="cep" mask="99.999-999" required onBlur={((e) => consultaCEP())}/>
                            <Input nome="rua" classe="cl3" label="Rua" required/>
                            <Input nome="numero" classe="cl1" label="Número" type="number" required/>
                            <Input nome="bairro" classe="cl2" label="Bairro" required/>
                            <Input nome="cidade" classe="cl1" label="Cidade" required/>
                            <Select nome="estado" classe="cl1" label="Estado">
                            {opcoes.map(op => (
                                <option key={op.value} value={op.value}>
                                    {op.label}
                                </option>
                            ))}
                            </Select>
                            <Input nome="complemento" classe="cl2" label="Complemento"/>
                        </Scope>
                        </fieldset>
                        <button type='submit'>Enviar</button>
                    </Form>
                </div>
            </div>
        </div> 
        )
    )
}