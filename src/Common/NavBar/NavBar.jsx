import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useState, useRef, useEffect} from "react";





/* menuButton.addEventListener('click', () => {
    navigationLinks.classList.toggle('active')
    menuButton.classList.toggle('open');

}) */

const NavBar=()=>{
    const menuButton=useRef(null);
    const navigationLinks=useRef(null);

    const[isActive, setActive]=useState(false);

    const handdleToggle=()=>{
        setActive(!isActive);
        console.log(`Active status is ${isActive}`)
    } 

    useEffect(()=>{
        //navigationLinks.current.classList.toggle('active');
        //menuButton.current.classList.toggle('open');
    },[])
   
    return(
        <>
<header className="header">
        <div className="container" id="menu">
            
            <a href="/" className="logo">MCE</a>

            <div id="menu" className={`menu-icon ${isActive ? "open": ""}`}>
                <div className="menu-btn__burger" ref={menuButton} onClick={handdleToggle}></div>
            </div>

            
          {/* <!--   <span class="menu-icon" id="menu">Menu</span> --> */}
            <nav  id="navigation" ref={navigationLinks} className={`navigation ${isActive ? "active": ""}`}>
                <menu className="sup">
                    <ul>
                        <li><a /* href='/museo/participants' */><Link to="/participants">Participantss</Link></a></li>
                        <li><a href="/grants">Grants</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </menu>
                <menu className="inf">
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="#">Museo</a></li>
                        <li><a href="/galeria">Galeria</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </menu>
            </nav>
            
        </div>
    </header>        
        </>
    );
}

export default NavBar;