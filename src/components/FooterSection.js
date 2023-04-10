import React from 'react';

function FooterSection() {
    return(
        <div className="page-footer" id="page-footer">
            <div className="footer-top">
                <div className='container'>

                    <div className="col-md-8 col-md-offset-2 footer-top-content">
                        <div className="row">

                            <div className="col-sm-4 text-center">
                                <h5>Call Us Today!</h5>
                                <a href="tel: (225) 907-3565">(225) 907-3565</a>
                            </div>
                            <div className="col-sm-4 text-center">
                                <h5>Follow Us!</h5>
                                <div className="footer-social">
                                    <a href="https://facebook.com/placeholder" target="_blank"><span className="icon-facebook"><img className='FacebookImageIcon'></img></span></a>
                                    <a href="https://twitter.com/placeholder" target="_blank"><span className="icon-twitter"><img className='TwitterImageIcon'></img></span></a>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <h5>Visit Us!</h5>
                                <p>999 First Street<br/>Baton Rouge, LA 77777</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default FooterSection