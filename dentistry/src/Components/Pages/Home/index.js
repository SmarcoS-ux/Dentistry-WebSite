import React from "react";
import {Link} from 'react-router-dom';
import './style.css';

import Header from '../../Pages/Header/';
import Home_Page from '../../Props/Home_Page-Props/';
import Footer from '../Footer/';

const Home = () => {
    return( 
        <div className="home">
            <Header/>

            <div className="main">
                <Home_Page>
                    <div className='top'>
                        <h2>OS MELHORES <span>APARELHOS DENTÁRIOS</span>!</h2>
                        <p>Confira abaixo todas as especialidades odontológicas que temos
                           a sua disposição! 
                        </p>
                        <div className="especialidades">
                            <ul id="list-1">
                                <li>Pré-avaliação</li>
                                <li>Raio-X digital</li>
                            </ul>
                            <ul id="list-2">
                                <li>Aparelhos dentários</li>
                                <li>Clareamento dental</li>
                            </ul>
                        </div>
                    </div>
                    <section className="aparelhos-dentarios">
                        <h2>POR QUE USAR <span>APARELHO?</span></h2>
                        <img id="img-capa" src="/assets/aparelhos-orotodonticos.jpg" alt="Aparelho" title="Aparelho Dentário"/>
                        <div className="descr-aparelhos">
                            <div className="descr">
                                <h3>Dentes alinhados</h3>
                                <p>Dentes desalinhados causam problemas nos dentes e podem 
                                   afetar a digestão dos alimentos e a respiração.</p>
                            </div>
                            <div className="descr">
                                <h3>Melhora a dicção e a higiene dentária</h3>
                                <p>Muitas pessoas não conseguem nem usar fio dental devido a
                                   posição da sua dentição. Contudo, a correção possibilita o 
                                   cuidado com a saúde bucal de forma bem mais ampla. 
                                </p>
                            </div>
                            <div className="descr">
                                <h3>Corrige espaço entre os dentes</h3>
                                <p>Uma dentição desalinhada e com espaços significativos incomodam
                                   muitas pessoas. Usar aparelhos nos dentes é uma das formas
                                   mais eficientes para que esses problemas possam ser corrigidos. 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="comentarios-clientes"> 
                        <h2>VEJA O QUE NOSSOS <span>CLIENTES</span> ESTÃO FALANDO...</h2>
                        <div className="comentarios">
                            <div className="comentario">
                                <img src="/assets/pessoa2.jpg" alt="Cliente" title="Perfio do Cliente"/>
                                <p><span>Alberto</span></p>
                                <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                            </div>
                            <div className="comentario">
                                <img src="/assets/pessoa1.jpg" alt="Cliente" title="Perfio do Cliente"/>
                                <p><span>Eliana</span></p>
                                <p>Comecei a usar ano passado e já estou notando a diferença.</p>
                            </div>
                            <div className="comentario">
                                <img src="/assets/pessoa4.png" alt="Cliente" title="Perfio do Cliente"/>
                                <p><span>Carla</span></p>
                                <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                            </div>
                        </div>
                        <Link className="links" to='/contacts'>ENTRAR EM CONTATO</Link>
                    </section>
                </Home_Page>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;