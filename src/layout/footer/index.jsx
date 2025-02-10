import React from "react";
import "../../assets/Css/style.main.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="myFooter">
      <section className="sectionForAnime">
        <div className="footerContainer">
          <div className="footerContent">
            <div className="footerLeftSideContent">
              <h1>Beso</h1>
              <p>
                Small businesses play an outsized role in economies worldwide,
                where the vast majority still keep paper records and have no
                digital presence. Beso is here to help those entrepreneurs reach
                their full potential.
              </p>
            </div>
            <div className="footerRightSideContent">
              <div className="quickLinksList">
                <h3>Quick Links</h3>
                <a href="./index.html">
                  <p>Home</p>
                </a>
                <a href="./privacypolicy.html">
                  <p>Privacy Policy</p>
                </a>
                <a href="./termsandconditions.html">
                  <p>Terms & Conditions</p>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="./demo/index.html"
                >
                  {/* <p>Try demo</p> */}
                </a>
              </div>
              <div className="aboutUsList">
                <h3>About Us</h3>
                <a href="./aboutBeso.html" style={{ textDecoration: "none" }}>
                  <p>Meet the Team</p>
                </a>
                <p>Our Story</p>
                <p>Career</p>
              </div>
              <div className="contactsList">
                <h3>Contacts</h3>
                <p>info@beso.dev</p>
              </div>
              <div className="followusList">
                <h3>Follow us</h3>
                <div
                  className="socialMediaLinks"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <a href="https://www.linkedin.com/company/beso-mobile">
                    <FaLinkedin size={23} color="#ffffff" />
                  </a>
                  <a href="https://www.instagram.com/beso.mobile">
                    <FaInstagram size={23} color="#ffffff" />
                  </a>
                  <a href="https://www.facebook.com/people/Beso-Azerbaijan/pfbi-d02eqKkYmuXhzyZLnpyvr1P7s7CZKG4kcaniyrNZ7JYvzsa5EYbDP5fd3R465uXWK39l/?mibextid=WC7FNe">
                    <FaFacebook size={23} color="#ffffff" />
                  </a>
                  <a href="https://twitter.com/Beso_Mobile">
                    <FaTwitter size={23} color="#ffffff" />
                  </a>
                  <a href="https://www.tiktok.com/@beso.mobile">
                    <FaTiktok size={23} color="#ffffff" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="horizontLine" />
          <p className="endFooterCopyrightWord">
            Copyright Beso @ 2024. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
