import React, { useState, Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Cadastro.css';
import api from '../services/api';

class Cadastro extends Component {


    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            confirmacaoSenha: '',
            endereco: '',
            profissao: '',
            descricao: '',
            url_foto: '',
            file: null,
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }




    onChange(e) {
        this.setState({ file: e.target.files[0] });
    }

    async handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('myImage', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        await api.post("/uploadImage", formData, config)
            .then((response) => {
                this.setState({ url_foto: response.data.file.filename })
            }).catch((error) => {
            });

        await api.post('/cadastrarProfissional', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            confirmacaoSenha: this.state.confirmacaoSenha,
            profissao: this.state.profissao,
            descricao: this.state.descricao,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            url_foto: this.state.url_foto,
            avaliacoes_negativas: 0,
            avaliacoes_positivas: 0,
        }).then((response) => {
            console.log(response)
            if (response.data["cadastro"] == "err_senha"){
                alert("Senhas não conferem!")
            }
            else if (response.data["cadastro"] == "err_email"){
                alert("Email já cadastrado no sistema!")
            }
            else if (response.data["cadastro"] == "err_telefone"){
                alert("Telefone já cadastrado no sistema!")
            }
            else if (response.data["cadastro"] == "cadastrado") {
                alert("Cadastro realizado com sucesso! Agora você está visível para todos lhe verem no sistema")
                this.setState({
                    redirect: true
                })
            }
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/login/" />
        }
        else {
            return (
                <div className="container-principal">
                    <div className="container-form">

                        <form onSubmit={this.handleSubmit}>
                            <div className="container-form-element">
                                <label htmlFor="nome">Nome</label>
                                <input required value={this.state.nome} onChange={e => this.setState({ nome: e.target.value })} id="nome" type="text" placeholder="Digite seu nome"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="email">Email</label>
                                <input required value={this.state.email} onChange={e => this.setState({ email: e.target.value })} id="email" type="text" placeholder="Digite seu email"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="telefone">Telefone</label>
                                <input required value={this.state.telefone} onChange={e => this.setState({ telefone: e.target.value })} id="telefone" type="text" placeholder="Digite seu número de telefone"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="senha">Senha</label>
                                <input required value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })} id="senha" type="password" placeholder="Crie uma senha"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="confirmacao-senha">Confirmação de senha</label>
                                <input required value={this.state.confirmacaoSenha} onChange={e => this.setState({ confirmacaoSenha: e.target.value })} id="confirmacao-senha" type="password" placeholder="Redigite sua senha"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="endereco">Endereço</label>
                                <input required value={this.state.endereco} onChange={e => this.setState({ endereco: e.target.value })} id="endereco" type="text" placeholder="Digite seu endereço"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="profissao">Profissão</label>
                                <input required value={this.state.profissao} onChange={e => this.setState({ profissao: e.target.value })} id="profissao" type="text" placeholder="Digite sua profissão"></input>
                            </div>

                            <div className="container-form-element descricao">
                                <label htmlFor="descricao">Descrição</label>
                                <input required value={this.state.descricao} onChange={e => this.setState({ descricao: e.target.value })} id="descricao" type="text" placeholder="Descreva o seu trabalho"></input>
                            </div>

                            <div className="container-form-element">
                                <label htmlFor="descricao">Foto</label>
                                <label className="label-foto" htmlFor="file">Sua foto</label>
                                <input className="file" id="file" type="file" name="myImage" onChange={this.onChange} />
                            </div>

                            <p>Ao se registrar, você concorda com nossos <a href="/termos">Termos de Uso</a></p>
                            <p>Já tem uma conta? <Link to="/login"> Entre aqui</Link></p>


                            <button type="submit">Registrar</button>
                        </form>

                    </div>

                </div>
            );
        }

    }

}

export default Cadastro;