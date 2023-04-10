import React, { useState } from "react";
import Headerbackground from '../assets/header-bg.jpg'
import logo from '../assets/logo-sm.png'


function ScrollHeader() {

    const [navbar, setNavbar] = useState(false)

    const changeNavbar=()=>{
        console.log(window.scrollY);
        if(window.scrollY >= 300) {
                setNavbar(true) 
            } else {
                setNavbar(false);
            }
    
        }

    window.addEventListener('scroll', changeNavbar);

    return(
        <div className={navbar?"header-fixed active":"header-fixed"}>
                    <div className="header-top">
                    {/* <div className={navbar?'navbar active':'navbar'}> */}
                        <div className="container">
                            <nav className='nav-primary'>
                                <ul id='menu-main-menu-1' className="menu">
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-127">
                                        <a href="https://www.placeholderaddress.com/about">About</a>
                                        <span className="menu-arrow"></span>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-128">
                                        <a href="https://www.placeholderaddress.com/menu">Menu</a>
                                        <span className="menu-arrow"></span>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                        <a href="https://www.placeholderaddress.com/maps">Maps & Directions</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="container text-center" style={{backgroundImage:`url(${Headerbackground})`}}>
                            <div className="header-info-wrapper hidden-xxs">
                                <div className="header-info pull-left">
                                    <span>Visit Us!</span>
                                    <p>555 Random Avenue
                                        <br/>
                                        Baton Rouge, LA, 70801
                                    </p>
                                </div>
                            </div>
                            <a href='https://www.placerholderaddress.com' className="site-branding-small">
                                <img className='img-responsive' src={`${logo}`}></img>
                            </a>
                            <div className="header-info-wrapper hidden-xxs">
                                <div className="header-info pull-right">
                                    <span>Call Today!</span>
                                    <p>
                                        <a href='tel:(555) 555-5555'>555-555-5555</a>
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ScrollHeader