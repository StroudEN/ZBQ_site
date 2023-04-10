import React from "react";
import Headerbackground from '../assets/header-bg.jpg'
import logo from '../assets/logo-sm.png'

function PageHeader() {
    return(
        <div>
            <header className='page-header' id='page-header'>
                <div className="header-top">
                    <div className="container">
                        <nav className="nav-primary">
                            <ul id='menu-main-menu-1' className="menu">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-127">
                                    <a href="https://www.placeholderaddress.com/about">About</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-128">
                                    <a href="https://www.placeholderaddress.com/menu">Menu</a>
                                </li>
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-250">
                                    <a href="https://www.placeholderaddress.com/maps">Maps & Directions</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-bottom" style={{backgroundImage:`url(${Headerbackground})`}} >
                    <div className="container text-center">
                        <div className="header-info-wrapper hidden-xxs hidden-xs">
                            <div className="header-info pull-left">
                                <span>Visit Us!</span>
                                <p>150 Random Street
                                    <br/>
                                    Baton Rouge, LA 70801
                                </p>
                            </div>
                        </div>
                        <a href="https://www.placeholderaddress.com" className="site-branding">
                            <img className="img-responsive img-pad-bottom" src='./assets/milfords.png'></img>
                        </a>
                        <div className="header-info-wrapper hidden-xxs hidden-xs">
                            <div className="header-info header-info-right pull-right">
                                <span className="header-info-title"> Contact Us!</span>
                                <div className="header-btns">
                                    <a className="green-btn header-btn" href="tel:placeholderNumber">555-555-5555</a>
                                    <a className="green-btn header-btn" href='https://www.placeholderaddress.com/contact/'>Contact Us!</a>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </div>
            </header>
        </div>
    )
}

export default PageHeader