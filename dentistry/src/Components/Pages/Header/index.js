import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

import Header from '../../Props/Header-Props/';

const Cabecalho = () => {
    return(
        <Header>
            <div className="div-logo">
                <Link className='links' to='/'><img src="/assets/dente.png" alt="Logo" title="Logo-Empresa"/></Link>
                <Link className='links' to='/'><h2>Dentes Saudáveis</h2></Link>
            </div>
            <div className="div-navegation"> 
                <Link className="links" to=''>HOME</Link>
                <Link id="link-contact" className="links" to=''>CONTATO</Link>
            </div>
        </Header>
    );
}

export default Cabecalho;