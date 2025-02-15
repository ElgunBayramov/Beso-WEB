import React from "react";
import "../../assets/Css/homePage.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <footer className="myFooter">
      <section className="sectionForAnime">
        <div className="footerContainer">
          <div className="footerContent">
            <div className="footerLeftSideContent">
              <h1>{t("beso")}</h1>
              <p>{t("footer_infobeso")}</p>
            </div>
            <div className="footerRightSideContent">
              <div className="quickLinksList">
                <h3>{t("quick_links")}</h3>
                <a href="/">
                  <p>{t("home")}</p>
                </a>
                <a href="./privacypolicy.html">
                  <p>{t("privacy_policy")}</p>
                </a>
                <a href="/termsandcontidions">
                  <p>{t("terms_conditions")}</p>
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
                <h3>{t("about_us")}</h3>
                <a href="./aboutBeso.html" style={{ textDecoration: "none" }}>
                  <p>{t("meet_team")}</p>
                </a>
                <p>{t("our_story")}</p>
                <p>{t("career")}</p>
              </div>
              <div className="contactsList">
                <h3>{t("contact")}</h3>
                <p>info@beso.dev</p>
              </div>
              <div className="followusList">
                <h3>{t("follow_us")}</h3>
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
          <p className="endFooterCopyrightWord">{t("copyright")}</p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
