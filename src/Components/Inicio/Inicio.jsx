import React from "react";
import "./Inicio.scss";

const img = [
    /* "../assets/img/imagen1.jpg",
    "../assets/img/imagen2.jpg",
    "../assets/img/imagen3.jpg", */
    "https://picsum.photos/1020/801",
    "https://picsum.photos/1020/802",
    "https://picsum.photos/1020/803",
    "https://picsum.photos/1020/804"
];


window.addEventListener('load', () =>{
    console.log("el contenido a cargado"); 

    let indice=0;
    let tam = img.length - 1;

    const cambiaImg=()=>{
        //console.log(indice)
        document.getElementById('slider').src = img[indice]
        if(indice<tam){
            indice++;
        }
        else{
            indice=0;
        }
    }

    setInterval(cambiaImg, 4000)
    
})


const Inicio=()=>{
    return(
        <>
        <main className="main">
        <div className="slider">
            <img src="" alt="Portada" id="slider"/>
        </div>

       {/* <!--  primera seccion --> */}
        <section className="container-fit">
            <div id="sec_1">
                <p id="title_inicio">Museo de Computacion de la Escom</p>
                <p id="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fermentum, malesuada risus malesuada mauris dui, in. Ipsum eu 
                    accumsan, urna diam eget aliquet. Risus vulputate convallis a lectus 
                    turpis proin mauris, molestie posuere. Sagittis a nullam congue facilisis 
                    dolor platea scelerisque condimentum. Nunc, i
                </p>
            </div>
           <div id="sec_2">
               <figure>
                <img src="https://picsum.photos/130/380" alt="imagen1"/>
                <img id="imagen2" src="https://picsum.photos/130/380" alt="imagen2"/>
                <img src="https://picsum.photos/130/380" alt="imagen3"/>
               </figure>
           </div>
        </section>

        {/* <!-- Segunda seccion --> */}
        <section className="container-fit1">
            <div className="parallax">
                <div className="info">
                    <p id="title_inicio">Museo de computacion de la escom</p>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Fermentum, malesuada risus malesuada mauris dui, in. Ipsum eu 
                        accumsan, urna diam eget aliquet. Risus vulputate convallis a lectus 
                        turpis proin mauris, molestie posuere. Sagittis a nullam congue facilisis 
                        dolor platea scelerisque condimentum. Nunc, i
                    </p>
                </div>
                
            </div>
           {/*  <!-- <div>
                <p id="title_inicio">Museo de computacion de la escom</p>
                <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Fermentum, malesuada risus malesuada mauris dui, in. Ipsum eu 
                    accumsan, urna diam eget aliquet. Risus vulputate convallis a lectus 
                    turpis proin mauris, molestie posuere. Sagittis a nullam congue facilisis 
                    dolor platea scelerisque condimentum. Nunc, i</p>
            </div>
            <figure>
                <img src="/assets/img/escom.jpg" height="auto" width="100%" alt="escom">
            </figure> --> */}
        </section>


        <div className="container-section">
            <p><span id="headerSecc">Exposiciones recientes</span></p>
            <hr/>
        </div>

       {/*  <!-- Tercera seccion --> */}
        <section className="container-fit2">
            <figure >
                <img src="https://picsum.photos/500" alt="imagen"/>
              
            </figure>
            <div>
                <section>
                    <p id="title_inicio">Visita nuestra linea del tiempo</p>
                    <p id="texto1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Donec massa egestas nullam sodales cras pellentesque 
                        lacinia. Fringilla viverra adipiscing sed ut aenean arcu. 
                        Tincidunt erat amet aliquet nisl se
                    </p><br/>
                    <p id="right-text"><a href="#">Ir a la linea del tiempo</a></p>
                </section>
                
            </div>
        </section>

        <div className="container-section">
            <p><span id="headerSecc">Visitanos</span></p>
            <hr/>
        </div>
        {/* <!-- Cuarta seccion --> */}
        <section id="map" className="container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.8710117849537!2d-99.14890028533561!3d19.50418454344227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f94c06d75fd7%3A0x3fe1567da2190ac9!2sESCOM%20-%20Escuela%20Superior%20de%20C%C3%B3mputo%20-%20IPN!5e0!3m2!1sen!2smx!4v1652655148115!5m2!1sen!2smx" width="600" height="450" /* style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */></iframe>
        </section>

    </main>
    </>
    )
}



export default  Inicio;