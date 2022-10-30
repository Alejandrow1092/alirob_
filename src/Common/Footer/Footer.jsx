import React from "react";
import "./Footer.scss"

const Footer=()=>{
    return(
        <footer className="footer">
            <div id="p1">   
                <p>
                    <span id="MCE">MCE</span><br/>
                    <span id="des">
                        Museo de Computacion <br/> de la ESCOM 
                    </span>
                </p>
            </div>
            <div id="p2">
                <p>
                    <span id="ub">UBICACION</span><br/>
                    <span id="des">
                        ESCOM IPN, Unidad Profesional <br/> Adolfo López Mateos, 
                        07320 <br/> <span id="hide">Ciudad de México,</span>  CDMX
                    </span>
                </p>
            </div>
            <div id="p3">
            © ALIROB, Instituto Politécnico Nacional, México, 2016-2022
            </div>            
        </footer>
    )
}

export default Footer;