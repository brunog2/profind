import {BrowserRouter, Route} from 'react-router-dom';
import Indice from './pages/Indice';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Profissionais from './pages/Profissionais';
import ProfissionaisLogado from './pages/ProfissionaisLogado'
import Profissional from './pages/Profissional';
import Resultado from './pages/Resultado';
import Favoritos from './pages/Favoritos';
import Conta from "./pages/Conta";
import React from 'react';



export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Indice}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/profissionais" component={Profissionais}/>
            <Route path="/profissionais?login=true" component={ProfissionaisLogado}/>
            <Route path="/profissional" component={Profissional}/>
            <Route path="/resultado" component={Resultado}/>                
            <Route path="/favoritos" component={Favoritos}/>    
            <Route path="/conta" component={Conta}/>    
        </BrowserRouter>
    )
}