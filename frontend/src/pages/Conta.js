import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Conta.css';

export default function Conta() {
    return (
        <div className="container-principal-conta">
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

                <div>

                </div>
            </div>

            <div>
                <div className="main-container-profissional">

                    <div className="container-picture">
                        <img className="imagem-profissional" src="https://drive.google.com/uc?authuser=0&id=1E2yDsn4bDOsDTRvehOScfJR6kUNQf4A5&export=download" alt="Imagem do profissional"></img>
                        <h2>Talisson da Conceição</h2>

                        
                    </div>
                    <div className="container-descricao">
                        
                        <div>

                            
                            <p>
                                Localização: Maceió/AL
    </p>
                            <p>
                                Número de telefone: (82) 99999-9999
    </p>
                            <p>
                                Email: talisson@dominio.com
    </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

