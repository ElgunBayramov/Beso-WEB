import React, { useState } from "react";
import Footer from "../layout/footer";
import "../assets/Css/investors.css";
import "../assets/Css/homePage.css";
import images from "../models/images.jsx";
import { useTranslation } from "react-i18next";

function Investors() {
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
      <section id="headerAndContentSectionInvestor">
        <div id="headerAndContentContainerInvestor">
          <header className="headerContentInvestor">
            <a href="/">
              <img src={images.header.besoIcon} alt="" />
            </a>
            <div className="headerRightSideLinksInvestor">
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
              <div className="globusdownList hidden js-language-listInvestor">
                <div className="languageListContentInvestor">
                  {/* <li>
                    <a href="./azerbaijanLanguage/investors.html">AZ</a>
                  </li>
                  <li>
                    <a href="./spanishLanguage/investors.html">ES</a>
                  </li>
                  <li>
                    <a href="./turkishLanguage/investors.html">TR</a>
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
      <main className="mainContet">
        <section className="investorsSectionContainer">
          <div className="investorsSectionContent">
            <div className="heading">
              <h1>{t("investors")}</h1>
            </div>
            <div className="text">
              <p>{t("funding_beso")}</p>
              <p>{t("contact_beso")}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Investors;
