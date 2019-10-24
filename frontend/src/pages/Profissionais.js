import React, { useState, Component} from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissionais.css';
import api from '../services/api';


export default function Profissinais() {
    const [profissionais, setProfissionais] = useState([]);
    



    

    async function loadProfissionais() {
        const response = await api.get('/profissionais');
        console.log(response.data);
        if (profissionais.length == 0){
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
                <input id="pesquisa" type="text" placeholder="Pesquisar"></input>
                <Link to="/resultado">
                    <button>Ok</button>
                </Link>
            </div>

            <div className="container-profissionais-titulo">
                <p className=""><strong>Profissionais</strong></p>
            </div>
            
            {profissionais.map(profissionais => (
                <div className="container-profissionais">

                    <div className="cards-profissonais">


                        <div className="card-profissional">

                            <img src={profissionais.url_img} className="imagem-profissional" alt="Imagem do profissional"></img>
                            <footer>
                                <h2>Ana Carolina</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
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