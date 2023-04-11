import React from 'react';
import background from '../assets/bricks.jpg'
import sandwichwrap from '../assets/sandwichwrap.jpg'

function IntroParagraph() {
    return(
    <section className="page-content"  style={{backgroundImage:`url(${background})`}}>
        <div className="company-intro">
            <div className="container">

                <div className="company-intro-content">
                    <div className="company-intro-img visible-sm visible-xs visible-xxs" style={{backgroundImage:`url(${sandwichwrap})`}}></div>
                    <div className="company-intro-desc">
                        <h2>Welcome to Milford's on Third</h2>
                        <p></p>
                        <p>Have a craving for true NYC delicatessen favorites with a little Southern charm and flavor? Milford’s on Third has emerged on the scene as one of the best delis in downtown Baton Rouge.</p>
                        <p>We’re on the ground floor of the Watermark hotel, and we’re open for breakfast, lunch and after-work pick-ups. What will you find on our menu? Only the best deli offerings you can imagine. Deli sandwiches are piled high with tempting fresh-cut meats and dressed for success with mouthwatering toppings. Bagels are spread generously with a variety of schmears, and the flaky salmon salad is so fresh you’d swear we had a mountain stream running through our kitchen.</p>
                        <p>Our goal is to be the best deli in Baton Rouge, LA. Stop by Milford’s on Third on your way to or from the office, or bring your biggest client to the best deli restaurant downtown. Call ahead and pick up something special for tonight. We’re like a NYC delicatessen — overflowing with down-home Southern style and hospitality.</p>
                        <p></p>
                        <a href='website.com/menus' className="green-btn">View our menu</a>
                        <div className="company-intro-img hidden-sm hidden-xs hidden-xxs" styles="background-image: url('https://www.milfordsonthird.com/content/uploads/2016/11/iStock-509633936_products_sandwich.jpg');"></div>
                    </div>
                    <div class="company-intro-img hidden-sm hidden-xs hidden-xxs" style={{backgroundImage:`url(${sandwichwrap})`}}></div>
                </div>
            </div>
        </div>
        <div className='menu-intro'></div>
        <div className="products-wrapper"></div>
    </section>
    )
}

export default IntroParagraph