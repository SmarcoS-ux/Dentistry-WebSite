import React from "react";
import './style.css';

const Home_Page = (props) => {
    return(
        <div className="home-page-props">
            {props.children}
        </div>
    );
}

export default Home_Page;