import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Resultado.css';


export default function Resultado() {
    return (
        <div className="main-container">
            <div className="navbar-container">

                <nav className="navbar">

                    <Link className="brand nav-link" to="/profissionais">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </Link>

                    <div className="bts-right">
                        <Link to="/login">
                            <button className="navbar-button navbar-button-profissionais">Meus favoritos</button>
                        </Link>

                        <Link to="/login">
                            <button className="navbar-button navbar-button-profissionais">Minha conta</button>
                        </Link>

                        <Link to="/">
                            <button className="navbar-button navbar-button-profissionais sair">Sair</button>
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


<h3>Mostrando resultados...</h3>

            <div className="container-profissionais">
                <div className="cards-profissonais">


                    <div className="card-profissional">

                        <img className="imagem-profissional" src="http://blogrh.com.br/wp-content/uploads/2017/11/10-Caracter%C3%ADsticas-que-o-profissional-de-RH-deve-ter.jpg" alt="Imagem do profissional"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="alt"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img alt="" src="http://pngimg.com/uploads/dislike/dislike_PNG63.png"></img>
                                </button>
                            </div>



                        </div>

                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>

                </div>

            </div>

        </div>

    );
}