import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../Pages/Home/';
import Contacts from '../Pages/Contacts/';

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </BrowserRouter>
    );
}