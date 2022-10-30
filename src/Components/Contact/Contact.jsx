import React from "react";
import "./Contact.scss"

const Contact=()=>{
    return(
        <main className="main">
        <section id="title">
            <p>CONTACT</p>
        </section>

        <section className="card-contact">
            <div id="imagen-lat">
                <img src="https://picsum.photos/260/550" alt="photo-lateral"/>
            </div>
            <div id="info-lat">
                <div id="info">
                    <p id="nombre">Genaro Juarez Martinez</p>
                    <hr/>
                    <div id="sub-nombre">
                        <p>
                            Laboratorio Internacional de ciencias
                            de la computacion <span>(LCOOMP)</span> 
                        </p>
                        <p>
                            Laboratorio de vida Artifical y Robotica <span>(ALIROB)</span>
                        </p>
                    </div>
                    
                    <div id="titulares">
                        <p id="ipn"><span>I</span>instituto <span>P</span>olitécnico <span>N</span>acional </p>   
                     {/*   <!--  <p id="ipn-responsive">IPN</p> --> */}
                        <p id="escom"><span>E</span>scuela <span>S</span>uperior de <span>C</span>ómputo</p>
                      {/*  <!--  <p id="escom-responsive"><span>ESCOM</span></p> --> */}
                    </div>
                
                    <hr/>

                    <div id="indicaciones">
                        <p><span>Ubicacion:</span> Salon 1007. Edificio 1. </p>
                        <p><span>Tel:</span> +52 557296000 Ext. 52067</p>
                        <p><span>E-mail:</span><a href="mailto:alirob.ipn@gmail.com">alirob.ipn@gmail.com</a></p>
                    </div>
                    
                </div>
            </div>
        </section>

    </main>
    );
}

export default Contact;