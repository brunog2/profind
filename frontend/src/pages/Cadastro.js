import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import api from '../services/api';
import Upload from './UploadTest';
import history from '../history';

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
            file: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }




    onChange(e) {
        
        
        e.preventDefault();
        const formData = new FormData();

        formData.append('myImage', e.target.files[0]);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        api.post("/uploadImage", formData, config)
            .then((response) => {
                this.setState({url_foto: response.data.file.path})
                console.log(this.state.url_foto)
                alert("The file is successfully uploaded");
            }).catch((error) => {
            });
    }






    handleSubmit(e) {

        console.log(this.state.url_foto)


        api.post('/cadastrarProfissional', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            profissao: this.state.profissao,
            descricao: this.state.descricao,
            endereco: this.state.endereco,
            telefone: this.state.telefone,
            url_foto: this.state.url_foto,
            avaliacoes_negativas: 0,
            avaliacoes_positivas: 0,
        })



        e.preventDefault();

        alert("Cadastro realizado com sucesso!")
        history.push('/login');
    }

    render() {
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
                            <label htmlFor="foto">Foto</label>
                            <input className="foto" type="file" name="myImage" onChange={e => this.onChange(e)} />
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

export default Cadastro;