import React from 'react';
import MenuNav from "../components/MenuNav";
import logo from "../image/1.png";
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
                        Numéro : +330707070707
                    </p>
                    <p>
                        Pour me contacter Passer par le numéro de téléphone ou Email
                    </p>
                </div>
                <div className={"BoxImg"}>
                    <img src={logo} alt={"le logo"}/>
                </div>
            </div>
        </section>
    );
};

export default Contact;