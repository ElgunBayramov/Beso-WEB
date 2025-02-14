import React, { useState } from "react";
import Footer from "../layout/footer";
import "../assets/Css/aboutPage.css";
import "../assets/Css/homePage.css";
import images from "../models/images.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function About() {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const availableLanguages = ["az", "es", "tr", "en"];

  const filteredLanguages = availableLanguages.filter(
    (lang) => lang !== currentLanguage
  );

  const changeLanguage = (lng) => {
    if (lng !== i18n.language) {
      i18n.changeLanguage(lng);
      localStorage.setItem("selectedLanguage", lng);
      setCurrentLanguage(lng);
    }
  };
  return (
    <>
      <section id="headerAndContentSectionAbout">
        <div id="headerAndContentContainerAbout">
          <header className="headerContentAbout">
            <a href="index.html">
              <img src={images.header.besoIcon} alt="" />
            </a>
            <div className="headerRightSideLinksAbout">
              <ul>
                <li>
                  <a href="">{t("administer_business")}</a>
                  <i
                    className="fa-solid fa-chevron-down down-icon"
                    style={{ color: "#001c3d" }}
                  ></i>
                </li>
                <li>
                  <a href="/about">{t("about_beso")}</a>
                </li>
                <li>
                  <a href="/investors">{t("investors")}</a>
                </li>
                <i
                  className="dropDownIcon fa-solid fa-bars hamburgerIcon js-navbar-toogle"
                  style={{ color: "#001c3d" }}
                ></i>
                <img
                  style={{ cursor: "pointer" }}
                  className="js-language-toggle"
                  src={images.header.globusBlue}
                  alt=""
                />
              </ul>
              <div className="dropdownList hidden js-navbar-list">
                <div className="dropdownListContent">
                  <li>
                    <a href="">{t("administer_business")}</a>
                  </li>
                  <li>
                    <a href="/about">{t("about_beso")}</a>
                  </li>
                  <li>
                    <a href="/investors">{t("investors")}</a>
                  </li>
                </div>
              </div>
              <div className="globusdownList hidden js-language-listAbout">
                <div className="languageListContentAbout">
                  {/* <li>
                    <a href="./azerbaijanLanguage/aboutBeso.html">AZ</a>
                  </li>
                  <li>
                    <a href="./spanishLanguage/aboutBeso.html">ES</a>
                  </li>
                  <li>
                    <a href="./turkishLanguage/aboutBeso.html">TR</a>
                  </li> */}
                  {filteredLanguages.map((lang, index) => (
                    <li key={index}>
                      <a href="" onClick={() => changeLanguage(lang)}>
                        {lang.toUpperCase()}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>

      <main className="mainContent">
        <section id="aboutBesoSectionContainer">
          <div id="aboutBesoSectionContent">
            <div className="leftSideContent">
              <h1>{t("about_beso")}</h1>
              <div className="leftSideParagraph">
                <p>{t("creation_beso")}</p>
                <p>{t("aims_beso")}</p>
                <p>{t("decisions")}</p>
                {/* <p>
                  Beso empowers entrepreneurs to make clearer decisions by means
                  of concise accounting, easy-to-use inventory management and
                  multi-currency tools with the ability to fully reconcile
                  against purchases, sales, income, and expenses that enable
                  instant insights into their financial position and forecast
                  into the future.
                </p> */}
                <p style={{ paddingBottom: "20px" }}>{t("future_plans")}</p>
              </div>
            </div>
            <div className="rightSideContent">
              <img src={images.main.aboutImage} alt="" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
