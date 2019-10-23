import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import api from '../services/api'

export default function Login({ history }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleSubmit(e) {
       
        const response = api.post('/verificacaoDeConta', {
            email,
            senha
        })

        console.log(response)


        e.preventDefault();
        /*
        if (response = ) {
            history.push('/profissionais');
            
        };*/

    }


    


return (
    <div className="container-principal">
        <div className="container-form">


            <form onSubmit={handleSubmit}>
                <div className="container-form-element">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} id="email" type="text" placeholder="Digite seu email"></input>
                </div>

                <div className="container-form-element">
                    <label htmlFor="senha">Senha</label>
                    <input value={senha} onChange={e => setSenha(e.target.value)} id="senha" type="password" placeholder="Digite sua senha"></input>
                </div>




                <a href="/">Esqueci minha senha</a>

                <p>Ainda não tem uma conta? <Link to="/cadastro">Cadastre-se aqui</Link></p>


                <button type="submit">Entrar</button>

            </form>
        </div>

    </div>
);
}