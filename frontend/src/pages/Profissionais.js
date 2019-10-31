import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissionais.css';
import api from '../services/api';
import history from '../history';

export default class Profissinais extends Component {

    constructor(props) {
        super(props);
        this.state = {
            profissionais: [],
            textoPesquisa: '',
            titulo: 'Profissionais'
        };
        this.pesquisaProfissionalHandler = this.pesquisaProfissionalHandler.bind(this);

    };

    componentDidMount() {
        console.log(api.get('/profissionais'))
        api.get('/profissionais').then(resposta => {
            this.setState({ profissionais: resposta.data })
            console.log("Todos os profissionais cadastrados: ");
            console.log(resposta.data)
            console.log(this.state.profissionais[0].url_foto)
        });
    }

    pesquisaProfissionalHandler(e) {
        e.preventDefault()

        alert("Pesquisar: " + this.state.textoPesquisa)
        api.get(`/pesquisarProfissional?textoPesquisa=${this.state.textoPesquisa}`).then((resposta) => {
            console.log("Resposta profissionais: ")
            console.log(resposta.data)
            console.log("Mostrando profissionais")
            this.setState({ profissionais: resposta.data, titulo: `Resultados para "${this.state.textoPesquisa}"` })

        })
    };


    contateMeHandler(idProfissional){
        history.push(`/profissional/${idProfissional}`)
    }




    render() {
        return (
            <div className="main-container">

                <div className="navbar-container">
                    <nav className="navbar">
                        <Link className="brand nav-link" to="/profissionais">
                            <img className="logo" src={logo} alt="Logo"></img>
                        </Link>
                        <div className="bts-right">
                            <Link to="/login">
                                <button className="navbar-button navbar-button-profissionais">Entrar</button>
                            </Link>
                            <Link to="/conta">
                                <button className="navbar-button navbar-button-destaque navbar-button-profissionais">Divulgar meus serviços</button>
                            </Link>
                        </div>
                    </nav>
                </div>

                <div className="container-pesquisa">
                    <form onSubmit={this.pesquisaProfissionalHandler}>
                        <input value={this.state.textoPesquisa} onChange={e => this.setState({ textoPesquisa: e.target.value })} id="pesquisa" type="text" placeholder="Pesquisar"></input>
                        <button type="submit">Ok</button>
                    </form>

                </div>

                <div className="container-profissionais-titulo">
                    <p value={this.state.titulo} className="">{this.state.titulo}</p>
                </div>
                <div className="container-profissionais">
                    <div className="cards-profissonais">
                        {this.state.profissionais.map(profissional => (
                            <div className="card-profissional" key={profissional._id}>

                                <img key={profissional.url_img} src={require(`./assets/images/${profissional.url_foto}`)} className="imagem-profissional" alt="Imagem do profissional"></img>
                                <footer>
                                    <h2 key={profissional.nome}>{profissional.nome}</h2>
                                    <strong key={profissional.profissao}>{profissional.profissao}</strong>
                                    <p key={profissional.descricao}>{profissional.descricao}</p>
                                </footer>

                                <div className="container-buttons">




                                </div>

                                <form onSubmit={e => this.contateMeHandler(profissional._id)}>
                                    <button type="submit" className="contato-profissional">Contate-me</button>
                                </form>


                            </div>




                        ))}
                    </div>

                </div>
            </div>

        );
    }

}