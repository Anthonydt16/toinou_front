import React from 'react';
import Cards from "../components/CardsProgramme";
import MenuNav from "../components/MenuNav";
import Antoine from "../image/antoine.JPG";
import Footer from "../components/Footer";
const Programmation = () => {
    return (
        <section className={"programmation"}>
            <MenuNav/>
            <h1> Programmes</h1>
            <div className={"container-photo"}>
                <img id={"photoAntoine"} src={Antoine } />
            </div>

            <div className={"container-programmation"}>


                {
                    [1,2,3,4,5,6,7,8,9,10].map((item, index) => {
                        return <Cards key={index}/>
                    }
                    )
                }
            </div>
            <Footer/>
        </section>
    );
};

export default Programmation;