import React from "react";
import "./Participants.scss";
import "../../Common/botones.scss";
import escom from "../../assets/img/escudo_escom.png";
import uwe from "../../assets/img/uwe.png";
import upiih from "../../assets/img/upiih.jpg"

const Participants=()=>{
    return(
<main className="main">
        <section className="participants-list">
            
            <section className="menu-lat">
                <button className="mr" id="btn-parts" onclick="aver('t1')">Participants</button>
                <button id="btn-parts" onclick="aver('t2')">Students</button>
                <button id="btn-parts" onclick="aver('t3')">Years Ago</button>
            </section>

            <div id="t1">
                <table  id="tabla1">
                    <tbody>
                        <tr>
                            <td id="nombre">Genaro Juarez Martinez</td>
                            <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Andrew Adamatzky</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Luz Noe Oliva Moreno</td>
                            <td id="imagen"><img src={upiih} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Ivan Zelinka</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Adriana de la Paz Sanchez Moreno</td>
                            <td id="imagen"> <img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Guanrong Chen</td>
                            <td id="imagen" ><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Margarita Elizabeth Gomez Mayorga</td>
                            <td id="imagen"><img src={upiih} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Rolf Hoffman</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Miguel Angel Maldonado Muñoz</td>
                            <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Dmitry Zaitsev</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Rosalba Galvan Guerra</td>
                            <td id="imagen"><img src={upiih} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Jeff Jones</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Jesus Gudiño Sánchez</td>
                            <td id="imagen"><img src={upiih} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Katsunobu IMAI</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Shigeru Ninagawa</td>
                            <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                            <td id="nombre">Fangyue Chen</td>
                            <td id="imagen"><img src={uwe} alt="uwe" width="200px" height="auto"/></td>
                        </tr>
                        <tr>
                            <td id="nombre">Aziz Alaoui</td>
                            <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        </tr>
                    </tbody>
                    
                    {/* <!-- <tr>
                        <td>Rosalba Galvan Guerra</td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td>Jesus Gudiño Sanchez</td>
                        <td></td>
                    </tr> --> */}
                </table>
            </div>
            
            <div id="t2">
               
                <table  id="tabla2">
                    <tr>
                        <td id="nombre">
                            <p>Anahi Ibañez Zarco</p>
                            <p id="sub">ESCA-T, IPN</p>
                        </td>
                        <td id="imagen"><img src="../assets/img/esca.png" alt="ESCA" width="100px" height="auto"/></td>
                        <td id="nombre">Oswaldo Leyva Barrientos</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Alan Baruch Cerna Gonzalez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Edmundo Josue Sanchez Mendez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Guillermo Ramirez Olvera</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Brayan Yosafat Martinez Coronel</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Alejandro Martinez Rodriguez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                </table>
            </div>
            
            <div id="t3">
                <table id="tabla3">
                    <tr>
                        <td id="nombre">Alonso Ruben Maya Martinez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Kevin David Aguilar Pacheco</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Erik Efrain Vargas Romero</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Eduardo Torres Hernandez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Alberto Esquivel Valdez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Carlos Zacarias Reyes Martinez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Ricardo Quezada Figueroa</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Gabriela Moreno Gonzalez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Edgar Yair Marin Alvarez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Daniel Ayala Zamorano</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Laura Natalia Barbolla</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Jose Antonio Jimenez Amador</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Cesar Ivan Mazano Mendoza</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Sergio Eduardo Juarez Martinez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Eric Fabia Peralta Ramirez</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Dalia de Felipe Vargas</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">
                            <p>Carmen Maytse Sanchez Salazar</p>
                            <p id="sub">ESCOM, IPN</p>
                        </td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                        <td id="nombre">Estephania Molina Delgado</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                    <tr>
                        <td id="nombre">Rosa Gabriela Chávez Barrera</td>
                        <td id="imagen"><img src={escom} alt="ESCOM" width="100px" height="auto"/></td>
                    </tr>
                </table>
            </div>

       </section>
    </main>
    );
}

export default Participants;