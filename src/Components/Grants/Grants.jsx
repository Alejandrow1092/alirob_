import React from "react";
import "./Grants.scss"
const Grants=()=>{
    return(
        <main className="main">
        <section id="title">
            <p>GRANTS</p>
        </section>

        <section className="cards">
            <div className="card-self">
                <section id="imagen">
                    <figure>
                        <img src="https://picsum.photos/352/300" alt="photo"/>
                    </figure>
                </section>
                
               <section id="des">
                    <p id="title-card">
                        Proyecto Transdiciplinario IPN 
                    </p><br/>
                    <p id="des-card">
                        Sistema de vigilancia autónomo y dinámico 
                        en las escuelas del IPN a trvés de robots basados en sistemas complejos
                    </p>
                    <br/>

                    <hr/>
                    
                        <table>
                            <thead>
                                <th id="num">Núm</th>
                                <th>Ubicacion</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>20170299</td>
                                    <td>México, 2017-2018</td>
                                </tr>
                            </tbody>
                        </table>
                    
               </section>
                
            </div>

            <div className="card-self">
                <section id="imagen">
                    <figure>
                        <img src="https://picsum.photos/352/300" alt="photo"/>
                    </figure>
                </section>
                <section id="des">
                    <p id="title-card">
                        Proyecto de Investigación IPN
                    </p>
                    <br/>
                    <p id="des-card">
                        Control de sistemas complejos a través de medios no lineales
                        para la solución de movilidad poblacional
                    </p> 
                    <br/>
                    <hr/>
                    <table>
                        <thead>
                            <th id="num">Núm</th>
                            <th>Ubicacion</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>20196419</td>
                                <td>México, 2019</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                
            </div>
        </section>
    </main>
    );
}

export default Grants;