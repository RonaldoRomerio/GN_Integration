    import { Form } from '@unform/web';
    import React, {useEffect, useRef, useState, useContext} from 'react';
    import Title from '../../components/Title'
    import Input from '../../components/Input/Input'
    import SelectAsync from '../../components/Input/SelectAsync'
    import Auxiliar from './Auxiliar.js';
    import {rotaFatura,rotaPessoa} from '../../services/API'
    import {SwalContext} from '../../contexts/SwalContext'
    import {BiTrash, BiEditAlt, BiInfoCircle} from 'react-icons/bi'
    import Modal from '../../components/Modal';

    export default function PgFatura() {

        const{swalConfirm, swalToast, swalAlert} = useContext(SwalContext);
        const [lstFaturas, setlstFaturas] = useState(null);
        const [LstPessoa, setLstPessoas] = useState([]);

        const [layoutListar, setLayoutListar] = useState(true);
        //modal
        const[isModalVisible, setIsModalVisible] = useState(false);
        const [infoModal, setinfoModal] = useState({});

        useEffect(() =>{
            console.log('acessoFaturas')
            listarFaturas();
        },[])
        const formRef = useRef(null);

        function alterarLayout(){
            setLayoutListar(!layoutListar);
            if(layoutListar){
                listarPessoas();
            }
        }
        async function listarPessoas(){
            await rotaPessoa
            .get('/')
            .then((response) => {
                const listaTodos = response.data.pessoas;
                let listaAux = [];
                listaTodos.map((pessoa) => listaAux.push({label: `nome: ${pessoa.nome_pessoa} / cpf: ${pessoa.cpf_pessoa} / email: ${pessoa.email_pessoa}`, value: pessoa.id})) 
                setLstPessoas(listaAux);
                console.log(LstPessoa);
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }
        async function listarFaturas(){
            await rotaFatura
            .get('/')
            .then((response) => setlstFaturas(response.data.faturas))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }
        function inserirFatura(data, {reset}){
            rotaFatura
            .post('/', data)
            .then((response) => {
                swalToast('success',"Fatura inserida com sucesso")
                const fatura = response.data.fatura;
                console.log(response.data.fatura);
                setlstFaturas([fatura
                    ,...lstFaturas])
                formRef.current.setData({idPessoa: 0,vencimento: '', descricao: ''})
                alterarLayout()
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }
        function statusModal(tipo, idFatura){
            let status = !isModalVisible
            if(status == true){
                setinfoModal({
                    
                })
            }else{
                setinfoModal({})
            }
            setIsModalVisible(status);
        }
        function removerFatura(idFatura){
            swalConfirm("Deseja realmente excluir essa fatura? Essa ação não é reversível")
            .then((result) => {
                if (result.isConfirmed) {
                    rotaFatura
                    .patch("/" + idFatura)
                    .then((response) => {
                        let novalst = lstFaturas.filter(e => e.id != response.data.idFatura);
                        setlstFaturas(novalst);
                        swalAlert("Exclusão concluída","A Fatura selecionada foi excluida com sucesso",'success')
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
            (layoutListar ? 
                <div className='container'>
                <Title titulo={'Listar Faturas'} setLayout={alterarLayout} blListar={layoutListar}/>
                <div className='content'>
                    <div className="tabela">
                        <table>
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Valor</th>
                                    <th>Desconto</th>  
                                    <th>Data_vencimento</th>  
                                    <th>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lstFaturas != null && lstFaturas.length > 0 ? lstFaturas.map((fatura) => 
                                    (
                                        <tr key={fatura.id}>
                                            <td>{fatura.fatura_pessoa.nome_pessoa}</td>
                                            <td>{fatura.fatura_pessoa.cpf_pessoa}</td>
                                            <td>{fatura.valor_fatura != null ? "R$ " + fatura.valor_fatura.toFixed(2).toString().replace('.', ',') : ''}</td>
                                            <td> {fatura.desconto_fatura != null ? "R$ " + fatura.desconto_fatura.toFixed(2).toString().replace('.',',') : ''}</td>
                                            <td>{fatura.valor_fatura != null ? fatura.data_vencimento_fatura.replaceAll('-','/') : ''}</td>
                                            <td className='buttonList'>
                                                <button><BiTrash size={25} color={'red'} onClick={((e) => {removerFatura(fatura.id)})}/></button>
                                                <button><BiInfoCircle size={25} color={'gray'} onClick={((e) => {})}/></button>
                                            </td>
                                        </tr>
                                    )
                                    ) :
                                    <tr>
                                        <td colSpan={6}>Não Há informações de Faturas</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {isModalVisible ? <Modal statusModal={statusModal}><Auxiliar infoModal={infoModal} statusModal={statusModal} listarFaturas={listarFaturas}/></Modal> : ''}
            </div> 
                :
            <div className='container'>
                
                <Title titulo={'Gerenciar Faturas'} setLayout={alterarLayout} blListar={layoutListar}/>
                <div className='content'>
                    <div className="formulario">
                        <Form ref={formRef} onSubmit={inserirFatura}>
                        <fieldset>
                            <legend>Informações do Pagador</legend>
                            <SelectAsync classe="cl6" nome="idPessoa" label="Pessoa*" options={LstPessoa}/>
                        </fieldset>
                        <fieldset>
                            <legend>Informações da Fatura</legend>
                            <Input classe="cl1" nome="valor"  label="valor R$*" tipo="money" required/>
                            <Input classe="cl1" nome="desconto"  label="Desconto R$*" tipo="money" />
                            <Input classe="cl1" nome="vencimento" label="Vencimento *" mask="99/99/9999" required/>
                            <Input classe="cl3" nome="descricao" label="descricao" />
                        </fieldset>
                        <button type='submit'>Enviar</button>
                        </Form>
                    </div>
                </div>
            </div>
            )
        )
    }