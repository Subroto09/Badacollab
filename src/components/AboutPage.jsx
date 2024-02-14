import React from "react";
import "../css/about.css";
import about from "../images/about.jpg";

function AboutPage() {
  return (
    <>
      <div className="about-container">
        <div className="content">
          <h1>About us</h1>
          <p>
            The Bada Collab aspires to be the biggest collaboration platform
            India has ever witnessed. This seems to be a goal that is hard to
            achieve but every big Dream or Collaboration seems Virtual at first,
            and Real when done. With collaboration of a dedicated team and hard
            work done smartly, it is possible. The main objective of
            TheBadaCollab is to promote and spread awareness about products made
            locally in India/at local level.
          </p>
        </div>
        <img src={about} alt="unable to load" />
      </div>
    </>
  );
}

export default AboutPage;
