import React from "react";
import './style.css';

import Header from '../../Pages/Header/';
import Home_Page from '../../Props/Home_Page-Props/';

const Home = () => {
    return(
        <div className="home">
            <Header/>

            <div className="main">
                <Home_Page>
                    <h1>Teste</h1>
                </Home_Page>
            </div>
        </div>
    );
}

export default Home;