import React from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';

export default function Cadastro() {
    return (
        <div className="container-principal">
            <div className="container-form">
                <div className="container-form-element">
                    <label for="nome">Nome</label>
                    <input id="nome" type="text" placeholder="Digite seu nome"></input>
                </div>

                <div className="container-form-element">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Digite seu email"></input>
                </div>

                <div className="container-form-element">
                    <label for="telefone">Telefone</label>
                    <input id="telefone" type="text" placeholder="Digite seu número de telefone"></input>
                </div>

                <div className="container-form-element">
                    <label for="senha">Senha</label>
                    <input id="senha" type="password" placeholder="Crie uma senha"></input>
                </div>

                <div className="container-form-element">
                    <label for="confirmacao-senha">Confirmação de senha</label>
                    <input id="confirmacao-senha" type="password" placeholder="Redigite sua senha"></input>
                </div>

                <div className="container-form-element">
                    <label for="endereco">Endereço</label>
                    <input id="endereco" type="password" placeholder="Digite seu endereço"></input>
                </div>

                <p>Ao se registrar, você concorda com nossos <a href="#">Termos de Uso</a></p>
                <p>Já tem uma conta?
                    <Link to="/login">
                        <a> Entre aqui</a>
                    </Link>
                </p>

                <Link to="/login">
                    <button>Registrar</button>
                </Link>

            </div>

        </div>
    );
}