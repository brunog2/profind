import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissionais.css';
import api from '../services/api';


export default function Profissinais() {
    const [profissionais, setProfissionais] = useState([]);
    





    async function loadProfissionais() {
        const response = await api.get('/profissionais');
        console.log(response.data);
        if (profissionais.length == 0) {
            setProfissionais(response.data)
        }
    };

    loadProfissionais();

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
                <form action="/pesquisaProfissional/?textoPesquisa=q">
                    <input value={this.textoPesquisa} id="pesquisa" type="text" placeholder="Pesquisar"></input>
                    <button>Ok</button>


                </form>

            </div>

            <div className="container-profissionais-titulo">
                <p className=""><strong>Profissionais</strong></p>
            </div>

            {profissionais.map(profissional => (
                <div className="container-profissionais">

                    <div className="cards-profissonais">


                        <div className="card-profissional">

                            <img src={profissional.url_img} className="imagem-profissional" alt="Imagem do profissional"></img>
                            <footer>
                                <h2>{profissional.nome}</h2>
                                <strong>{profissional.profissao}</strong>
                                <p>{profissional.descricao}</p>
                            </footer>

                            <div className="container-buttons">




                            </div>

                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>



                    </div>

                </div>
            ))}

        </div>

    );
}