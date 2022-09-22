import React from 'react';
import MenuNav from "../components/MenuNav";

const Parcours = () => {
    return (
        <section className={"parcours"}>
            <MenuNav/>
            <div className={"container-parcours"}>
                <div className={"TimeLine"}>
                    <ul className="timeline timeline-vertical">

                        <li>
                            <span className="timeline--date">2020</span>
                            <div className="timeline--circle"><i></i>
                            </div>
                            <div className="timeline--description">
                                BAC
                            </div>
                        </li>

                        <li>
                            <span className="timeline--date">2022</span>
                            <div className="timeline--circle"><i></i>
                            </div>
                            <div className="timeline--description">
                                Diplome BPJEPS AF Haltéro muscu
                            </div>
                        </li>

                        <li>
                            <span className="timeline--date">2022</span>
                            <div className="timeline--circle"><i></i>
                            </div>
                            <div className="timeline--description">
                                LEVEL ONE
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Parcours;