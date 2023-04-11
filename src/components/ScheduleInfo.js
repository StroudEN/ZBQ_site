import React from 'react'

function ScheduleInfo ( ) {
    return(
        <div className='schedule-container'>

                <header className="masthead masthead--slideshow home-masthead" id="masthead">
    	            <div className="banner-desc">
        	            <h1><span className="title-top">Baton Rouge’s</span>
                        <br />
                        Classic
                        <br/>
                        <span className="title-bottom">Deli</span>
                        </h1>
                    </div>
                </header>
            <div className='schedule-info'>
                <div className='sched-title'>Come Visit Us on Third Street</div>
                <img className="hidden-xxs" src="https://www.milfordsonthird.com/content/themes/milfordsonthird/assets/img/point-hand.png"></img>
                <ul className='sched-list'>
                    <li>Daily 6a -230p</li>
                    <li>Grab and Go: 6a - 6p Daily</li>
                </ul>
                <p className="menus-cta">
                    <a className="white-btn" href="https://www.CliffPutMenusHere.com/menus/">View Our Menu</a>
                </p>
            </div>
        </div>
    )
}

export default ScheduleInfo