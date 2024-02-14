import React from "react";
import "../css/footer.css";
import gmail_logo from "../images/gmail.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="newsletter">
          <h3>Subscribe to</h3>
          <h3>Our newsletter</h3>
          <div className="button-container">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="links">
          <p><a href="/internship" className="footer-link">Intern-ship</a></p>
          <p>Duniya</p>
          <p>Vision</p>
          <p>Jobs</p>
          <p>Dreams</p>
        </div>
        <div className="contact-us">
          <p>
            <b>Contact us</b>
          </p>
          <p>
            Have Questions or need assistance? Our dedicated support team is
            here to help. Reach us at:
          </p>
          <div className="gmail-logo-container">
            <img src={gmail_logo} alt="Unable to load" />
            <span>badacollab@gmail.com</span>
          </div>
          <div className="phone-logo-container">
            <span className="material-icons">phone</span>
            <span>+91 9999999999</span>
          </div>
        </div>
        <div className="social-media">
          <h3>Social media</h3>
          <p>
            Stay Connected with us on Social media for updates and community
            engagement. Follow us on:
          </p>

          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <radialGradient
              id="a"
              cx="13.286131%"
              cy="100.4724%"
              r="130.546822%"
            >
              <stop offset={0.09} stopColor="#fa8f21" />
              <stop offset={0.78} stopColor="#d82d7e" />
            </radialGradient>
            <path
              d="M5.334 8a2.667 2.667 0 115.333 0 2.667 2.667 0 01-5.333 0M3.892 8a4.108 4.108 0 108.216 0 4.108 4.108 0 00-8.216 0m7.419-4.27a.96.96 0 10.96-.96.96.96 0 00-.96.96M4.768 14.511c-.78-.036-1.204-.166-1.486-.275-.373-.146-.64-.319-.92-.599s-.453-.546-.598-.92c-.11-.28-.24-.705-.275-1.485-.04-.843-.047-1.097-.047-3.233s.008-2.389.047-3.233c.035-.78.166-1.203.275-1.486.145-.373.318-.64.598-.92s.546-.453.92-.598c.282-.11.706-.24 1.486-.275.843-.04 1.097-.047 3.232-.047 2.136 0 2.39.009 3.233.047.78.035 1.204.166 1.486.275.374.145.64.318.92.598s.453.547.599.92c.11.282.24.706.275 1.486.039.844.046 1.097.046 3.233s-.007 2.39-.046 3.233c-.036.78-.166 1.204-.275 1.486-.146.373-.319.64-.599.92s-.546.452-.92.598c-.282.11-.706.24-1.486.275-.843.039-1.096.046-3.233.046-2.136 0-2.389-.007-3.232-.046M4.702.048C3.85.088 3.268.222 2.76.42c-.526.204-.972.478-1.417.923S.624 2.233.42 2.76C.222 3.268.087 3.85.048 4.702.01 5.555 0 5.827 0 8s.009 2.445.048 3.298c.04.852.174 1.434.372 1.942.204.526.478.973.923 1.417.445.445.89.718 1.417.923.51.198 1.09.333 1.942.372C5.555 15.99 5.828 16 8 16c2.173 0 2.446-.009 3.299-.048.851-.04 1.433-.174 1.942-.372.526-.205.972-.478 1.417-.923s.718-.89.923-1.417c.197-.508.333-1.09.371-1.942.039-.853.048-1.125.048-3.298s-.009-2.445-.048-3.298c-.039-.852-.174-1.434-.371-1.942-.205-.526-.479-.972-.923-1.417S13.767.624 13.24.42C12.732.222 12.151.087 11.3.048 10.446.01 10.174 0 8.001 0s-2.446.009-3.3.048"
              fill="url(#a)"
            />
          </svg>
        </div>
      </footer>
    </>
  );
}

export default Footer;
