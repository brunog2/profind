import { BrowserRouter, Route } from 'react-router-dom';
import Indice from './pages/Indice';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Profissionais from './pages/Profissionais';
import Profissional from './pages/Profissional';
import Resultado from './pages/Resultado';

import Conta from "./pages/Conta";
import React from 'react';



export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Indice}/>
            <Route path="/login" component={Login}/>
            <Route path="/cadastro" component={Cadastro}/>
            <Route path="/profissionais" component={Profissionais}/>
            <Route path="/profissional/:id" component={Profissional}/>
            <Route path="/resultado" component={Resultado}/>                
          
            <Route path="/conta" component={Conta}/>    
        </BrowserRouter>
    )
}