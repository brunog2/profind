import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import api from '../services/api';
import Upload from './UploadTest';

export default function Cadastro({ history }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [profissao, setProfissao] = useState('');
    const [descricao, setDescricao] = useState('');
    const [url_foto, setUrl_Foto] = useState('');
    

    this.state = {
        nome: null,
        email: null,
        telefone: null,
        senha: null,
        confirmacaoSenha: null,
        endereco: null,
        profissao: null,
        descricao: null,
        url_foto: null
    }



    async function onChange(e) {
        
        
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const response = await api.post("/uploadImage", formData, config).then((response) => {
            console.log(response);
            var a = []
            a = response.data
            console.log(a.file.path)
            setUrl_Foto(a.file.path)
            console.log(url_foto)
          })
          .catch(function (error) {
            console.log(error);
         });


        
        

    }



    function handleSubmit(e) {

        console.log(url_foto)


        api.post('/cadastrarProfissional', {
            nome,
            email,
            senha,
            profissao,
            descricao,
            endereco,
            telefone,
            url_foto,
            avaliacoes_negativas: 0,
            avaliacoes_positivas: 0,
        })



        e.preventDefault();

        alert("Cadastro realizado com sucesso!")
        history.push('/login');
    }


    return (
        <div className="container-principal">
            <div className="container-form">

                <form onSubmit={handleSubmit}>
                    <div className="container-form-element">
                        <label htmlFor="nome">Nome</label>
                        <input required value={nome} onChange={e => this.setState(e.target.value)} id="nome" type="text" placeholder="Digite seu nome"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="email">Email</label>
                        <input required value={email} onChange={e => setEmail(e.target.value)} id="email" type="text" placeholder="Digite seu email"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="telefone">Telefone</label>
                        <input required value={telefone} onChange={e => setTelefone(e.target.value)} id="telefone" type="text" placeholder="Digite seu número de telefone"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="senha">Senha</label>
                        <input required value={senha} onChange={e => setSenha(e.target.value)} id="senha" type="password" placeholder="Crie uma senha"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="confirmacao-senha">Confirmação de senha</label>
                        <input required value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} id="confirmacao-senha" type="password" placeholder="Redigite sua senha"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="endereco">Endereço</label>
                        <input required value={endereco} onChange={e => setEndereco(e.target.value)} id="endereco" type="text" placeholder="Digite seu endereço"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="profissao">Profissão</label>
                        <input required value={profissao} onChange={e => setProfissao(e.target.value)} id="profissao" type="text" placeholder="Digite sua profissão"></input>
                    </div>

                    <div className="container-form-element descricao">
                        <label htmlFor="descricao">Descrição</label>
                        <input required value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao" type="text" placeholder="Descreva o seu trabalho"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="foto">Foto</label>
                        <input className="foto" type="file" name="myImage" onChange={e => onChange(e)} />
                    </div>

                    <p>Ao se registrar, você concorda com nossos <a href="/termos">Termos de Uso</a></p>
                    <p>Já tem uma conta? <Link to="/login"> Entre aqui</Link></p>


                    <button type="submit">Registrar</button>
                </form>

            </div>

        </div>
    );
}