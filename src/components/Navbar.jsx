import React from 'react';
import '../style/Navbar.scss';

const Navbar = () => {

    return (
        <div className="navbar">
            <header class="header">
                <span className='social-network'>
                    <a href='https://www.facebook.com/Le-Ptit-Bistrot-149517595148239/'><img src={'assets/facebook.png'} alt="facebook" /></a>
                    <a href="https://www.tripadvisor.fr/Restaurant_Review-g1915628-d1899418-Reviews-Le_P_tit_Bistrot-Saint_Montan_Ardeche_Auvergne_Rhone_Alpes.html"><img src={'assets/tripadvisor.png'} alt="facebook" /></a>
                </span>
                <input class="nav-btn" type="checkbox" id="nav-btn" />
                <label class="nav-icon" for="nav-btn"><span class="navicon"></span></label>
                <ul class="nav">
                    <span>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="#/menu">Menu</a></li>
                        <li><a href="#/wines">Vins</a></li>
                        <li><a href="#/contact">Contact</a></li>
                    </span>

                </ul>
            </header>
        </div>
    );
}

export default Navbar;