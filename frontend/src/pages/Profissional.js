import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissional.css';
import api from '../services/api';


export default class Profissional extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id,
            profissional: [],
            url: null
        };        
    }

    componentDidMount(){
        console.log("entrou no componentdidmount")
        api.get(`/pesquisarPorId?id=${this.state.id}`).then(response => {
            console.log(response.data)
            this.setState({profissional: response.data, url_foto: require(`./assets/images/${response.data.url_foto}`)})
            

            console.log(this.state.profissional.url_foto)
        })
    }




    render() {
        return (
            <div>


                <div className="navbar-container">

                    <nav className="navbar">

                        <Link className="brand nav-link" to="/profissionais">
                            <img className="logo" src={logo} alt="Logo"></img>
                        </Link>

                        <div className="bts-right">

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
                        <img src={this.state.url_foto} className="imagem-profissional" alt={this.state.profissional.nome}></img>
                        <h2>{this.state.profissional.nome}</h2>




                    </div>
                    <div className="container-descricao">
                        <h2>{this.state.profissional.profissao}</h2>
                        <p>{this.state.profissional.descricao}</p>
                        <div>
                            <p>Localização: {this.state.profissional.endereco}</p>
                            <p>Telefone: {this.state.profissional.telefone}</p>
                            <p>Email: {this.state.profissional.email}</p>
                        </div>
                    </div>
                </div>
            </div >
        );

    }

}

