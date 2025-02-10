import React from "react";
import Footer from "../layout/footer";
import "../assets/Css/style.main.css";
import "../assets/Css/style.css";
import "../assets/Css/slider.css";
import besoHeader from "../assets/Images/header-images/besoHeader.svg";
import globus from "../assets/Images/header-images/globus.svg";
import ellipse2 from "../assets/Images/header-images/Ellipse 2.png";
import googlePlay from "../assets/Images/header-images/Mobile google play badge.svg";
import appStore from "../assets/Images/header-images/Mobile app store badge.svg";
import frame1321314596 from "../assets/Images/header-images/Frame 1321314596-min.png";
import imgForDesign from "../assets/Images/header-images/imgForDesign.png";
import outline from "../assets/Images/main-images/Outline.svg";
import antDesign from "../assets/Images/main-images/ant-design_ant-design-outlined.svg";
import icMobileFriendly from "../assets/Images/main-images/ic_baseline-mobile-friendly.svg";
import frame1321314556 from "../assets/Images/informationAppSectionImage/Frame 1321314556-min.png";
import iconoirPage from "../assets/Images/informationAppSectionImage/iconoir_page.svg";
import iconoirPage1 from "../assets/Images/informationAppSectionImage/iconoir_page (1).svg";
import iconoirPage2 from "../assets/Images/informationAppSectionImage/iconoir_page (2).svg";
import dashboardMin from "../assets/Images/slickSliderImages/Dashboard-min.png";
import getPaidMin from "../assets/Images/slickSliderImages/GetPaid-min.png";
import invoceMin from "../assets/Images/slickSliderImages/Invoce-min.png";
import investoryMin from "../assets/Images/slickSliderImages/Investory-min.png";
import payMin from "../assets/Images/slickSliderImages/Pay-min.png";
import frame1321314572 from "../assets/Images/slickSliderImages/Frame 1321314572.svg";
import frame1321314573 from "../assets/Images/slickSliderImages/Frame 1321314573.svg";
import iphone2 from "../assets/Images/fullScreenImageWithButton/iPhone 14 Pro (2).png";
import iphone3 from "../assets/Images/fullScreenImageWithButton/iPhone 14 Pro (3).png";

