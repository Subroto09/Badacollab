import React from 'react';
import '../css/dreams.css'
import dream_image from '../images/dreams.png'

function DreamsPage() {
    return ( <>
    <div className="dreams-container">
        <h1>Dreams</h1>
        <div className="card-container">
            <div className="card">
                <img src={dream_image} alt="Unable to load" />
                <h2>To create a platform for genuine sellers</h2>
                <p>There are a lot of sellers and products in the internet today. But not all of them think about the customer feedback or the experience customer get while opening or using the product. We will only list those sellers are more happy see smiling faces of the customers.</p>
            </div>
            <div className="card">
                <img src={dream_image} alt="Unable to load" />
                <h2>To encourage people for buying Indian Products</h2>
                <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum</p>
            </div>
            <div className="card">
                <img src={dream_image} alt="Unable to load" />
                <h2>Create more and more Indian brands, global</h2>
                <p>Their are not a lot of brands that are Indian but are making the world go crazy. One of the main purposes of TBC is to create more and more Indian brands that are globally appreciated and used.</p>
            </div>
        </div>
    </div>
    </> );
}

export default DreamsPage;