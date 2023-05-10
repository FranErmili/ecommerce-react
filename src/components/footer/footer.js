import './footer.css';
import Logo from '../../logo.svg'

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <Link to="/">
                <img src={Logo} alt="logo Fran burguers" />
            </Link>
            <p>2023. Todos los derechos reservados. </p>
        </footer>
    );
};

export default Footer;