import React, { useState } from "react";
import Footer from "../layout/footer";
import "../assets/Css/termsAndConditions.css";
import "../assets/Css/homePage.css";
import images from "../models/images.jsx";
import { useTranslation } from "react-i18next";

function TermsConditions() {
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
      <section id="headerAndContentSectionTerms">
        <div id="headerAndContentContainerTerms">
          <header className="headerContentTerms">
            <a href="/">
              <img src={images.header.besoIcon} alt="" />
            </a>
            <div className="headerRightSideLinksTerms">
              <ul>
                <li>
                  <a href="">{t("administer_business")}</a>
                  <i
                    className="fa-solid fa-chevron-down down-icon"
                    style={{ color: "#001C3D" }}
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
                  style={{ color: "#001C3D" }}
                ></i>
                <img
                  style={{ cursor: "pointer" }}
                  className="js-language-toggle"
                  src={images.header.globusBlue}
                  alt=""
                />
              </ul>
              <div className="dropdownList hidden js-navbar-list ">
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
              <div className="globusdownList hidden js-language-listTerms">
                <div className="languageListContentTerms">
                  {/* <li>
                    <a href="./termsandconditions.html">AZ</a>
                  </li>
                  <li>
                    <a href="./termsandconditions.html">ES</a>
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
      <main>
        <section className="termsACContainer">
          <div className="termsACContent">
            <div className="fisrtHeading">
              <div className="Basic-Pre-Contractual-Content">
                <h1>{t("contract_beso")}</h1>
                <p style={{ fontStyle: "italic" }}>{t("version")}</p>
              </div>
              <div className="fisrtHeadingContentWithDescriptions">
                <div className="Basic-Pre-contractual-Information">
                  <h1>{t("contract_info")}</h1>
                  <p>{t("document_beso")}</p>
                </div>
                <div className="name-and-Address">
                  <h1>{t("name_address_beso")}</h1>
                  <p>
                    {t("ozlo_incorporated")} <br />
                    {t("coastel")}
                    <br />
                    {t("lewes_de")} <br />
                    {t("usa")} <br />
                    {t("site_beso")} <br />
                    <br />
                    {t("state_delaware")}
                    <br />
                    <br />
                    {t("email_address")}
                    <br />
                    <br />
                    {t("herainafter")}
                  </p>
                </div>
                <div className="Legally-Authorised-representatives-of-Beso">
                  <h1>{t("legally_author")}</h1>
                  <p>{t("management_board")}</p>
                </div>
                <div className="Activity-of-Beso">
                  <h1>{t("activity_beso")}</h1>
                  <p>{t("main_activity")}</p>
                </div>
                <div className="Tax-Information">
                  <h1>{t("tax_information")}</h1>
                  <p>{t("tax_identification_number")}</p>
                </div>
              </div>
            </div>
            <div className="secondHeading">
              <div className="General-Terms-and-Conditions-of-Beso">
                <h1>{t("general_terms")}</h1>
              </div>

              <div className="Scope">
                <h1>{t("first_rule")}</h1>
                <p>
                  {t("first_textpart1")} <br />
                  <br />
                  {t("first_textpart2")}
                  <p>{t("first_textpart3")}</p>
                  <p style={{ paddingLeft: "110px", paddingTop: "5px" }}>
                    {t("first_textpart4")}
                  </p>
                </p>
              </div>
              <div className="Object-of-service theSameClasses">
                <h1>{t("second_rule")}</h1>
                <p>{t("second_textpart")}</p>
              </div>
              <div className="Terms theSameClasses">
                <h1>{t("third_rule")}</h1>
                <p>{t("third_textpart")}</p>
              </div>
              <div className="Terms theSameClasses">
                <h1>{t("fourth_rule")}</h1>
                <p>{t("fourth_textpart")}</p>
              </div>
              <div className="Applicable-law/court-of-jurisdiction theSameClasses">
                <h1>{t("fifth_rule")}</h1>
                <p>{t("fifth_textpart")}</p>
              </div>
              <div className="Information-and-language of contract/text of the contract theSameClasses">
                <h1>{t("sixth_rule")}</h1>
                <p>{t("sixth_textpart")}</p>
              </div>
              <div className="Service-Proviso theSameClasses">
                <h1>{t("seventh_rule")}</h1>
                <p>{t("seventh_textpart")}</p>
              </div>
              <div className="Requirements-and-Supported-Smartphones theSameClasses">
                <h1>{t("eighth_rule")}</h1>
                <p>{t("eighth_textpart1")}</p>
                <br />
                <p>{t("eighth_textpart2")}</p>
                <ul>
                  <li>{t("successfully_register")}</li>
                  <li>{t("prior_registration")}</li>
                  <li>{t("confirm_phonenumber")}</li>
                  <li>{t("fourdigit_number")}</li>
                </ul>
                <p>{t("enter_Code")}</p>

                <ul>
                  <li>{t("complete_register")}</li>
                  <li>{t("date_of_birth")}</li>
                  <li>{t("postal_Code")}</li>
                  <li>{t("repeat_number")}</li>
                  <li>{t("number_series")}</li>
                </ul>
              </div>
              <div className="Disclosure theSameClasses">
                <h1>{t("nineth_rule")}</h1>
                <p>
                  {t("nineth_textpart1")}
                  <br />
                  <br />
                  {t("nineth_textpart2")}
                </p>
              </div>
              <div className="Storage theSameClasses">
                <h1>{t("tenth_rule")}</h1>
                <p>{t("tenth_textpart")}</p>
              </div>
              <div className="Intellectual-Property theSameClasses">
                <h1>{t("eleventh_rule")}</h1>
                <p>{t("eleventh_textpart")}</p>
              </div>
              <div className="Exclusivity theSameClasses">
                <h1>{t("twelfth_rule")}</h1>
                <p>{t("twelfth_textpart")}</p>
              </div>
              <div className="Reasonable-Use theSameClasses">
                <h1>{t("thirteenth_rule")}</h1>
                <p>{t("thirteenth_textpart")}</p>
              </div>
              <div className="Duties-of-the-User theSameClasses">
                <h1>{t("fourteenth_rule")}</h1>
                <p>{t("fourteenth_textpart")}</p>
              </div>
              <div className="Data-Protection theSameClasses">
                <h1>{t("fifteenth_rule")}</h1>
                <p>{t("fifteenth_textpart1")}</p>
                <br />
                <p>{t("fifteenth_textpart2")}</p>
              </div>
              <div className="Collection,-Processing-and-Use-of-your-Personal-Data theSameClasses">
                <h1>{t("sixteenth_rule")}</h1>
                <p>{t("sixteenth_textpart")}</p>
              </div>
              <div className="Purchase-of-the-App theSameClasses">
                <h1>{t("seventeenth_rule")}</h1>
                <p>{t("seventeenth_textpart")}</p>
              </div>
              <div className="Handling and review of your data; Right to Information; Questions on Data Protection theSameClasses">
                <h1>{t("eightteenth_rule")}</h1>
                <p>{t("eightteenth_textpart1")}</p> <br />
                <p>{t("eightteenth_textpart2")}</p>
              </div>
              <div className="Collection of Personal Data theSameClasses">
                <h1>{t("nineteenth_rule")}</h1>
                <p>{t("nineteenth_textpart")}</p>
              </div>
              <div className="Termination right of Beso theSameClasses">
                <h1>{t("twentieth_rule")}</h1>
                <p>{t("twentieth_textpart")}</p>
              </div>
              <div className="Liability theSameClasses">
                <h1>{t("twentyfirst_rule")}</h1>
                <p>{t("twentyfirst_textpart")}</p>
              </div>
              <div className="Breach-of-duties theSameClasses">
                <h1>{t("twentysecond_rule")}</h1>
                <p>{t("twentysecond_textpart")}</p>
              </div>
              <div className="Limitation-of-liability theSameClasses">
                <h1>{t("twentythird_rule")}</h1>
                <p>{t("twentythird_textpart")}</p>
              </div>
              <div className="Set-off theSameClasses">
                <h1>{t("twentyfourth_rule")}</h1>
                <p>{t("twentyfourth_textpart")}</p>
              </div>
              <div className="Changes-to-Terms-and-Conditions theSameClasses">
                <h1>{t("twentyfifth_rule")}</h1>
                <p>{t("twentyfifth_textpart")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default TermsConditions;
