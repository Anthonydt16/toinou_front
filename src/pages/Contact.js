import React from 'react';
import MenuNav from "../components/MenuNav";
import logo from "../image/1.png";
import Footer from "../components/Footer";
const Contact = () => {
    return (
        <section className={"container-Contact"}>
            <MenuNav/>
            <h1>Contact</h1>
            <div className={"container"}>
                <div className={"BoxText"}>
                    <p>
                        Email :
                        <a HREF="mailto:toinou@gmail.com"> toinou@gmail.com</a>
                    </p>
                    <p>
                        Téléphone :
                        <a HREF="telto:+330707070707"> +330707070707</a>
                    </p>
                    <p>
                        Instagram : <a HREF="https://www.instagram.com/antoine_straub/">@antoine_straub</a>
                    </p>
                </div>
                <div className={"BoxImg"}>
                    <img src={logo} alt={"le logo"}/>
                </div>
            </div>
            <Footer/>
        </section>
    );
};

export default Contact;