function Home() {
  return (
    <>
      <section id="headerAndContentSection">
        <div id="headerAndContentContainer">
          <header className="headerContent">
            <a href="index.html">
              <img src={besoHeader} alt="" />
            </a>
            <div className="headerRightSideLinks">
              <ul>
                <li>
                  <a href="">Administer your business</a>
                  <i
                    className="fa-solid fa-chevron-down down-icon"
                    style={{ color: "#ffffff" }}
                  ></i>
                </li>
                <li>
                  <a href="aboutBeso.html">About Beso</a>
                </li>
                <li>
                  <a href="investors.html">Investors</a>
                </li>
                <i className="dropDownIcon fa-solid fa-bars hamburgerIcon js-navbar-toogle"></i>
                <img
                  style={{ cursor: "pointer" }}
                  className="js-language-toggle"
                  src={globus}
                  alt=""
                />
              </ul>
              <div className="dropdownList hidden js-navbar-list">
                <div className="dropdownListContent">
                  <li>
                    <a href="">Administer your business</a>
                  </li>
                  <li>
                    <a href="aboutBeso.html">About Beso</a>
                  </li>
                  <li>
                    <a href="investors.html">Investors</a>
                  </li>
                </div>
              </div>
              <div className="globusdownList hidden js-language-list">
                <div className="languageListContent">
                  <li>
                    <a href="./azerbaijanLanguage/index.html">AZ</a>
                  </li>
                  <li>
                    <a href="./spanishLanguage/index.html">ES</a>
                  </li>
                  <li>
                    <a href="./turkishLanguage/index.html">TR</a>
                  </li>
                </div>
              </div>
            </div>
          </header>
          <section className="contentWithMobileImg">
            <div className="contentWithMobileImg-LeftSide">
              <img className="blur-left-side" src={ellipse2} alt="" />
              <div className="contentWithMobileImg-LeftSide-wordsAndLlinks">
                <h1>Managing your small business has never been so easy!</h1>
                <h5>
                  Track inventory, accounts, invoices and expenses digitally -
                  your small business, in your pocket
                </h5>
              </div>
              <div className="contentWithMobileImg-LeftSide-counts">
                <div>
                  <h2>10K+</h2>
                  <p>Users</p>
                </div>
                <div>
                  <h2>140+</h2>
                  <p>Currencies</p>
                </div>
                <div>
                  <h2>1M+</h2>
                  <p>Transactions</p>
                </div>
              </div>
              <div className="contentWithMobileImg-LeftSide-androidAndAppleButtons in-mobile-display-none">
                <a
                  className="ahref"
                  href="https://play.google.com/store/apps/details?id=com.beso.dev&pcampaignid=web_share"
                >
                  <img src={googlePlay} alt="" />
                </a>
                <a href="https://apps.apple.com/es/app/beso-mobile/id6449295813?l=en-GB">
                  <img src={appStore} alt="" />
                </a>
              </div>
            </div>
            <div className="contentWithMobileImg-rightSide">
              <img
                className="iphoneImageUnderHeader"
                src={frame1321314596}
                alt=""
              />
              <div className="contentWithMobileImg-LeftSide-androidAndAppleButtons in-web-display-none">
                <a
                  className="ahref"
                  href="https://play.google.com/store/apps/details?id=com.beso.dev"
                >
                  <img src={googlePlay} alt="" />
                </a>
                <a href="https://apps.apple.com/az/app/beso-mobile/id6449295813">
                  <img src={appStore} alt="" />
                </a>
              </div>
            </div>
          </section>
        </div>
        <img className="imgForDesignFirstSection" src={imgForDesign} alt="" />
      </section>
      {/* <!-- Section-with-header-content-end -->
  <!-- main-content-start --> */}
      <main className="mainContent">
        {/* <!-- why beso content start --> */}
        <section className="whyBesoContentSection">
          <div className="whyBesoContentContainer">
            <div className="whyBesoContent">
              <h1 className="animate card">Why Beso?</h1>
              <p className="animate card" style={{ "--i": 1 }}>
                Running a small business can be complex and for many it’s often
                still paper-based. Beso brings together inventory, receivables,
                payables, and invoicing in one easy-to-use app.
              </p>
            </div>
            <div className="whyBesoIconcontent">
              <div className="securityCard card animate" style={{ "--i": 2 }}>
                <img src={outline} alt="" />
                <h3>Security</h3>
                <p>
                  All your info on your cell phone, stored safely and securely.
                  No more risk of losing paper.
                </p>
              </div>
              <div className="designCard card animate" style={{ "--i": 3 }}>
                <img src={antDesign} alt="" />
                <h3>Design</h3>
                <p>
                  Monitor your finances quickly and easily - and automatically
                  send reminders, with digital, compliant e-invoicing coming
                  soon.
                </p>
              </div>
              <div
                className="userFriendlyCard card animate"
                style={{ "--i": 4 }}
              >
                <img src={icMobileFriendly} alt="" />
                <h3>User Friendly</h3>
                <p>
                  Crisp, clean, easy - with photo uploads for your inventory -
                  no more searching, no need to be an expert!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- why beso content end --> */}

        {/* <!-- how does this app work section start --> */}
        <section className="informationAbputaAppHowThisWork">
          <div className="howThisAppWorkContent">
            <h1>What does Beso Offer?</h1>
            <p>
              Beso offers small businesses essential accounting, inventory
              management and multi-currency tools with the ability to fully
              reconcile against purchases, sales, income, and expenses - all in
              one place, from your pocket.
            </p>
          </div>

          <div className="informationAppIconAndImage">
            <div className="informationCImageContent">
              <img style={{ width: "100%" }} src={frame1321314556} alt="" />
            </div>
            <div className="informationIconsContent">
              <div className="animate appcards" style={{ "--i": 0 }}>
                <img src={iconoirPage} alt="" />
                <h3>Register transactions in multiple currencies</h3>
                <p>
                  Register your sales, expenses and debts across 168 world
                  currencies, with accurate reconciliation on current and past
                  market conversion rates.
                </p>
              </div>
              <div className="animate appcards" style={{ "--i": 2 }}>
                <img src={iconoirPage1} alt="" />
                <h3>Keep track of inventory</h3>
                <p>
                  Track purchases and sales from inventory, with a photo upload
                  making it even easier to track.
                </p>
              </div>
              <div className="animate appcards" style={{ "--i": 1 }}>
                <img src={iconoirPage2} alt="" />
                <h3>Monitor your finances</h3>
                <p>
                  Keep instant, concise track of your finances, with the ability
                  to forecast and project coming soon. .
                </p>
              </div>
              <div className="animate appcards" style={{ "--i": 3 }}>
                <img src={iconoirPage2} alt="" />
                <h3>Analyze your Balances</h3>
                <p>
                  Instantly view, analyse your balance status over the past
                  week, month and year.
                </p>
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
            <h1>Welcome to Beso</h1>
            <p>
              A powerful tool for small business that enables entrepreneurs to
              reach their full potential - safely, easily, seamlessly...
            </p>
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
                      src={dashboardMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={getPaidMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={invoceMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={investoryMin}
                      alt="Tranding"
                    />
                  </div>
                  {/* <!-- Slide-end --> */}
                  {/* <!-- Slide-start --> */}
                  <div className="swiper-slide tranding-slide">
                    <img
                      style={{ objectFit: "contain" }}
                      src={payMin}
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
                        src={frame1321314572}
                        alt=""
                      />
                    </div>
                    <div className="swiperButtonNext">
                      <img
                        className="swiper-button-next"
                        src={frame1321314573}
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
                <h1>About Beso</h1>
                <p>
                  Beso was created with entrepreneurs in mind: overcoming the
                  main obstacles that we believe keeps them from reaching their
                  full potential. A lack of concise records and tools to enable
                  decisions constrains small businesses and prevents others from
                  supporting their growth. With Beso, we empower entrepreneurs
                  make clearer decisions, offering tools that enable access to
                  resources to help them grow, build a digital presence, and
                  access new channels to support their growth.
                </p>
                <a href="">Get Started</a>
              </div>
              <div className="rightsideWithtwoImage">
                <div className="firstBottomImage">
                  <img src={iphone2} alt="" />
                </div>
                <div className="secondTopImage">
                  <img src={iphone3} alt="" />
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
