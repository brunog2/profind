import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
    return (
        <div className="container-principal">
            <div className="container-form">

                <div className="container-form-element">
                    <label for="email">Email</label>
                    <input id="email" type="text" placeholder="Digite seu email"></input>
                </div>

                <div className="container-form-element">
                    <label for="senha">Senha</label>
                    <input id="senha" type="password" placeholder="Digite sua senha"></input>
                </div>

                <a href="#">Esqueci minha senha</a>

                <p>Ainda não tem uma conta?
                    <Link to="/cadastro">
                        <a> Cadastre-se aqui</a>
                    </Link>
                </p>

                <Link to="/profissionais">
                    <button>Entrar</button>
                </Link>

            </div>

        </div>
    );
}