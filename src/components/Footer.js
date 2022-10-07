import React from 'react';
import logo from '../image/logoSansTitre.svg';
const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <div className="container-footer-left">
                    <p>© 2022 - Tous droits réservés</p>
                </div>
                <div className="container-footer-right">
                    <p>Site réalisé par DevOpti (Anthony Douat)</p>
                </div>
                <img src={logo} alt={"logo"}/>

            </div>
        </footer>
    );
};

export default Footer;