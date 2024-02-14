import React from "react";
import people from '../../images/people.png'
import '../../css/getstarted.css';

function GetStarted() {
  return (
    <>
      <div className="info-container get-started">
        <div className="get-started-image">
          <img
            src={people}
            alt="Unable to load"
          />
        </div>
        <div className="get-started-content">
          <h1 className="first-heading">Your path with us</h1>
          <h1>Starts here</h1>
          <p>
            Register, Apply, Get Paid - Seamlessly Transforming Your Dreams into
            Reality
          </p>
          <button className="content-button">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default GetStarted;
