import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import './Profissionais.css';


export default function Profissinais() {
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


            <div className="container-profissionais">
                <div className="container-profissionais-titulo">
                    <p className=""><strong>Profissionais em destaque</strong></p>
                </div>
                <div className="cards-profissonais">


                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="Imagem do profissional"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>

                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>
                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="alt"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>
                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>
                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="alt"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>
                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>
                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="alt"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>
                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>
                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="alt"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>
                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>


                    <div className="card-profissional">

                        <img className="imagem-profissional" alt="alt"></img>
                        <footer>
                            <h2>Ana Carodivna</h2>
                            <strong>Advogada</strong>
                            <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                        </footer>

                        <div className="container-buttons">

                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>34</p>
                                    <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                </button>

                            </div>


                            <div className="container-buttons-button">
                                <button className="like-deslike">
                                    <p>3</p>
                                    <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                </button>
                            </div>



                        </div>
                        <Link to="/profissional">
                            <button className="contato-profissional">Contate-me</button>
                        </Link>


                    </div>

                </div>

                <div className="container-profissionais">
                    <div className="container-profissionais-titulo">
                        <p className=""><strong>Outros profissionais</strong></p>
                    </div>
                    <div className="cards-profissonais">


                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                    </button>
                                </div>



                            </div>

                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>
                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                    </button>
                                </div>



                            </div>
                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>
                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                    </button>
                                </div>



                            </div>
                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>
                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                    </button>
                                </div>



                            </div>
                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>
                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
                                    </button>
                                </div>



                            </div>
                            <Link to="/profissional">
                                <button className="contato-profissional">Contate-me</button>
                            </Link>


                        </div>


                        <div className="card-profissional">

                            <img className="imagem-profissional" alt="alt"></img>
                            <footer>
                                <h2>Ana Carodivna</h2>
                                <strong>Advogada</strong>
                                <p>Trabalho com advocacia há mais de 15 anos e levo meu trabalho muito a sério.</p>
                            </footer>

                            <div className="container-buttons">

                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>34</p>
                                        <img src="https://www.freeiconspng.com/download/39121" alt="Imagem do profissional"></img>
                                    </button>

                                </div>


                                <div className="container-buttons-button">
                                    <button className="like-deslike">
                                        <p>3</p>
                                        <img src="http://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="alt"></img>
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

        </div>

    );
}