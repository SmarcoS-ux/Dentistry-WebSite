import React from "react";
import './style.css';

import Header from '../Header/';
import Footer from '../Footer/';

const Contacts = () => {
    return(
        <div className="contacts">
            <Header/>
            <div className="agendamentos">
                <h2>HORARIOS DE <span>ATENDIMENTO</span></h2>
                <p>Agende uma consulta pelo telefone: (21) 3699-9999</p>
                <div className="profissionais">
                    <div className="profissional">
                        <img src="/assets/dentista1.jpg" alt="Profissional" title="Dentista"/>
                        <p><span>Dr. Hélio</span></p>
                        <table>
                            <tr>
                                <th>Horários</th>
                                <th>Dias</th>
                            </tr>
                            <tr>
                                <td>09:00h</td>
                                <td>Segunda-Feira</td>
                            </tr>
                            <tr>
                                <td>13:00h</td>
                                <td>Quarta-Feira</td>
                            </tr>
                            <tr>
                                <td>15:00h</td>
                                <td>Quinta-Feira</td>
                            </tr>
                        </table>
                    </div>
                    <div className="profissional">
                        <img src="/assets/dentista3.png" alt="Profissional" title="Dentista"/>
                        <p><span>Dr. Carlos</span></p>
                        <table>
                            <tr>
                                <th>Horários</th>
                                <th>Dias</th>
                            </tr>
                            <tr>
                                <td>07:30h</td>
                                <td>Quinta-Feira</td>
                            </tr>
                            <tr>
                                <td>18:00h</td>
                                <td>Terça-Feira</td>
                            </tr>
                            <tr>
                                <td>21:30h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                        </table>
                    </div>
                    <div className="profissional">
                        <img src="/assets/dentista2.jpg" alt="Profissional" title="Dentista"/>
                        <p><span>Dr. Hiago</span></p>
                        <table>
                            <tr>
                                <th>Horários</th>
                                <th>Dias</th>
                            </tr>
                            <tr>
                                <td>15:00h</td>
                                <td>Sexta-Feira</td>
                            </tr>
                            <tr>
                                <td>17:30h</td>
                                <td>Quarta-Feira</td>
                            </tr>
                            <tr>
                                <td>19:00h</td>
                                <td>Segunda-Feira</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="localizacao">
                <h2>ONDE ESTAMOS <span>LOCALIZADOS</span>?</h2>
                <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.232101526592!2d-43.383566457298414!3d-22.99289484808095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda4a27b6fe5d%3A0x63c3f6d1d89e0f4e!2sBarra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1678029120420!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    );
}

export default Contacts;