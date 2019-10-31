import React from 'react';
import './Indice.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

export default function Indice() {


    return (
        <div className="indice-container">

            <div className="navbar-container">

                <nav className="navbar">

                    <Link className="brand nav-link" to="/">
                        <img className="logo" src={logo} alt="Logo"></img>
                    </Link>

                    <div className="container-buttons nav-link">

                        <Link to="/login">
                            <button className="navbar-button">Entrar</button>
                        </Link>

                        <Link to="/cadastro">
                            <button className="navbar-button navbar-button-destaque">Divulgar minha profissão</button>
                        </Link>

                    </div>

                </nav>

            </div>

            <div className="main">

                <div className="parallax">

                    <div className="parallax-content">

                        <h1 className="parallax-content-item">Encontre os melhores profissionais da sua região agora!</h1>
                        <p className="parallax-content-item">E o melhor de tudo, é totalmente gratuito!</p>

                        <Link to="/profissionais">
                            <button className="bt-encontrar parallax-content-item">Encontrar agora</button>
                        </Link>

                    </div>

                </div>



                <div className="parallax-2">
                    <div className="parallax-2-container-1">

                        <h2 className="parallax-content-item">
                            Tenha uma renda extra
                        </h2>
                        <p className="parallax-content-item">
                            Divulgue seus serviços no ProFind
                        </p>

                        <Link to="/cadastro">
                            <button className="bt-encontrar-prof parallax-content-item">Quero fazer parte</button>
                        </Link>

                    </div>
                </div>

                <div className="container-instrucoes">

                    <div className="container-instrucoes-card">
                        <h2>Para o profissional</h2>

                        <p>O cliente acessa, pesquisa, encontra seu anúncio e conversa com você.</p>
                        <p>Nós não nos envolvemos em nenhuma negociação ou orçamento.</p>
                        <p>Nós simplesmente mostramos você, prestador de serviços, para o cliente que possui uma necessidade.</p>
                    </div>

                    <div className="container-instrucoes-card">
                        <h2>Para o cliente</h2>

                        <p>Encontre pedreiro, eletricista, costureira, encanador, passeador de cães, cuidador, faxineira, diarista e muito mais.</p>

                        <p>Você vai encontrar vários prestadores de serviços que podem te atender e estão próximos de você.</p>

                        <p>Clique no whatsapp de quantos profissionais quiser e converse diretamente com eles.</p>
                    </div>


                </div>

                <div className="container-informacoes">
                    <div className="border-separator"></div>
                    <p>© Copyright <a href="/">ProFind</a> 2019 - Todos os direitos reservados</p>
                </div>
            </div>


        </div>
    );
}
