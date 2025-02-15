import React, { useEffect, useState } from "react";
import Footer from "../layout/footer";
import "../assets/Css/style.css";
import "../assets/Css/homePage.css";
import "../assets/Css/slider.css";
import images from "../models/images.jsx";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Home() {
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
      <section id="headerAndContentSection">
        <div id="headerAndContentContainer">
          <header className="headerContent">
            <a href="/">
              <img src={images.header.besoHeader} alt="" />
            </a>
            <div className="headerRightSideLinks">
              <ul>
                <li>
                  <a href="">{t("administer_business")}</a>
                  <i
                    className="fa-solid fa-chevron-down down-icon"
                    style={{ color: "#ffffff" }}
                  ></i>
                </li>
                <li>
                  <a href="/about">{t("about_beso")}</a>
                </li>
                <li>
                  <a href="/investors">{t("investors")}</a>
                </li>
                <i className="dropDownIcon fa-solid fa-bars hamburgerIcon js-navbar-toogle"></i>
                <img
                  style={{ cursor: "pointer" }}
                  className="js-language-toggle"
                  src={images.header.globus}
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
              <div className="globusdownList hidden js-language-list">
                <div className="languageListContent">
                  {/* <li>
                    <button onClick={() => changeLanguage("az")}>AZ</button>
                  </li>
                  <li>
                    <button onClick={() => changeLanguage("es")}>ES</button>
                  </li>
                  <li>
                    <button onClick={() => changeLanguage("tr")}>TR</button>
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
          <section className="contentWithMobileImg">
            <div className="contentWithMobileImg-LeftSide">
              <img
                className="blur-left-side"
                src={images.header.ellipse2}
                alt=""
              />
              <div className="contentWithMobileImg-LeftSide-wordsAndLlinks">
                <h1>{t("manage_business")}</h1>
                <h5>{t("track_investory")}</h5>
              </div>
              <div className="contentWithMobileImg-LeftSide-counts">
                <div>
                  <h2>10K+</h2>
                  <p>{t("users")}</p>
                </div>
                <div>
                  <h2>140+</h2>
                  <p>{t("currencies")}</p>
                </div>
                <div>
                  <h2>1M+</h2>
                  <p>{t("transactions")}</p>
                </div>
              </div>
              <div className="contentWithMobileImg-LeftSide-androidAndAppleButtons in-mobile-display-none">
                <a
                  className="ahref"
                  href="https://play.google.com/store/apps/details?id=com.beso.dev&pcampaignid=web_share"
                >
                  <img src={images.header.googlePlay} alt="" />
                </a>
                <a href="https://apps.apple.com/es/app/beso-mobile/id6449295813?l=en-GB">
                  <img src={images.header.appStore} alt="" />
                </a>
              </div>
            </div>
            <div className="contentWithMobileImg-rightSide">
              <img
                className="iphoneImageUnderHeader"
                src={images.header.frame1321314596}
                alt=""
              />
              <div className="contentWithMobileImg-LeftSide-androidAndAppleButtons in-web-display-none">
                <a
                  className="ahref"
                  href="https://play.google.com/store/apps/details?id=com.beso.dev"
                >
                  <img src={images.header.googlePlay} alt="" />
                </a>
                <a href="https://apps.apple.com/az/app/beso-mobile/id6449295813">
                  <img src={images.header.appStore} alt="" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <img
          className="imgForDesignFirstSection"
          src={images.header.imgForDesign}
          alt=""
        />
      </section>
      {/* <!-- Section-with-header-content-end -->
  <!-- main-content-start --> */}
      <main className="mainContent">
        {/* <!-- why beso content start --> */}
        <section className="whyBesoContentSection">
          <div className="whyBesoContentContainer">
            <div className="whyBesoContent">
              <h1 className="animate card">{t("why_beso")}</h1>
              <p className="animate card" style={{ "--i": 1 }}>
                {t("run_business")}
              </p>
            </div>
            <div className="whyBesoIconcontent">
              <div className="securityCard card animate" style={{ "--i": 2 }}>
                <img src={images.main.outline} alt="" />
                <h3>{t("security")}</h3>
                <p>{t("info_sec")}</p>
              </div>
              <div className="designCard card animate" style={{ "--i": 3 }}>
                <img src={images.main.antDesign} alt="" />
                <h3>{t("design")}</h3>
                <p>{t("info_design")}</p>
              </div>
              <div
                className="userFriendlyCard card animate"
                style={{ "--i": 4 }}
              >
                <img src={images.main.icMobileFriendly} alt="" />
                <h3>{t("user_friendly")}</h3>
                <p>{t("info_userfriendly")}</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- why beso content end --> */}

        {/* <!-- how does this app work section start --> */}
        <section className="informationAbputaAppHowThisWork">
          <div className="howThisAppWorkContent">
            <h1>{t("offer_beso")}</h1>
            <p>{t("offer_besoinfo")}</p>
          </div>

          <div className="informationAppIconAndImage">
            <div className="informationCImageContent">
              <img
                style={{ width: "100%" }}
                src={images.informationApp.frame1321314556}
                alt=""
              />
            </div>
            <div className="informationIconsContent">
              <div className="animate appcards" style={{ "--i": 0 }}>
                <img src={images.informationApp.iconoirPage} alt="" />
                <h3>{t("register_transaction")}</h3>
                <p>{t("info_transaction")}</p>
              </div>
              <div className="animate appcards" style={{ "--i": 2 }}>
                <img src={images.informationApp.iconoirPage1} alt="" />
                <h3>{t("track_inventory")}</h3>
                <p>{t("info_track")}</p>
              </div>
              <div className="animate appcards" style={{ "--i": 1 }}>
                <img src={images.informationApp.iconoirPage2} alt="" />
                <h3>{t("monitor_finance")}</h3>
                <p>{t("info_monitoring")}</p>
              </div>
              <div className="animate appcards" style={{ "--i": 3 }}>
                <img src={images.informationApp.iconoirPage2} alt="" />
                <h3>{t("analyze_balance")}</h3>
                <p>{t("info_analyzing")}</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- how does this app work section end --> */}

        {/* <!-- Screenshots section start with slick slider --> */}
        <section
          className="screenshotsSlickSliderContent"
          style={{ overflow: "hidden" }}
        >
          <div className="screenshotsContent">
            <h1>{t("welcome_beso")}</h1>
            <p>{t("powerful_tool")}</p>
          </div>
          {/* <!-- slider start --> */}
          <section id="tranding">
            <div className="container">
              <div className="swiper tranding-slider">
                <div className="blackScreen">
                  {/* <!-- <img src="assets/Images/slickSliderImages/Group 3.png" alt=""> --> */}
                </div>
                <div className="swiper-wrapper">
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.slickSlider.dashboardMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.slickSlider.getPaidMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.slickSlider.invoceMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.slickSlider.investoryMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={images.slickSlider.payMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                </div>
                <div
                  style={{ paddingTop: "170px" }}
                  className="tranding-slider-control"
                >
                  <div className="buttonsPrevandNextContentContainer">
                    <div className="swiperButtonPrev">
                      <img
                        className="swiper-button-prev"
                        src={images.slickSlider.frame1321314572}
                        alt=""
                      />
                    </div>
                    <div className="swiperButtonNext">
                      <img
                        className="swiper-button-next"
                        src={images.slickSlider.frame1321314573}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- slider end --> */}
        </section>
        {/* <!-- Screenshots section start with slick end --> */}

        {/* <!-- section with full image about beso app--> */}
        <section className="sectionWIthFullImage">
          <div className="containerSectionWIthFullImage">
            <div className="SectionWIthFullImageContentBackGround">
              <div className="leftsideWithButtonGetstarted">
                <h1>{t("about_beso")}</h1>
                <p>{t("textfield_beso")}</p>
                <a href="">{t("get_started")}</a>
              </div>
              <div className="rightsideWithtwoImage">
                <div className="firstBottomImage">
                  <img src={images.fullScreen.iphone2} alt="" />
                </div>
                <div className="secondTopImage">
                  <img src={images.fullScreen.iphone3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default Home;
