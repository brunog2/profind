import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import api from '../services/api';

export default function Cadastro({ history }) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [profissao, setProfissao] = useState('');
    const [descricao, setDescricao] = useState('');



    function handleSubmit(e) {

        const response = api.post('/cadastrarProfissional', {
            nome,
            email,
            senha,
            profissao,
            descricao,
            endereco,
            telefone,
            url_foto: "null",
            avaliacoes_negativas: 0,
            avaliacoes_positivas: 0,
        })



        e.preventDefault();
        console.log(response);
        history.push('/login');
    }

    return (
        <div className="container-principal">
            <div className="container-form">

                <form onSubmit={handleSubmit}>
                    <div className="container-form-element">
                        <label htmlFor="nome">Nome</label>
                        <input value={nome} onChange={e => setNome(e.target.value)} id="nome" type="text" placeholder="Digite seu nome"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} id="email" type="text" placeholder="Digite seu email"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="telefone">Telefone</label>
                        <input value={telefone} onChange={e => setTelefone(e.target.value)} id="telefone" type="text" placeholder="Digite seu número de telefone"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="senha">Senha</label>
                        <input value={senha} onChange={e => setSenha(e.target.value)} id="senha" type="password" placeholder="Crie uma senha"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="confirmacao-senha">Confirmação de senha</label>
                        <input value={confirmacaoSenha} onChange={e => setConfirmacaoSenha(e.target.value)} id="confirmacao-senha" type="password" placeholder="Redigite sua senha"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="endereco">Endereço</label>
                        <input value={endereco} onChange={e => setEndereco(e.target.value)} id="endereco" type="text" placeholder="Digite seu endereço"></input>
                    </div>

                    <div className="container-form-element">
                        <label htmlFor="profissao">Profissão</label>
                        <input value={profissao} onChange={e => setProfissao(e.target.value)} id="profissao" type="text" placeholder="Digite sua profissão"></input>
                    </div>

                    <div className="container-form-element descricao">
                        <label htmlFor="descricao">Descrição</label>
                        <input value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao" type="text" placeholder="Descreva o seu trabalho"></input>
                    </div>

                    <p>Ao se registrar, você concorda com nossos <a href="/termos">Termos de Uso</a></p>
                    <p>Já tem uma conta? <Link to="/login"> Entre aqui</Link></p>


                    <button type="submit">Registrar</button>
                </form>

            </div>

        </div>
    );
}