import React from "react";
import "../../css/intro.css";


function Intro() {
  return (
    <>
      <div className="info-container">
        <div className="content">
            <h1>Bada Collab</h1>
          <p>
            Embark on a journey with The Big Collab, aiming to be India’s
            grandest collaboration platform ever seen! Big dreams and
            collaborations may seem virtual initially, but with a dedicated team
            and smart work, they transform into reality. TheBadaCollab is not
            just a vision; it’s a mission to spotlight and amplify locally
            crafted products, igniting awareness and pride in everything made at
            the grassroots level in India. Join us in turning dreams into a
            vibrant reality!
          </p>
          <button className="content-button">Get Started</button>
        </div>
        <div className="image">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt="Unable to load"
          />
        </div>
      </div>
      <div className="info-container second-info-container">
        <div className="image">
          <img
            src="https://source.unsplash.com/random/500x500"
            alt="Unable to load"
          />
        </div>
        <div className="content">
            <h1>Some More Details</h1>
          <p>
            At TheBadaCollab, collaboration is the heartbeat. We’re here to
            connect, believe, and make it count. Join us as we spotlight brands,
            products, and artists, giving them the spotlight they deserve on
            Instagram, Facebook, and more! Sustainability is our mission. With a
            dedicated team, we’re teaming up with eco-friendly brands, making
            them shine brighter. Let’s make sustainability the key to a better
            future!
          </p>
          <button className="content-button">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Intro;
