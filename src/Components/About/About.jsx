import React from "react";
import "./About.scss"

const About=()=>{
    return(
        <main className="main">
            <div className="header-about">
            {/*  <!--  <img src="https://picsum.photos/1250/300" alt=""> --> */}
                <div id="headers-title">
                    <p>Artificial Life Robotics Lab (ALIROB)</p>
                    <p>ESCOM-UPIIH IPN</p>
                </div>
            </div>
            <div className="main-content">
                <div className="descripcion-central">
                    <div className="descripcion">
                        <figure>
                            <img src="https://picsum.photos/230" alt=""/>
                        </figure>
                        <p>
                        The Artificial Life Robotics Lab (ALIROB) is an international project
                        where theory and electronics  converge to explore complex dynamics from non-centralised
                        systems implemented in low-cost samll robots. Some of them include:
                        non-trivial collective behaviour, swarm, self-organization, and
                        artificial intelligence. 
                        </p>
                    </div>
                    <div className="proyectos-lista">
                        <ul>
                            <li>Artificial life</li>
                            <li>Mini Robotics</li>
                            <li>Cellular Automata</li>
                            <li>Complex Systems</li>
                            <li>Swarm</li>
                            <li>Collective Behavior</li>
                            <li>Cublets</li>
                            <li>Programming</li>
                            <li>Finite States Machines</li>
                        </ul>
                    </div>
                </div>
                <div className="proyectos-img">
                {/*   <!--  <img src="https://picsum.photos/300/500" alt="imagen"> --> */}
                    <img src="https://picsum.photos/125" alt="imagen"/>
                    <img src="https://picsum.photos/125" alt="imagen"/>
                    <img src="https://picsum.photos/125" alt="imagen"/>
                    <img src="https://picsum.photos/125" alt="imagen"/>
                    <img src="https://picsum.photos/125" alt="imagen"/>
                    <img src="https://picsum.photos/125" alt="imagen"/>
                </div>
            </div>
        </main>
    );
}

export default About;