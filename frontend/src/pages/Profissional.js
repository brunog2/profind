import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissional.css';


export default function Profissional() {
    return (
        <div>


            <div className="navbar-container">

                <nav className="navbar">

                    <Link className="brand nav-link" to="/profissionais">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </Link>

                    <div className="bts-right">
                        <Link to="/favoritos">
                            <button className="navbar-button navbar-button-profissionais">Meus favoritos</button>
                        </Link>

                        <Link to="/conta">
                            <button className="navbar-button navbar-button-profissionais">Minha conta</button>
                        </Link>

                        <Link to="/">
                            <button className="navbar-button navbar-button-profissionais sair">Sair</button>
                        </Link>
                    </div>

                </nav>

            </div>
            <div className="main-container-profissional">

                <div className="container-picture">
                    <img className="imagem-profissional" alt="alt"></img>
                    <h2>Ana Carodivna</h2>

                    <div className="container-buttons-profissional">

                        <div className="container-buttons-profissional-button">
                            <button className="like-deslike">
                                <p>34</p>
                                <img src="https://www.freeiconspng.com/download/39121" alt="alt"></img>
                            </button>

                        </div>

                        <div className="container-buttons-profissional-button">
                            <button className="like-deslike">
                                <p>3</p>
                                <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                            </button>
                        </div>
                    </div>

                </div>
                <div className="container-descricao">
                    <h2>Advogada</h2>
                    <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                    <div>
                        <p>
                            Localização: Maceió/AL
                    </p>
                        <p>
                            Número de telefone: (82) 99999-9999
                    </p>
                        <p>
                            Email: anacarodivna@advocacia.com
                    </p>
                    </div>
                </div>
            </div>
        </div>
    );
}