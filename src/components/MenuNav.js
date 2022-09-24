import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../image/1.png";
const MenuNav = () => {
    return (
            //    un menu de navigation
            <nav className="menu">
                <div className="container-menu">
                                   
                    <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Accueil</li></NavLink>
                    <NavLink to="/programme" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Programmation</li></NavLink>
                    <NavLink to="/parcours" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Parcours</li></NavLink>
                    <NavLink to="/contact" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Contact</li></NavLink>
                </div>
                
                <div className={"menuMobile"}>
                    <span className="burger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                      </span>
                    <div className={"childMenu"}>
                         <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Accueil</li></NavLink>
                         <NavLink to="/programme" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Programmation</li></NavLink>
                         <NavLink to="/parcours" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Parcours</li></NavLink>
                         <NavLink to="/contact" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Contact</li></NavLink>
                    </div>

                </div>
                <div className={"container-logo"}>
                    <img src={logo}  alt={"logo"}/>
                </div>
            </nav>

    );
};

export default MenuNav;