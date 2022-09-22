import React from 'react';
import haltro from '../image/haltero.jpg';
const CardsProgramme = (key) => {
    return (
        <div className={"cardsProgrammation "+key}>

            <div className={"container-cards"}>
                <h2>
                    Programmation
                </h2>
                <p>type : Haltérophilie</p>
                <p>fréquence: 5jours semaines</p>
                <p>prix: 20euro/mois</p>
            </div>
            <img src={haltro} alt={"icon"}/>
        </div>

    );
};

export default CardsProgramme;