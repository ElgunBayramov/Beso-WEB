import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // ?-------------------- Main Page---------------------
          administer_business: "Administer your business",
          about_beso: "About Beso",
          investors: "Investors",
          manage_business:
            "Managing your small business has never been so easy!",
          track_investory:
            "Track inventory, accounts, invoices and expenses digitally - your small business, in your pocket",
          users: "Users",
          currencies: "Currencies",
          transactions: "Transactions",
          why_beso: "Why Beso?",
          run_business:
            "Running a small business can be complex and for many it’s often still paper-based. Beso brings together inventory, receivables, payables, and invoicing in one easy-to-use app.",
          security: "Security",
          info_sec:
            "All your info on your cell phone, stored safely and securely. No more risk of losing paper.",
          design: "Design",
          info_design:
            "Monitor your finances quickly and easily - and automatically send reminders, with digital, compliant e-invoicing coming soon.",
          user_friendly: "User Friendly",
          info_userfriendly:
            "Crisp, clean, easy - with photo uploads for your inventory - no more searching, no need to be an expert!",
          offer_beso: "What does Beso Offer?",
          offer_besoinfo:
            "Beso offers small businesses essential accounting, inventory management and multi-currency tools with the ability to fully reconcile against purchases, sales, income, and expenses - all in one place, from your pocket.",
          register_transaction: "Register transactions in multiple currencies",
          info_transaction:
            "Register your sales, expenses and debts across 168 world currencies, with accurate reconciliation on current and past market conversion rates.",
          track_inventory: "Keep track of inventory",
          info_track:
            "Track purchases and sales from inventory, with a photo upload making it even easier to track.",
          monitor_finance: "Monitor your finances",
          info_monitoring:
            " Keep instant, concise track of your finances, with the ability to forecast and project coming soon.",
          analyze_balance: "Analyze your Balances",
          info_analyzing:
            "Instantly view, analyse your balance status over the past week, month and year.",
          welcome_beso: "Welcome to Beso",
          powerful_tool:
            "A powerful tool for small business that enables entrepreneurs to reach their full potential - safely, easily, seamlessly...",
          textfield_beso:
            "Beso was created with entrepreneurs in mind: overcoming the main obstacles that we believe keeps them from reaching their full potential. A lack of concise records and tools to enable decisions constrains small businesses and prevents others from supporting their growth. With Beso, we empower entrepreneurs make clearer decisions, offering tools that enable access to resources to help them grow, build a digital presence, and access new channels to support their growth.",
          get_started: "Get Started",
          // ? -------------------About page---------------------
          creation_beso:
            "Beso was created with entrepreneurs in mind: overcoming the main obstacles that we believe keep entrepreneurs from reaching their full potential.",
          aims_beso:
            "A lack of concise records and tools to enable decisions constrains small businesses and prevents others from supporting their growth.",
          decisions:
            "Beso empowers entrepreneurs to make clearer decisions by means of clear, concise accounting tools, easy-to-use inventory management tools, with the ability to fully reconcile purchases, sales, income and expenses.",
          future_plans:
            "We aim to empower entrepreneurs to reach their full potential, and create a basis by which they can access resources, build a digital presence, to support their growth and reach their full potential.",
          // ?------------------ Investors Page -------------------
          investors: "Investors",
          funding_beso:
            "Beso is currently seeking seed funding to support its growth",
          contact_beso:
            "For a full investment prospectus please email invest@beso.dev",
          // ?------------------ TermsAndConditions -------------------
          contract_beso: "Basic Pre-Contractual Information for Beso",
          version: "(version 1.1, date: October 15th 2023)",
          contract_info: "Basic Pre-contractual Information",
          document_beso:
            "This document is for basic pre-contractual information via electronic means. (Version 1.1, Date: 16.10.2023) and is integrally paired with the Privacy and Data Retention Policy, form the general Terms and Conditions (also called “T&Cs”) for the Beso application and associated website.",
          name_address_beso: "Name and Address of Ozla, Inc dba “Beso”",
          ozlo_incorporated: "Ozla Incorporated",
          coastel: "16192 Coastal Hwy",
          lewes_de: "Lewes DE 19958",
          usa: "United States of America",
          site_beso: "www.beso.dev",
          state_delaware:
            "Incorporated in the State of Delaware with business registration number 7101678.",
          email_address: "Email: info@beso.dev",
          herainafter: "Hereinafter referred to as “Beso”.",
          legally_author: "Legally Authorised representatives of Beso",
          management_board:
            "(Management Board) Oliver van der Meer and Zaur Alakbarov",
          activity_beso: "Activity of Beso",
          main_activity:
            "The main activity of Beso it to provide basic accounting and general ledger tools for small business and sole proprietors.",
          tax_information: "Tax information",
          tax_identification_number:
            "Tax identification number (EIN) 32-0706702, United States of America.",
          general_terms: "General-Terms-and-Conditions-of-Beso",
          first_rule: "1. Scope",
          first_textpart1:
            "These terms and conditions form an integral part of the Beso application.These General Terms and Conditions (“T&Cs”) are applicable for all the services of Beso (“Beso”,“we”), which you (“End user”, “You”) can use via the application of the mobile App named “Beso” (“App”) or via the online interface provided by Ozla, Inc. that can be accessed under on the Apple i-store or GooglePlay (“Online Interface”).",
          first_textpart2:
            " Additionally, the following conditions are also applicable, insofar as they do not contradict the provisions of",
          first_textpart3: "these General Terms and Conditions.",
          first_textpart4: "Basic pre-contractual information",
          second_rule: "2. Object of service",
          second_textpart:
            " The object of service is the maintenance of a basic accounting and inventory management serices and the provision of a virtual Beso storage (“Account”). This service becomes active as soon as you accept these T&Cs. You can operate and manage the account via the end Customer interfaces. The prerequisite is a smartphone that is linked to the account, which fulfils the respective minimum requirements for the operating system (IOS/Android) and our Beso app version. (Currently supported versions and further information can be found in the Beso Website). Due to security reasons we are forced to discontinue our service for any out-dated versions of the respective operating system and out-dated versions of the Beso app version. We will notify you eight weeks before we stop supporting a version of the respective operating system and invite you to update your software during that period of time.",
          third_rule: "3. Terms",
          third_textpart:
            " Your Beso account has an indefinite contractual term, unless terminated by the user.",
          fourth_rule: "4. Prices",
          fourth_textpart:
            "The services offered by Beso are at no charge to users",
          fifth_rule: "5. Applicable law/court of jurisdiction",
          fifth_textpart:
            "State of Delaware law is applicable for the business relationship between you and Beso. Beso is also subject to the law of the United States of America for the pre-contractual relation. There is no contractual clause stipulating jurisdiction.",
          sixth_rule:
            " 6. Information and language of contract/text of the contract",
          sixth_textpart:
            " The governing language for this contractual relationship and the communication between you and Beso during the period of the contract is English.",
          seventh_rule: "7. Service Proviso",
          seventh_textpart:
            " There is no service proviso, unless explicitly agreed.",
          eighth_rule: "8. Requirements and Supported Smartphones",
          eighth_textpart1:
            " In order to use your Beso account, you need an associated smartphone. Since your smartphone is used as a personal authentication device, only one phone at a time may be connected to your account. For security reasons, the associated smartphone may also be required to verify logins from other devices. Please note that your device is meeting the respective minimum requirements for the operating system (iOS / Android) and the Beso app. Due to security reasons we are forced to discontinue our service for any out-dated versions of the respective operating system and out-dated versions of the BESO app version. We will notify you eight weeks before we stop supporting a version of the respective operating system in case this disables you to use the Beso App and invite you to update your software during that period of time.",
          eighth_textpart2:
            "In addition to essential features, such as viewing your transactions and settings, the following features are only available on your associated smartphone:",
          successfully_register:
            "Successfully completing registration with Beso",
          prior_registration:
            "Your association requires prior registration in the corresponding app-store. After installing the app, you will be automatically taken through all the necessary steps to associate your smartphone:",
          confirm_phonenumber: "Confirm your telephone number",
          fourdigit_number: "Receive a four-digit code via SMS",
          enter_Code:
            " Enter the code in the app to complete the association If the phone number displayed during the association is not correct, or if you do not receive the SMS association code despite the phone number being correct, please contact the Help desk or info@beso.dev.",
          complete_register:
            "Completing the registration with Beso requires agreement to these general terms and conditions.",
          date_of_birth: "PINs containing parts of your date of birth",
          postal_Code:
            "PINs containing parts of your address, such as your postal code",
          repeat_number: "Repetitions of numbers, such as 1111",
          number_series:
            "Number series, such as 1234 If your desire PIN is not accepted, please try another combination.",
          nineth_rule: "9. Disclosure and Notification Obligations",
          nineth_textpart1:
            "You are obliged to correctly notify us regarding your personal data, in particular your name, address, date of birth, phone number and email address and provide prompt information to us about any changes to this end.",
          nineth_textpart2:
            " Immediately inform us regarding a loss or theft of your authentication instrument, your personalised safety features or a misuse or unauthorised use of the same. Please email info@beso.dev.",
          tenth_rule: "10. Storage",
          tenth_textpart:
            "Your contract with us will be concluded in German. You have the opportunity to call up the contractual provisions, inclusive of these Supplementary Provisions, when concluding the contract, and to store them in reproducible form. No separate storage of the contract text will be done by us.",
          eleventh_rule: "11. Intellectual Property",
          eleventh_textpart:
            " The App as well as the Online Interface is protected by the intellectual property laws, such as copyright law and trademark law. These rights in relation to you are exclusively reserved to us.",
          twelfth_rule: "12. Exclusivity",
          twelfth_textpart:
            "We grant you, exclusively to fulfil the purpose of our contractual relationship with you, the limited, non-exclusive, non-transferable and sub-licensable right, restricted to the period of your contractual relationship with us, to use the App and the Online Interface in accordance with the provisions. The right of use expires upon expiration of the term of the contract.",
          thirteenth_rule: "13. Reasonable Use",
          thirteenth_textpart:
            " The User is not entitled to (i) rent, lease, lend, reproduce, resell or distribute the App or the Online Interface, or access to them; (ii) use the App or the Online Interface for the development of other services; (iii) activate or use the functionalities of the App or the Online Interface for which no rights of use have been granted to him or her; (iv) assign the usage rights to the App or the Online Interface to third parties, or grant third parties access to the App or the Online Interface; (v) alter, translate, reproduce, or decompile the source code of the App or of the Online Interface, or investigate the functions thereof, outside of what may be legally mandatory in accordance with copyright law ; and (vi) remove, conceal or alter legal information, in particular concerning industrial property rights or copyrights of Beso.",
          fourteenth_rule: "14. Duties of the User",
          fourteenth_textpart:
            "When using the App or the Online Interface, you are not allowed to perform any illegal actions or breach any applicable laws, in particular not to do the following: infringe industrial property rights, copyrights or intellectual rights of third parties; in your usage behaviour, make defamatory, racist or offensive statements, or undertake such actions; transmit contents which contain viruses, Trojan horses, spyware, adware, malware or other damaging or harmful programmes; distribute unwanted advertising (spam) or any other form of nuisance.",
          fifteenth_rule: "15. Data Protection",
          fifteenth_textpart1:
            " The responsible authority for the processing of your personal data in connection with the App and the Online Interface and their usages is Beso.",
          fifteenth_textpart2:
            " Beso has a Data Protection Officer in place according to European Data Protection rules and may be reached at data@beso.dev. Futher information on privacy and data retention can be found in the Privacy and Data Retention Policy which forms an integral part of these T&Cs.",
          sixteenth_rule:
            "16. Collection, Processing and Use of your Personal Data",
          sixteenth_textpart:
            " We collect, process and use your personal data in harmony with the applicable statutory provisions. All of the personal data collected, processed, and used under our responsibility are stored exclusively for the purpose of fulfilling our contractual relationship with you, and not longer than is required for this purpose. Expanded privacy and data retention terms may be found in the Privacy and Data Retention Policy document, which forms and integral part of these T&Cs.",
          seventeenth_rule: "17. Purchase of the App",
          seventeenth_textpart:
            "The App is dependent on the smartphone used by you which is obtainable over third-party sales platforms (“app stores”). Your purchase presupposes a prior registration in the app store concerned. We have no influence on the collection, processing and use of personal data by the relevant app store operator. These are the only responsible authorities in this regard.",
          eightteenth_rule:
            " 18. Handling and review of your data; Right to Information; Questions on Data Protection",
          eightteenth_textpart1:
            "At any time, you can view your personal data in the App or in the Online Interface. You can also subsequently change your own password. In order to modify or change further personal data, please get in touch with our Customer Support department: support@beso.dev",
          eightteenth_textpart2:
            "Further, you can at any time demand information about the personal data stored which relates to you personally, as well as its origin and recipients and the purpose for which it is being stored. You can reach us using the aforementioned contact data. Questions, suggestions and notes on data protection can also be directed to data@beso.dev.",
          nineteenth_rule: "19. Collection of Personal Data",
          nineteenth_textpart:
            "For the collection, use and processing of personal data, the Beso Data Policy applies.",
          twentieth_rule: "20. Termination right of Beso",
          twentieth_textpart:
            "The right to terminate this contract are deemed to have been agreed by the approval of these T&Cs.",
          twentyfirst_rule: "21. Liability",
          twentyfirst_textpart:
            "We shall be liable without restriction for damages arising from injury to life, limb or health, which rests on a breach of duty by us, a legal representative, or auxiliary of us, which are caused by the absence of guaranteed quality by us or malicious behaviour on the part of us, as well as for damages that were caused by premeditation or gross negligence on the part of us or of a legal representative or auxiliary of us.",
          twentysecond_rule: "22. Breach of duties",
          twentysecond_textpart:
            "We shall not be held liable for any actions except gross negligence, limited to foreseeable damages under this contract. Significant contractual duties are abstractly those duties whose fulfilment makes it possible in the first place to implement a contract in orderly fashion, and upon whose observance the contractual parties may regularly rely.",
          twentythird_rule: "23. Limitation of liability",
          twentythird_textpart:
            "All liability pursued or incurred on the part of Beso is excluded.",
          twentyfourth_rule: "24. Set-off",
          twentyfourth_textpart:
            "You can only set off our claims with undisputed or legally established counter-claims.",
          twentyfifth_rule: "25. Changes to Terms an Conditions",
          twentyfifth_textpart:
            " We will inform you about an amendment in these T&Cs before the time at which the amendments become effective by email (“amendment offer”). The amendment offer shall only become effective upon the Customer’s consent, or a stipulated legal date, whichever occurs earlier.",

          // * -------------------- Footer ---------------------
          beso: "Beso",
          footer_infobeso:
            "Small businesses play an outsized role in economies worldwide, where the vast majority still keep paper records and have no digital presence. Beso is here to help those entrepreneurs reach their full potential",
          quick_links: "Quick Links",
          home: "Home",
          privacy_policy: "Privacy Policy",
          terms_conditions: "Terms & Conditions",
          about_us: "About Us",
          meet_team: "Meet the Team",
          our_story: "Our Story",
          career: "Career",
          contact: "Contacts",
          follow_us: "Follow us",
          copyright: "Copyright Beso @ 2024. All rights reserved.",
        },
      },
      az: {
        translation: {
          // ?-------------------- Main Page---------------------
          administer_business: "Biznesinizi idarə edin",
          about_beso: "Beso haqqında",
          investors: "Investorlar",
          manage_business: "Biznesi idarə etmək heç vaxt belə asan olmayıb!",
          track_investory:
            "Ehtiyatların, hesabınızı, fakturaların və xərclərin rəqəmsal izlənməsi - kiçik biznesiniz cibinizdə",
          users: "İstifadəçi",
          currencies: "Valyuta",
          transactions: "Əməliyyat",
          why_beso: "Niyə Beso?",
          run_business:
            "Kiçik biznesi idarə etmək mürəkkəb ola bilər və bir çoxları üçün çox vaxt hələ də kağız üzərində işləyir. Beso inventar, debitor borcları, kreditor borcları və hesab-fakturaları istifadəsi asan bir proqramda bir araya gətirir, qeydlərə imkan verir və kiçik biznesə tam potensialını həyata keçirməyə imkan verir.",
          security: "Təhlükəsizlik",
          info_sec:
            " Mobil cihazınızda bütün məlumatlarınız təhlükəsiz və etibarlı şəkildə saxlanılır.",
          design: "Rəqəmsal",
          info_design:
            "Tez və asanlıqla maliyyənizə nəzarət edin - rəqəmsal e-qaimə-faktura ilə avtomatik xatırlatmalar göndərin.",
          user_friendly: "Istifadəçi yönümlü",
          info_userfriendly:
            "Xırtıldayan, təmiz, asan - inventarınız üçün foto yükləmələri ilə - artıq axtarışa, ekspert olmağa ehtiyac yoxdur!",
          offer_beso: "Beso nə təklif edir?",
          offer_besoinfo:
            "Beso kiçik bizneslərə əsas mühasibat uçotu, inventar idarəçiliyi və çoxvalyuta alətləri təklif edir - hamısını cibinizdən bir yerdə, alış, satış, gəlir və xərclərlə tam uyğunlaşdırmaq imkanı.",
          register_transaction: "Çox valyutada əməliyyatları qeyd edin",
          info_transaction:
            "168 dünya valyutası üzrə satışlarınızı, xərclərinizi və borclarınızı cari və keçmiş bazar konvertasiya dərəcələri ilə dəqiq tutuşdurmaqla qeyd edin.",
          track_inventory: "Məhsullarınıza nəzarət edin",
          info_track:
            "İzləməni daha da asanlaşdıran foto yükləmə ilə əşyanın alış və satışlarını izləyin.",
          monitor_finance: "Maliyyənizə nəzarət edin",
          info_monitoring:
            "  “Tezliklə proqnozlaşdırmaq və layihələndirmək imkanı ilə maliyyə vəziyyətinizi anında, qısa şəkildə izləyin.”",
          analyze_balance: "Balanslarınızı təhlil edin",
          info_analyzing:
            "Keçən həftə, ay və il ərzində balans vəziyyətinizə dərhal baxın, təhlil edin",
          welcome_beso: "Beso’ya xoş gəlmisiniz",
          powerful_tool:
            "Sahibkarlara tam potensiallarına çatmağa imkan verən kiçik biznes üçün güclü alət - təhlükəsiz, asanlıqla, problemsiz...",
          textfield_beso:
            "Beso sahibkarlar nəzərə alınmaqla yaradılmışdır: inandığımız əsas maneələri aradan qaldırmaq onların tam potensiallarına çatmasına mane olur. Qərarlar qəbul etmək üçün qısa qeydlərin və vasitələrin olmaması kiçik biznesi məhdudlaşdırır və başqalarının onların böyüməsini dəstəkləməsinə mane olur. Beso ilə biz sahibkarlara daha aydın qərarlar vermək səlahiyyəti veririk, onların böyüməsinə, rəqəmsal mövcudluğun qurulmasına və böyümələrini dəstəkləmək üçün yeni kanallara çıxışa kömək etmək üçün resurslara çıxış imkanı verən alətlər təklif edirik.",
          get_started: "Başla",
          // ? -------------------About page---------------------
          creation_beso:
            "Beso sahibkarlar nəzərə alınmaqla yaradılmışdır: sahibkarların tam potensiallarına çatmasına mane olduğuna inandığımız əsas maneələri aradan qaldırmaq üçün.",
          aims_beso:
            "Qərarların qəbulunu asanlaşdırmaq üçün qısa qeydlərin və vasitələrin olmaması kiçik biznesə mane olur və başqalarının onların böyüməsini dəstəkləməsinə mane olur.",
          decisions:
            "Beso sahibkarlara aydın, qısa mühasibat uçotu alətləri, istifadəsi asan inventar idarəetmə alətləri və alış, satış, gəlir və xərcləri tam uyğunlaşdırmaq bacarığı vasitəsilə daha aydın qərarlar qəbul etməyə imkan verir.",
          future_plans:
            "Biz sahibkarlara resurslara çıxış əldə edə, rəqəmsal mövcudluq yarada, böyümələrini dəstəkləyə və tam potensiallarına çata biləcəkləri bir zəmin yaradaraq, onların tam potensialına çatmağa imkan yaratmağı hədəfləyirik.",
          // ?------------------ Investors Page -------------------
          investors: "Investorlar",
          funding_beso:
            "Beso hazırda böyüməsini dəstəkləmək üçün toxum maliyyəsi axtarır",
          contact_beso:
            "Tam investisiya prospekti üçün invest@beso.dev elektron poçtuna müraciət edin",
          // ?------------------ TermsAndConditions -------------------
          contract_beso: "Beso üçün Müqaviləqabağı Əsas Məlumat",
          version: "(versiya 1.1, tarix: 15 oktyabr 2023-cü il)",
          contract_info: "Müqavilədən əvvəl əsas məlumatlar",
          document_beso:
            "Bu sənəd elektron vasitələr vasitəsilə müqavilədən əvvəlki əsas məlumatlar üçündür. (Versiya 1.1, Tarix: 16.10.2023) və Məxfilik və Məlumatların Saxlanması Siyasəti ilə ayrılmaz şəkildə birləşdirilir, Beso tətbiqi və əlaqəli vebsayt üçün ümumi Şərtlər və Şərtləri (həmçinin “Şərq və Şərtlər” adlanır) təşkil edir.",
          name_address_beso: "Ozla, Inc dba “Beso” şirkətinin adı və ünvanı",
          ozlo_incorporated: "Ozla Incorporated",
          coastel: "16192 Coastal Hwy",
          lewes_de: "Lewes DE 19958",
          usa: "Amerika Birləşmiş Ştatları",
          site_beso: "www.beso.dev",
          state_delaware:
            "7101678 biznes qeydiyyat nömrəsi ilə Delaver Ştatına daxil edilmişdir.",
          email_address: "E-poçt: info@beso.dev",
          herainafter: "Bundan sonra “Beso” adlandırılacaq.",
          legally_author: "Beso-nun Qanuni Səlahiyyətli nümayəndələri",
          management_board:
            "(İdarə Heyəti) Oliver van der Meer və Zaur Ələkbərov",
          activity_beso: "Beso fəaliyyəti",
          main_activity:
            "Beso it-in əsas fəaliyyəti kiçik biznes və fərdi sahibkarlar üçün əsas mühasibat uçotu və baş kitab alətlərini təmin etməkdir.",
          tax_information: "Vergi məlumatı",
          tax_identification_number:
            "Vergi identifikasiya nömrəsi (EIN) 32-0706702, Amerika Birləşmiş Ştatları.",
          general_terms: "Beso-nun Ümumi Qaydaları və Şərtləri",
          first_rule: "1. Əhatə dairəsi",
          first_textpart1:
            "Bu qaydalar və şərtlər Beso tətbiqinin ayrılmaz hissəsini təşkil edir. Bu Ümumi Şərtlər (“Şərt və Şərtlər”) sizin (“Son istifadəçi”, “Siz”) “Beso” (“Tətbiq”) adlı mobil Proqramın tətbiqi və ya Ozla, Inc. tərəfindən təqdim olunan onlayn interfeys vasitəsilə istifadə edə biləcəyiniz (“Beso”, “biz”) bütün Beso xidmətlərinə şamil edilir (“Ozla, Inc. onlayn və ya onlayn olaraq onlayn olaraq Apple. İnterfeys”).",
          first_textpart2:
            "Bundan əlavə, aşağıdakı şərtlər də müddəalarına zidd olmadığı üçün tətbiq edilir",
          first_textpart3: "Bu Ümumi Qaydalar və Şərtlər.",
          first_textpart4: "Müqavilədən əvvəl əsas məlumatlar",
          second_rule: "2. Xidmət obyekti",
          second_textpart:
            " Xidmətin obyekti əsas mühasibat uçotu və inventar idarəetmə xidmətlərinin saxlanması və virtual Beso yaddaşının (“Hesab”) təmin edilməsidir. Siz bu Şərtlər və Şərtləri qəbul edən kimi bu xidmət aktivləşir. Siz son Müştəri interfeysləri vasitəsilə hesabı idarə edə və idarə edə bilərsiniz. İlkin şərt hesaba qoşulmuş smartfondur, hansı ki, müvafiq minimum tələbləri yerinə yetirir. versiyaları və əlavə məlumatı Beso Veb saytında tapa bilərsiniz).",
          third_rule: "3. Şərtlər",
          third_textpart:
            "İstifadəçi tərəfindən ləğv edilmədiyi halda, Beso hesabınız qeyri-müəyyən müqavilə müddətinə malikdir.",
          fourth_rule: "4. Qiymətlər",
          fourth_textpart:
            "Beso tərəfindən təklif olunan xidmətlər istifadəçilər üçün ödənişsizdir",
          fifth_rule: "5. Tətbiq olunan qanun/yurisdiksiya məhkəməsi",
          fifth_textpart:
            "Delaver ştatının qanunu sizinlə Beso arasındakı işgüzar münasibətlər üçün tətbiq edilir. Beso, həmçinin müqavilədən əvvəlki münasibətlər üçün Amerika Birləşmiş Ştatlarının qanunlarına tabedir. Yurisdiksiyanı nəzərdə tutan heç bir müqavilə bəndi yoxdur.",
          sixth_rule: " 6. Müqavilənin məlumatı və dili/müqavilənin mətni",
          sixth_textpart:
            "Bu müqavilə münasibəti və müqavilə müddəti ərzində sizinlə Beso arasındakı ünsiyyət üçün idarəetmə dili ingilis dilidir.",
          seventh_rule: "7. Xidmət Təminatı",
          seventh_textpart:
            " Açıq şəkildə razılaşdırılmadığı təqdirdə heç bir xidmət şərti yoxdur.",
          eighth_rule: "8. Tələblər və dəstəklənən smartfonlar",
          eighth_textpart1:
            " Beso hesabınızdan istifadə etmək üçün sizə əlaqəli smartfon lazımdır. Smartfonunuz şəxsi identifikasiya cihazı kimi istifadə edildiyi üçün hesabınıza eyni vaxtda yalnız bir telefon qoşula bilər. Təhlükəsizlik səbəbləri ilə əlaqədar smartfondan digər cihazlardan girişləri yoxlamaq da tələb oluna bilər. Nəzərə alın ki, cihazınız əməliyyat sistemi (iOS / Android) və Beso tətbiqi üçün müvafiq minimum tələblərə cavab verir. Hər hansı bir səbəbdən təhlükəsizlik xidmətimizdən imtina edirik. müvafiq əməliyyat sisteminin versiyaları və BESO proqram versiyasının köhnəlmiş versiyaları Beso Tətbiqindən istifadəni dayandıracağı təqdirdə, müvafiq əməliyyat sisteminin bir versiyasını dəstəkləməyi dayandırmadan səkkiz həftə əvvəl sizi xəbərdar edəcəyik və bu müddət ərzində proqram təminatınızı yeniləməyə dəvət edəcəyik.",
          eighth_textpart2:
            "Əməliyyatlarınıza və parametrlərinizə baxmaq kimi əsas funksiyalara əlavə olaraq, aşağıdakı funksiyalar yalnız əlaqəli smartfonunuzda mövcuddur:",
          successfully_register: "Beso ilə qeydiyyat uğurla tamamlanır",
          prior_registration:
            "Assosiasiyanız müvafiq proqramlar mağazasında əvvəlcədən qeydiyyatdan keçməyi tələb edir. Proqramı quraşdırdıqdan sonra siz avtomatik olaraq smartfonunuzu əlaqələndirmək üçün bütün zəruri addımlardan keçəcəksiniz:",
          confirm_phonenumber: "Telefon nömrənizi təsdiqləyin",
          fourdigit_number: "SMS vasitəsilə dörd rəqəmli kodu alın",
          enter_Code:
            "Əlaqələndirməni tamamlamaq üçün tətbiqdə kodu daxil edin. Əgər əlaqələndirmə zamanı göstərilən telefon nömrəsi düzgün deyilsə və ya telefon nömrəsinin düzgün olmasına baxmayaraq SMS assosiasiya kodunu almasanız, Yardım masası və ya info@beso.dev ilə əlaqə saxlayın.",
          complete_register:
            "Beso ilə qeydiyyatı tamamlamaq üçün bu ümumi şərtlərlə razılaşma tələb olunur.",
          date_of_birth: "Doğum tarixinizin hissələrini ehtiva edən PIN-lər",
          postal_Code:
            "Ünvanınızın hissələrini ehtiva edən PIN-lər, məsələn, poçt kodunuz",
          repeat_number: "Rəqəmlərin təkrarları, məsələn, 1111",
          number_series:
            "Nömrə seriyası, məsələn, 1234 İstədiyiniz PIN qəbul edilmirsə, başqa kombinasiyanı sınayın.",
          nineth_rule: "9. Açıqlama və Bildiriş öhdəlikləri",
          nineth_textpart1:
            "Siz şəxsi məlumatlarınız, xüsusən də adınız, ünvanınız, doğum tarixiniz, telefon nömrəniz və e-poçt ünvanınızla bağlı bizə düzgün məlumat verməyə və bu məqsədlə edilən hər hansı dəyişiklik barədə operativ məlumat verməyə borclusunuz.",
          nineth_textpart2:
            "Autentifikasiya alətinizin itirilməsi və ya oğurlanması, fərdiləşdirilmiş təhlükəsizlik xüsusiyyətləriniz və ya onlardan sui-istifadə və ya icazəsiz istifadə ilə bağlı dərhal bizə məlumat verin. Lütfən, info@beso.dev elektron poçtuna göndərin.",
          tenth_rule: "10. Saxlama",
          tenth_textpart:
            "Bizimlə müqaviləniz alman dilində bağlanacaq. Müqavilə bağlayarkən bu Əlavə Müddəalar daxil olmaqla, müqavilə müddəalarını çağırmaq və onları təkrarlanan formada saxlamaq imkanınız var. Müqavilə mətninin ayrıca saxlanması tərəfimizdən həyata keçirilməyəcək.",
          eleventh_rule: "11. Əqli Mülkiyyət",
          eleventh_textpart:
            "Tətbiq, eləcə də Onlayn İnterfeys müəllif hüququ qanunu və ticarət nişanı qanunu kimi əqli mülkiyyət qanunları ilə qorunur. Sizinlə bağlı bu hüquqlar yalnız bizə aiddir.",
          twelfth_rule: "12. Eksklüzivlik",
          twelfth_textpart:
            "Biz sizə müstəsna olaraq sizinlə olan müqavilə münasibətimizin məqsədini yerinə yetirmək üçün bizimlə müqavilə münasibətinizin müddəti ilə məhdudlaşdırılmış məhdud, qeyri-müstəsna, ötürülə bilməyən və sublisenziyalı hüquq veririk. Müddəalara uyğun olaraq Proqramdan və Onlayn İnterfeysdən istifadə etmək. İstifadə hüququ müqavilənin müddəti bitdikdən sonra başa çatır.",
          thirteenth_rule: "13. Ağlabatan istifadə",
          thirteenth_textpart:
            "İstifadəçinin (i) Tətbiqi və ya Onlayn İnterfeysi icarəyə vermək, icarəyə vermək, çoxaltmaq, yenidən satmaq və ya yaymaq və ya ona daxil olmaq hüququ yoxdur; (ii) Tətbiqdən və ya Onlayn İnterfeysdən başqa xidmətlərin inkişafı üçün istifadə etmək; (iii) Tətbiqin və ya Onlayn İnterfeys funksiyalarını aktivləşdirmək və ya istifadə etmək, İstifadəçiyə Onlayn və ya istifadə etmək hüququ verilməmişdir Tətbiqə və ya Onlayn İnterfeysə çıxışı olan üçüncü tərəflər (v) Tətbiqin və ya Onlayn İnterfeysin mənbə kodunu dəyişdirmək, tərcümə etmək, çoxaltmaq və ya dekompilyasiya etmək və ya onun müəllif hüquqları qanunu ilə qanuni olaraq tələb oluna bilən funksiyalardan başqa funksiyalarını araşdırmaq.",
          fourteenth_rule: "14. İstifadəçinin Tapşırıqları",
          fourteenth_textpart:
            "Tətbiqdən və ya Onlayn İnterfeysdən istifadə edərkən, hər hansı qeyri-qanuni hərəkətlərə yol verməyin və ya tətbiq olunan qanunları pozmayın, xüsusən də: üçüncü şəxslərin sənaye mülkiyyəti hüquqlarını, müəlliflik hüquqlarını və ya əqli mülkiyyət hüquqlarını pozmamaq; istifadə davranışınızda böhtan, irqçi və ya təhqiramiz bəyanatlar vermək və ya bu cür hərəkətlərə yol vermək; tərkibində viruslar, zərərli proqramlar və ya zərərli proqramlar və ya zərərli proqramlar ötürmək; reklam (spam) və ya hər hansı digər narahatçılıq formaları.",
          fifteenth_rule: "15. Məlumatların qorunması",
          fifteenth_textpart1:
            "Tətbiq və Onlayn İnterfeys ilə əlaqədar şəxsi məlumatlarınızın emalı və onlardan istifadə üçün məsul orqan Beso-dur.",
          fifteenth_textpart2:
            "Beso-nun Avropa Məlumatların Qorunması qaydalarına uyğun olaraq Məlumatların Mühafizəsi üzrə Mütəxəssisi var və ona data@beso.dev ünvanında müraciət etmək olar. Məxfilik və məlumatların saxlanması ilə bağlı əlavə məlumatı bu Qaydalar və Şərtlərin ayrılmaz hissəsi olan Məxfilik və Məlumatların Saxlanması Siyasətində tapa bilərsiniz.",
          sixteenth_rule:
            "16. Şəxsi məlumatlarınızın toplanması, emalı və istifadəsi",
          sixteenth_textpart:
            "Biz şəxsi məlumatlarınızı qüvvədə olan qanuni müddəalara uyğun olaraq toplayır, emal edir və istifadə edirik. Məsuliyyətimiz altında toplanmış, emal edilmiş və istifadə olunan bütün şəxsi məlumatlar yalnız sizinlə müqavilə münasibətlərimizi yerinə yetirmək məqsədilə və bu məqsəd üçün lazım olan müddət ərzində saxlanılır. Genişləndirilmiş məxfilik və məlumatların saxlanma şərtlərini bu Şərtlərin ayrılmaz hissəsi olan Məxfilik və Məlumat Saxlama Siyasəti sənədində tapa bilərsiniz.",
          seventeenth_rule: "17. Proqramın alınması",
          seventeenth_textpart:
            "Tətbiq sizin istifadə etdiyiniz smartfonla əlaqələndirilib və onu üçüncü tərəfin satış platformaları (“tətbiq mağazaları”) vasitəsilə əldə edə bilərsiniz. Alışınız üçün müvafiq proqramlar mağazasında əvvəlcədən qeydiyyat tələb olunur. Bizim müvafiq proqram mağazası operatoru tərəfindən şəxsi məlumatların toplanması, işlənməsi və istifadəsinə heç bir təsirimiz yoxdur. Onlar bununla bağlı yeganə məsul orqanlardır.",
          eightteenth_rule:
            "18. Məlumatlarınızın emalı və nəzərdən keçirilməsi; Məlumat əldə etmək hüququ; Məlumatların qorunması ilə bağlı suallar",
          eightteenth_textpart1:
            "Siz istənilən vaxt Tətbiqdə və ya Onlayn İnterfeysdə şəxsi məlumatlarınıza baxa bilərsiniz. Siz həmçinin öz parolunuzu daha sonra dəyişə bilərsiniz. Əlavə şəxsi məlumatları dəyişdirmək və ya redaktə etmək üçün Müştəri Dəstəyi şöbəmizlə əlaqə saxlayın: support@beso.dev",
          eightteenth_textpart2:
            "Həmçinin istənilən vaxt haqqınızda saxlanılan şəxsi məlumatlar, onların mənbəyi və alıcıları, saxlanma məqsədi haqqında məlumat tələb edə bilərsiniz. Yuxarıda göstərilən əlaqə məlumatlarından istifadə edərək bizimlə əlaqə saxlaya bilərsiniz. Məlumatların qorunması ilə bağlı suallar, təkliflər və qeydlər data@beso.dev ünvanına da göndərilə bilər.",
          nineteenth_rule: "19. Şəxsi məlumatların toplanması",
          nineteenth_textpart:
            "Beso Data Siyasəti şəxsi məlumatların toplanması, istifadəsi və işlənməsi üçün tətbiq edilir.",
          twentieth_rule: "20. Besonun ləğv etmək hüququ",
          twentieth_textpart:
            "Bu Müqaviləni ləğv etmək hüququ bu Qaydalar və Şərtləri təsdiq etməklə qəbul edilmiş sayılır.",
          twentyfirst_rule: "21. Məsuliyyət",
          twentyfirst_textpart:
            "Biz qanuni nümayəndəmizin və ya köməkçimizin vəzifə borcunu pozması, təminatlı keyfiyyətin olmaması və ya zərərli davranış nəticəsində həyat, əza və ya sağlamlığa vurulan xəsarətlər, habelə öz tərəfimizdən və ya qanuni nümayəndəmiz və ya köməkçimizin qəsdən və ya kobud səhlənkarlığı nəticəsində dəymiş ziyana görə məhdudiyyətsiz məsuliyyət daşıyacağıq.",
          twentysecond_rule: "22. Vəzifələrin pozulması",
          twentysecond_textpart:
            "Biz bu müqaviləyə əsasən nəzərdə tutulan zərərlə məhdudlaşan, kobud səhlənkarlıqdan başqa heç bir hərəkətə görə məsuliyyət daşımırıq. Əsas müqavilə öhdəlikləri mücərrəd desək, yerinə yetirilməsi ilk növbədə müqaviləni müntəzəm işə salmağa imkan verən və müqavilə bağlayan tərəflərin müntəzəm uyğunluğuna etibar edə biləcəyi vəzifələrdir.",
          twentythird_rule: "23. Məsuliyyətin məhdudlaşdırılması",
          twentythird_textpart:
            "Beso tərəfindən təqib edilən və ya üzərinə götürdüyü bütün öhdəliklər istisna olunur.",
          twentyfourth_rule: "24. Çıxış",
          twentyfourth_textpart:
            "Siz bizim debitor borclarımızı yalnız mübahisəsiz və ya qanuni şəkildə müəyyən edilmiş əks iddialarla əvəz edə bilərsiniz",
          twentyfifth_rule: "25. Qaydalar və Şərtlərə Dəyişikliklər",
          twentyfifth_textpart:
            "Müqavilə qüvvəyə minməzdən əvvəl bu Qaydalar və Şərtlərə edilən dəyişiklik barədə sizi xəbərdar edəcəyik. Dəyişikliklər e-poçt vasitəsilə qüvvəyə minir (“dəyişiklik təklifi”). Dəyişiklik təklifi yalnız Müştərinin təsdiqindən və ya müəyyən edilmiş qanuni tarixdən sonra qüvvəyə minir, hansı daha tezdir.",
          // * -------------------- Footer ---------------------
          beso: "Beso",
          footer_infobeso:
            "Kiçik biznes dünya miqyasında iqtisadiyyatlarda böyük rol oynayır, burada böyük əksəriyyəti hələ də kağız qeydləri saxlayır və rəqəmsal mövcudluğu yoxdur. Beso bu sahibkarlara tam potensiallarını reallaşdırmaqda kömək etmək üçün buradadır.",
          quick_links: "Sürətli bağlantılar",
          home: "Ana səhifə",
          privacy_policy: "Gizlilik Siyasəti",
          terms_conditions: "Şərtlər və Qaydalar",
          about_us: "Haqqımızda",
          meet_team: "Komanda ilə tanış ol",
          our_story: "Bizim Hekayəmiz",
          career: "Karyera",
          contact: "Əlaqə",
          follow_us: "Bizi izlə",
          copyright: "Copyright Beso @ 2024. Bütün hüquqlar qorunur.",
        },
      },
      es: {
        translation: {
          // ?-------------------- Main Page---------------------
          administer_business: "Administra tu negocio",
          about_beso: "Sobre Beso",
          investors: "Inversoras",
          manage_business: "Gestionar su empresa nunca ha sido tan fácil!",
          track_investory:
            "Seguimiento digital de inventarios, cuentas, facturas y gastos: su pequeña empresa en su bolsillo",
          users: "Usuarios",
          currencies: "Divisas",
          transactions: "Transacciones",
          why_beso: "Por qué Beso?",
          run_business:
            "Dirigir una pequeña empresa puede ser complejo y, para muchos, a menudo sigue basándose en el papel. Beso reúne inventario, cuentas por cobrar, cuentas por pagar y facturación en una app fácil de usar.",
          security: "Seguridad",
          info_sec:
            "Toda tu información en el móvil, guardada de forma segura. Se acabó el riesgo de perder papel.",
          design: "Digital",
          info_design:
            "Controle sus finanzas de forma rápida y sencilla, y envíe recordatorios automáticamente, con la facturación electrónica digital que cumplirá la normativa próximamente.",
          user_friendly: "De fácil manejo",
          info_userfriendly:
            "Nítido, limpio, fácil - con carga de fotos para su inventario - ¡no más búsquedas, no necesita ser un experto!",
          offer_beso: "¿Cómo funciona Beso?",
          offer_besoinfo:
            "Beso ofrece a las pequeñas empresas herramientas esenciales de contabilidad, gestión de inventario y multidivisa, con la posibilidad de conciliar totalmente compras, ventas, ingresos y gastos, todo en un solo lugar, desde su bolsillo.",
          register_transaction: "Registrar transacciones en varias divisas",
          info_transaction:
            "Registre sus ventas, gastos y deudas en 168 divisas de todo el mundo, con una conciliación precisa de los tipos de conversión de mercado actuales y pasados.",
          track_inventory: "Controle su inventario",
          info_track:
            "Realice un seguimiento de las compras y ventas del inventario, con una carga de fotos que facilita aún más el seguimiento.",
          monitor_finance: "Controle sus finanzas",
          info_monitoring:
            " Realice un seguimiento instantáneo y conciso de sus finanzas, con la posibilidad de hacer previsiones y proyecciones.",
          analyze_balance: "Analice sus saldos",
          info_analyzing:
            "Visualice y analice al instante el estado de su saldo en la última semana, mes y año",
          welcome_beso: "Bienvenido a Beso",
          powerful_tool:
            "Una poderosa herramienta para la pequeña empresa que permite a los empresarios alcanzar todo su potencial, de forma segura, fácil y sin problemas...",
          textfield_beso:
            "Beso se creó pensando en los empresarios: en superar los principales obstáculos que creemos que les impiden alcanzar todo su potencial. La falta de registros concisos y de herramientas que permitan tomar decisiones limita a las pequeñas empresas e impide que otros apoyen su crecimiento. Con Beso, capacitamos a los empresarios para tomar decisiones más claras, ofreciéndoles herramientas que les permitan acceder a recursos que les ayuden a crecer, crear una presencia digital y acceder a nuevos canales para apoyar su crecimiento.",
          get_started: "Empezar",
          // ? -------------------About page---------------------
          creation_beso:
            "Beso se creó pensando en los empresarios: en superar los principales obstáculos que creemos que les impiden alcanzar todo su potencial.",
          aims_beso:
            "La falta de registros concisos y de herramientas que permitan tomar decisiones limita a las pequeñas empresas e impide que otros apoyen su crecimiento.",
          decisions:
            "Beso permite a los empresarios tomar decisiones más claras mediante herramientas de contabilidad claras y concisas, herramientas de gestión de inventario fáciles de usar y la posibilidad de conciliar plenamente compras, ventas, ingresos y gastos.",
          future_plans:
            "Nuestro objetivo es ayudar a los empresarios a alcanzar su pleno potencial y crear una base que les permita acceder a los recursos y crear una presencia digital para apoyar su crecimiento y alcanzar su pleno potencial.",
          // ?------------------ Investors Page -------------------
          investors: "Inversionistas",
          funding_beso:
            "Beso busca actualmente financiación inicial para apoyar su crecimiento",
          contact_beso:
            "Para obtener un folleto de inversión completo, envíe un correo electrónico a invest@beso.dev.",
          // ?------------------ TermsAndConditions -------------------
          contract_beso: "Información precontractual básica de Beso",
          version: "(versión 1.1, fecha: 15 de octubre de 2023)",
          contract_info: "Información precontractual básica",
          document_beso:
            "Este documento es para información precontractual básica por medios electrónicos. (Versión 1.1, Fecha: 16.10.2023) y está íntegramente emparejado con la Política de privacidad y retención de datos, forman los Términos y condiciones generales (también llamados “T&C”) para la aplicación Beso y el sitio web asociado.",
          name_address_beso: "Nombre y dirección de Ozla, Inc dba “Beso”",
          ozlo_incorporated: "Ozla Incorporated",
          coastel: "16192 Coastal Hwy",
          lewes_de: "Lewes DE 19958",
          usa: "Estados Unidos de América",
          site_beso: "www.beso.dev",
          state_delaware:
            "Constituida en el estado de Delaware con el número de registro comercial 7101678.",
          email_address: "Correo electrónico: info@beso.dev",
          herainafter: "En adelante denominada “Beso”.",
          legally_author: "Representantes legalmente autorizados de Beso",
          management_board:
            "(Consejo de administración) Oliver van der Meer y Zaur Alakbarov",
          activity_beso: "Actividad de Beso",
          main_activity:
            "La actividad principal de Beso es proporcionar herramientas básicas de contabilidad y contabilidad general para pequeñas empresas y propietarios únicos.",
          tax_information: "Información fiscal",
          tax_identification_number:
            "Número de identificación fiscal (EIN) 32-0706702, Estados Unidos de América.",
          general_terms: "Términos y condiciones generales de Beso",
          first_rule: "1. Ámbito de aplicación",
          first_textpart1:
            "Estos términos y condiciones forman parte integral de la aplicación Beso. Estos Términos y Condiciones Generales (“T&C”) son aplicables a todos los servicios de Beso (“Beso”, “nosotros”), que usted (“Usuario final”, “Usted”) puede utilizar a través de la aplicación de la aplicación móvil denominada “Beso” (“Aplicación”) o a través de la interfaz en línea proporcionada por Ozla, Inc. a la que se puede acceder en Apple i-store o GooglePlay (“Interfaz en línea”).",
          first_textpart2:
            "Además, las siguientes condiciones también son aplicables, en la medida en que no contradigan lo dispuesto en",
          first_textpart3: "estos Términos y Condiciones Generales.",
          first_textpart4: "Información precontractual básica",
          second_rule: "2. Objeto del servicio",
          second_textpart:
            "El objeto del servicio es el mantenimiento de un servicio básico de contabilidad y gestión de inventario y la provisión de un almacenamiento virtual de Beso (“Cuenta”). Este servicio se activa en cuanto aceptas estos términos y condiciones. Puedes utilizar y gestionar la cuenta a través de las interfaces de Cliente final. El requisito previo es un smartphone vinculado a la cuenta que cumpla con los requisitos mínimos correspondientes para el sistema operativo (IOS/Android) y la versión de nuestra aplicación Beso. (En el sitio web de Beso puedes encontrar las versiones compatibles actualmente y más información). Por motivos de seguridad, nos vemos obligados a interrumpir nuestro servicio para las versiones obsoletas del sistema operativo correspondiente y las versiones obsoletas de la aplicación Beso. Te avisaremos ocho semanas antes de que dejemos de ofrecer soporte para una versión del sistema operativo correspondiente y te invitaremos a actualizar tu software durante ese período de tiempo.",
          third_rule: "3. Condiciones",
          third_textpart:
            " Tu cuenta Beso tiene una duración contractual indefinida, a menos que el usuario la cancele.",
          fourth_rule: "4. Precios",
          fourth_textpart:
            "Los servicios ofrecidos por Beso son gratuitos para los usuarios",
          fifth_rule: "5. Derecho aplicable/tribunal competente",
          fifth_textpart:
            "La ley del estado de Delaware es aplicable a la relación comercial entre usted y Beso. Beso también está sujeta a la ley de los Estados Unidos de América para la relación precontractual. No existe ninguna cláusula contractual que estipule la jurisdicción.",
          sixth_rule: "6. Información e idioma del contrato/texto del contrato",
          sixth_textpart:
            "El idioma que rige esta relación contractual y la comunicación entre usted y Beso durante el período del contrato es el inglés.",
          seventh_rule: "7. Cláusula de servicio",
          seventh_textpart:
            "No existe ninguna cláusula de servicio, a menos que se acuerde explícitamente.",
          eighth_rule: "8. Requisitos y teléfonos inteligentes compatibles",
          eighth_textpart1:
            "Para poder utilizar su cuenta Beso, necesita un teléfono inteligente asociado. Dado que su teléfono inteligente se utiliza como dispositivo de autenticación personal, solo se puede conectar un teléfono a la vez a su cuenta. Por razones de seguridad, es posible que también se requiera el teléfono inteligente asociado para verificar los inicios de sesión desde otros dispositivos. Tenga en cuenta que su dispositivo cumple con los requisitos mínimos correspondientes para el sistema operativo (iOS/Android) y la aplicación Beso. Por razones de seguridad, nos vemos obligados a interrumpir nuestro servicio para cualquier versión desactualizada del sistema operativo respectivo y versiones desactualizadas de la versión de la aplicación BESO. Le notificaremos ocho semanas antes de que dejemos de brindar soporte a una versión del sistema operativo respectivo en caso de que esto le impida usar la aplicación Beso y lo invitaremos a actualizar su software durante ese período de tiempo.",
          eighth_textpart2:
            "Además de las funciones esenciales, como ver sus transacciones y configuraciones, las siguientes funciones solo están disponibles en su teléfono inteligente asociado:",
          successfully_register: "Completando con éxito el registro con Beso",
          prior_registration:
            "Su asociación requiere registro previo en la tienda de aplicaciones correspondiente. Después de instalar la aplicación, se le guiará automáticamente por todos los pasos necesarios para asociar su teléfono inteligente:",
          confirm_phonenumber: "Confirme su número de teléfono",
          fourdigit_number: "Reciba un código de cuatro dígitos por SMS",
          enter_Code:
            "Introduzca el código en la aplicación para completar la asociación. Si el número de teléfono que se muestra durante la asociación no es correcto, o si no recibe el código de asociación por SMS a pesar de que el número de teléfono es correcto, comuníquese con el servicio de asistencia o con info@beso.dev.",
          complete_register:
            "Para completar el registro en Beso es necesario aceptar estos términos y condiciones generales.",
          date_of_birth: "PIN que contienen partes de su fecha de nacimiento",
          postal_Code:
            "PIN que contienen partes de su dirección, como su código postal",
          repeat_number: "Repeticiones de números, como 1111",
          number_series:
            "Serie de números, como 1234. Si el PIN que desea no es aceptado, pruebe con otra combinación.",
          nineth_rule: "9. Obligaciones de divulgación y notificación",
          nineth_textpart1:
            "Está obligado a notificarnos correctamente sus datos personales, en particular su nombre, dirección, fecha de nacimiento, número de teléfono y dirección de correo electrónico, y a proporcionarnos información inmediata sobre cualquier cambio a este respecto.",
          nineth_textpart2:
            "Infórmenos de inmediato en caso de pérdida o robo de su instrumento de autenticación, sus funciones de seguridad personalizadas o de un uso indebido o no autorizado de los mismos. Envíe un correo electrónico a info@beso.dev.",
          tenth_rule: "10. Almacenamiento",
          tenth_textpart:
            "Su contrato con nosotros se celebrará en alemán. Tiene la posibilidad de consultar las disposiciones contractuales, incluidas estas Disposiciones complementarias, al celebrar el contrato y de almacenarlas de forma reproducible. No realizaremos ningún almacenamiento por separado del texto del contrato.",
          eleventh_rule: "11. Propiedad intelectual",
          eleventh_textpart:
            "La aplicación, así como la interfaz en línea, están protegidas por las leyes de propiedad intelectual, como las leyes de derechos de autor y de marcas registradas. Estos derechos en relación con usted están reservados exclusivamente para nosotros.",
          twelfth_rule: "12. Exclusividad",
          twelfth_textpart:
            "Le otorgamos, exclusivamente para cumplir con el propósito de nuestra relación contractual con usted, el derecho limitado, no exclusivo, intransferible y sublicenciable, restringido al período de su relación contractual con nosotros, para usar la aplicación y la interfaz en línea de acuerdo con las disposiciones. El derecho de uso expira al vencimiento del plazo del contrato.",
          thirteenth_rule: "13. Uso razonable",
          thirteenth_textpart:
            " El Usuario no tiene derecho a (i) alquilar, arrendar, prestar, reproducir, revender o distribuir la Aplicación o la Interfaz en línea, o acceder a ellas; (ii) utilizar la Aplicación o la Interfaz en línea para el desarrollo de otros servicios; (iii) activar o utilizar las funcionalidades de la Aplicación o la Interfaz en línea para las que no se le han concedido derechos de uso; (iv) ceder los derechos de uso de la Aplicación o la Interfaz en línea a terceros, o conceder a terceros acceso a la Aplicación o la Interfaz en línea; (v) alterar, traducir, reproducir o descompilar el código fuente de la Aplicación o de la Interfaz en línea, o investigar las funciones de la misma, fuera de lo que pueda ser legalmente obligatorio de conformidad con la ley de derechos de autor; y (vi) eliminar, ocultar o alterar información legal, en particular relativa a los derechos de propiedad industrial o derechos de autor de Beso.",
          fourteenth_rule: "14. Deberes del Usuario",
          fourteenth_textpart:
            "Al utilizar la Aplicación o la Interfaz en línea, no está permitido realizar ninguna acción ilegal o infringir cualquier ley aplicable leyes, en particular no hacer lo siguiente: infringir derechos de propiedad industrial, derechos de autor o derechos intelectuales de terceros; en su comportamiento de uso, hacer declaraciones difamatorias, racistas u ofensivas, o emprender tales acciones; transmitir contenidos que contengan virus, troyanos, programas espía, programas publicitarios, programas maliciosos u otros programas dañinos o perjudiciales; distribuir publicidad no deseada (spam) o cualquier otra forma de molestia.",
          fifteenth_rule: "15. Protección de datos",
          fifteenth_textpart1:
            " La autoridad responsable del procesamiento de sus datos personales en relación con la Aplicación y la Interfaz en línea y sus usos es Beso.",
          fifteenth_textpart2:
            " Beso cuenta con un Responsable de Protección de Datos de acuerdo con las normas europeas de Protección de Datos y puede contactarse con él en data@beso.dev. Puede encontrar más información sobre privacidad y retención de datos en la Política de Privacidad y Retención de Datos que forma parte integral de estos Términos y Condiciones.",
          sixteenth_rule:
            "16. Recopilación, procesamiento y uso de sus datos personales",
          sixteenth_textpart:
            " Recopilamos, procesamos y utilizamos sus datos personales de conformidad con las disposiciones legales aplicables. Todos los datos personales recopilados, procesados ​​y utilizados bajo nuestra responsabilidad se almacenan exclusivamente con el fin de cumplir nuestra relación contractual con usted y no durante más tiempo del necesario para este fin. Puede encontrar términos de privacidad y retención de datos ampliados en el documento de Política de privacidad y retención de datos, que forma parte integral de estos Términos y condiciones.",
          seventeenth_rule: "17. Compra de la aplicación",
          seventeenth_textpart:
            " La aplicación depende del teléfono inteligente que utilice, que se puede obtener a través de plataformas de venta de terceros (“tiendas de aplicaciones”). Su compra presupone un registro previo en la tienda de aplicaciones en cuestión. No tenemos ninguna influencia en la recopilación, el procesamiento y el uso de datos personales por parte del operador de la tienda de aplicaciones correspondiente. Estas son las únicas autoridades responsables a este respecto.",
          eightteenth_rule:
            "18. Manejo y revisión de sus datos; Derecho a la información; Preguntas sobre protección de datos",
          eightteenth_textpart1:
            "En cualquier momento puede consultar sus datos personales en la aplicación o en la interfaz en línea. También puede cambiar posteriormente su propia contraseña. Para modificar o cambiar otros datos personales, póngase en contacto con nuestro departamento de atención al cliente: support@beso.dev",
          eightteenth_textpart2:
            "Además, puede solicitar en cualquier momento información sobre los datos personales almacenados que le conciernen personalmente, así como su origen y destinatarios y la finalidad para la que se almacenan. Puede ponerse en contacto con nosotros utilizando los datos de contacto mencionados anteriormente. Las preguntas, sugerencias y notas sobre protección de datos también pueden dirigirse a data@beso.dev.",
          nineteenth_rule: "19. Recopilación de datos personales",
          nineteenth_textpart:
            "Para la recopilación, uso y procesamiento de datos personales se aplica la Política de datos de Beso.",
          twentieth_rule: "20. Derecho de rescisión de Beso",
          twentieth_textpart:
            "El derecho a rescindir este contrato se considerará acordado con la aprobación de estos T&C.",
          twentyfirst_rule: "21. Responsabilidad",
          twentyfirst_textpart:
            "Seremos responsables sin restricciones de los daños que surjan de lesiones a la vida, la integridad física o la salud, que se basen en un incumplimiento de las obligaciones por nuestra parte, un representante legal o auxiliar nuestro, que sean causados ​​por la falta de calidad garantizada por nuestra parte o un comportamiento malicioso por nuestra parte, así como por los daños que fueron causados ​​por premeditación o negligencia grave por nuestra parte o por un representante legal o auxiliar nuestro.",
          twentysecond_rule: "22. Incumplimiento de obligaciones",
          twentysecond_textpart:
            "No seremos responsables de ninguna acción excepto negligencia grave, limitada a los daños previsibles en virtud de este contrato. Las obligaciones contractuales significativas son abstractamente aquellas obligaciones cuyo cumplimiento permite en primer lugar ejecutar un contrato de manera ordenada, y en cuyo cumplimiento las partes contractuales pueden confiar regularmente.",
          twentythird_rule: "23. Limitación de responsabilidad",
          twentythird_textpart:
            "Toda responsabilidad perseguida o incurrida en el incumplimiento de las obligaciones contractuales es responsabilidad exclusiva de las partes contratantes.",
          twentyfourth_rule: "24. Compensación",
          twentyfourth_textpart:
            "Solo puede compensar nuestras reclamaciones con contrademandas indiscutibles o legalmente establecidas.",
          twentyfifth_rule: "25. Cambios en los Términos y Condiciones",
          twentyfifth_textpart:
            "Le informaremos sobre una modificación en estos Términos y Condiciones antes del momento en que las modificaciones entren en vigencia por correo electrónico (“oferta de modificación”). La oferta de modificación solo entrará en vigencia tras el consentimiento del Cliente o en una fecha legal estipulada, lo que ocurra primero.",
          // * -------------------- Footer ---------------------
          beso: "Beso",
          footer_infobeso:
            "Las pequeñas empresas desempeñan un papel destacado en las economías de todo el mundo, donde la inmensa mayoría sigue manteniendo registros en papel y no tiene presencia digital. Beso está aquí para ayudar a esos empresarios a alcanzar todo su potencial.",
          quick_links: "Enlaces rápidos",
          home: "Inicio",
          privacy_policy: "Política de privacidad",
          terms_conditions: "Términos y condiciones",
          about_us: "Acerca de nosotros",
          meet_team: "Conozca al equipo",
          our_story: "Nuesta historia",
          career: "Carreras",
          contact: "Contacto",
          follow_us: "Síganos",
          copyright: "Copyright Beso @ 2024. Todos los derechos reservados.",
        },
      },
      tr: {
        translation: {
          // ?-------------------- Main Page---------------------
          administer_business: "İşletmenizi yönetin",
          about_beso: "Beso hakkında",
          investors: "Yatırımcılar",
          manage_business:
            "Küçük işletmenizi yönetmek hiç bu kadar kolay olmamıştı!",
          track_investory:
            "Envanteri, hesapları, faturaları ve giderleri dijital olarak takip edin - küçük işletmeniz cebinizde",
          users: "Kullanıcı",
          currencies: "Döviz",
          transactions: "İşlem",
          why_beso: "Neden beso?",
          run_business:
            "Küçük bir işletmeyi yönetmek karmaşık olabilir ve çoğu kişi için hala kağıt tabanlıdır. Beso, envanter, alacaklar, borçlar ve faturalandırmayı kullanımı kolay tek bir uygulamada bir araya getirir.",
          security: "Güvenlik",
          info_sec:
            "Tüm bilgileriniz cep telefonunuzda, güvenli ve emniyetli bir şekilde saklanır. Artık kağıt kaybetme riski yok.",
          design: "Dizayn",
          info_design:
            "Mali durumunuzu hızlı ve kolay bir şekilde izleyin ve çok yakında dijital, uyumlu e-fatura ile otomatik olarak hatırlatıcılar gönderin.",
          user_friendly: "Kullanıcı dostu",
          info_userfriendly:
            "Net, temiz, kolay - envanteriniz için fotoğraf yüklemeleri ile - artık arama yapmak yok, uzman olmanıza gerek yok!",
          offer_beso: "Beso Ne Sunuyor?",
          offer_besoinfo:
            "Beso, küçük işletmelere temel muhasebe, envanter yönetimi ve çoklu para birimi araçları ile satın alma, satış, gelir ve giderlere karşı tam mutabakat sağlama olanağı sunar - hepsi tek bir yerde, cebinizden.",
          register_transaction:
            "İşlemleri birden fazla para biriminde kaydedin",
          info_transaction:
            "Satışlarınızı, giderlerinizi ve borçlarınızı 168 dünya para biriminde, mevcut ve geçmiş piyasa dönüşüm oranlarında doğru mutabakatla kaydedin.",
          track_inventory: "Envanter takibi",
          info_track:
            "Envanterden satın alımları ve satışları takip edin, fotoğraf yükleyerek takip etmeyi daha da kolaylaştırın.",
          monitor_finance: "Mali durumunuzu izleyin",
          info_monitoring:
            " Çok yakında gerçekleşecek tahmin ve projeksiyon yeteneği ile mali durumunuzu anlık ve özlü bir şekilde takip edin.",
          analyze_balance: "Bakiyelerinizi analiz edin",
          info_analyzing:
            "Geçen hafta, ay ve yıl içindeki bakiye durumunuzu anında görüntüleyin, analiz edin.",
          welcome_beso: "Beso'ya hoş geldiniz",
          powerful_tool:
            "Girişimcilerin tam potansiyellerine güvenli, kolay ve sorunsuz bir şekilde ulaşmalarını sağlayan küçük işletmeler için güçlü bir araç...",
          textfield_beso:
            " Beso girişimciler düşünülerek oluşturuldu: onların tam potansiyellerine ulaşmalarını engellediğine inandığımız temel engelleri ortadan kaldırmak. Kısa kayıtların ve karar verme araçlarının bulunmaması, küçük işletmeleri sınırlandırır ve diğerlerinin onların büyümelerini desteklemesini engeller. Beso ile girişimcilere daha net kararlar almaları için güç veriyor, büyümelerine, dijital varlık oluşturmalarına ve büyümelerini destekleyecek yeni kanallara erişmelerine yardımcı olacak araçlar sunuyoruz.",
          get_started: "Başlayın",
          // ? -------------------About page---------------------
          creation_beso:
            "Beso, girişimcileri düşünerek yaratıldı: tam potansiyellerine ulaşmalarını engellediğine inandığımız başlıca engelleri aşmak. Yatırımcılar.Beso şu anda büyümesini desteklemek için tohum finansmanı arıyor",
          aims_beso:
            "Kararları mümkün kılan özlü kayıtların ve araçların eksikliği, küçük işletmeleri kısıtlıyor ve başkalarının büyümelerini desteklemesini engelliyor.",
          decisions:
            "Beso, girişimcilerin net, özlü muhasebe araçları, kullanımı kolay envanter yönetim araçları ve satın alımları, satışları, geliri ve giderleri tam olarak uzlaştırma yeteneği ile daha net kararlar almalarını sağlar.",
          future_plans:
            "Girişimcilerin tam potansiyellerine ulaşmalarını sağlamayı ve kaynaklara erişebilecekleri, dijital bir varlık oluşturabilecekleri, büyümelerini destekleyebilecekleri ve tam potansiyellerine ulaşabilecekleri bir temel oluşturmayı amaçlıyoruz.",
          // ?------------------ Investors Page -------------------
          investors: "Yatırımcılar",
          funding_beso:
            "Beso şu anda büyümesini desteklemek için tohum finansmanı arıyor",
          contact_beso:
            "Tam bir yatırım prospektüsü için lütfen invest@beso.dev adresine e-posta gönderin.",
          // ?------------------ TermsAndConditions -------------------
          contract_beso: "Beso için Temel Sözleşme Öncesi Bilgiler",
          version: "(version 1.1, date: October 15th 2023)",
          contract_info: "Temel Sözleşme Öncesi Bilgiler",
          document_beso:
            "Bu belge, elektronik yollarla temel sözleşme öncesi bilgiler içindir. (Version 1.1, Date: 16.10.2023) ve Beso uygulaması ve ilişkili web sitesi için genel Şartlar ve Koşullar'ı (ayrıca “Ş&K” olarak da adlandırılır) oluşturan Gizlilik ve Veri Saklama Politikası ile bütünleşiktir.",
          name_address_beso: "Ozla, Inc dba “Beso”nun Adı ve Adresi",
          ozlo_incorporated: "Ozla Incorporated",
          coastel: "16192 Coastal Hwy",
          lewes_de: "Lewes DE 19958",
          usa: "Amerika Birleşik Devletleri",
          site_beso: "www.beso.dev",
          state_delaware:
            "Delaware Eyaletinde 7101678 işletme kayıt numarasıyla kurulmuştur.",
          email_address: "E-posta: info@beso.dev",
          herainafter: "Bundan sonra “Beso” olarak anılacaktır.",
          legally_author: "Beso'nun Yasal Yetkili Temsilcileri",
          management_board:
            "(Yönetim Kurulu) Oliver van der Meer ve Zaur Alakbarov",
          activity_beso: "Beso'nun Faaliyeti",
          main_activity:
            "Beso'nun ana faaliyeti, küçük işletmeler ve müstakil mülk sahipleri için temel muhasebe ve genel muhasebe araçları sağlamaktır.",
          tax_information: "Vergi bilgileri",
          tax_identification_number:
            "Vergi kimlik numarası (EIN) 32-0706702, Amerika Birleşik Devletleri.",
          general_terms: "Beso'nun Genel Şartları ve Koşulları",
          first_rule: "1. Kapsam",
          first_textpart1:
            "Bu şartlar ve koşullar Beso uygulamasının ayrılmaz bir parçasıdır. Bu Genel Şartlar ve Koşullar (“Ş&K”), sizin (“Son kullanıcı”, “Siz”) “Beso” adlı mobil Uygulamanın uygulaması (“Uygulama”) veya Apple i-store veya GooglePlay üzerinden erişilebilen Ozla, Inc. tarafından sağlanan çevrimiçi arayüz (“Çevrimiçi Arayüz”) aracılığıyla kullanabileceğiniz tüm Beso (“Beso”, “biz”) hizmetleri için geçerlidir.",
          first_textpart2: "Ayrıca, aşağıdaki koşullar da geçerlidir, ancak",
          first_textpart3: "bu Genel Şartlar ve Koşullar.",
          first_textpart4: "Temel sözleşme öncesi bilgiler",
          second_rule: "2. Hizmetin amacı",
          second_textpart:
            "Hizmetin amacı, temel bir muhasebe ve envanter yönetimi hizmetinin sürdürülmesi ve sanal bir Beso depolama alanının (“Hesap”) sağlanmasıdır. Bu hizmet, bu Şartlar ve Koşulları kabul ettiğiniz anda etkin hale gelir. Hesabı son Müşteri arayüzleri üzerinden çalıştırabilir ve yönetebilirsiniz. Ön koşul, işletim sistemi (IOS/Android) ve Beso uygulama sürümümüz için ilgili asgari gereksinimleri karşılayan hesaba bağlı bir akıllı telefondur. (Şu anda desteklenen sürümler ve daha fazla bilgi Beso Web Sitesinde bulunabilir). Güvenlik nedenlerinden dolayı, ilgili işletim sisteminin eski sürümleri ve Beso uygulama sürümünün eski sürümleri için hizmetimizi sonlandırmak zorundayız. İlgili işletim sisteminin bir sürümünü desteklemeyi bırakmadan sekiz hafta önce sizi bilgilendireceğiz ve bu süre zarfında yazılımınızı güncellemenizi rica edeceğiz.",
          third_rule: "3. Şartlar",
          third_textpart:
            "Beso hesabınız, kullanıcı tarafından sonlandırılmadığı sürece belirsiz bir sözleşmesel süreye sahiptir.",
          fourth_rule: "4. Fiyatlar",
          fourth_textpart:
            "Beso tarafından sunulan hizmetler kullanıcılar için ücretsizdir",
          fifth_rule: "5. Uygulanabilir yasa/yargı mahkemesi",
          fifth_textpart:
            "Siz ve Beso arasındaki ticari ilişki için Delaware eyaleti yasası geçerlidir. Beso, sözleşme öncesi ilişki için Amerika Birleşik Devletleri yasasına da tabidir. Yargı yetkisini belirleyen bir sözleşme maddesi yoktur.",
          sixth_rule: "6. Sözleşmenin bilgisi ve dili/sözleşme metni",
          sixth_textpart:
            " Bu sözleşme ilişkisinin ve sözleşme süresince sizinle Beso arasındaki iletişimin yönetim dili İngilizce'dir.",
          seventh_rule: "7. Hizmet Şartı",
          seventh_textpart:
            "Açıkça kararlaştırılmadığı sürece bir hizmet şartı yoktur.",
          eighth_rule: "8. Gereksinimler ve Desteklenen Akıllı Telefonlar",
          eighth_textpart1:
            " Beso hesabınızı kullanmak için ilişkili bir akıllı telefona ihtiyacınız var. Akıllı telefonunuz kişisel kimlik doğrulama cihazı olarak kullanıldığından, hesabınıza aynı anda yalnızca bir telefon bağlanabilir. Güvenlik nedeniyle, ilişkili akıllı telefonun diğer cihazlardan yapılan girişleri doğrulaması da gerekebilir. Lütfen cihazınızın işletim sistemi (iOS / Android) ve Beso uygulaması için ilgili asgari gereksinimleri karşıladığını unutmayın. Güvenlik nedeniyle, ilgili işletim sisteminin ve güncel olmayan sürümlerinin eski sürümleri için hizmetimizi sonlandırmak zorundayız. BESO uygulama sürümü. İlgili işletim sisteminin bir sürümünü desteklemeyi bırakmamızdan sekiz hafta önce sizi bilgilendireceğiz, aksi takdirde bu durum Beso Uygulamasını kullanmanızı engelleyecek ve bu süre zarfında yazılımınızı güncellemenizi rica edeceğiz.",
          eighth_textpart2:
            "İşlemlerinizi ve ayarlarınızı görüntüleme gibi temel özelliklere ek olarak, aşağıdaki özellikler yalnızca ilişkili akıllı telefonunuzda kullanılabilir:",
          successfully_register: "Beso'ya kayıt başarıyla tamamlandı",
          prior_registration:
            "Dernekleşmeniz, ilgili uygulama mağazasında önceden kayıt yaptırmanızı gerektirir. Uygulamayı yükledikten sonra, akıllı telefonunuzu ilişkilendirmek için gerekli tüm adımlara otomatik olarak yönlendirileceksiniz:",
          confirm_phonenumber: "Telefon numaranızı onaylayın",
          fourdigit_number: "SMS yoluyla dört basamaklı bir kod alın",
          enter_Code:
            " İlişkilendirmeyi tamamlamak için uygulamaya kodu girin İlişkilendirme sırasında görüntülenen telefon numarası doğru değilse veya telefon numarası doğru olmasına rağmen SMS ilişki kodunu almazsanız lütfen Yardım masasıyla veya info@beso.dev ile iletişime geçin.",
          complete_register:
            "Beso'ya kaydı tamamlamak, bu genel hüküm ve koşulları kabul etmeyi gerektirir.",
          date_of_birth: "Doğum tarihinizin parçalarını içeren PIN'ler",
          postal_Code:
            "Posta kodunuz gibi adresinizin parçalarını içeren PIN'ler",
          repeat_number: "1111 gibi sayıların tekrarları",
          number_series:
            "1234 gibi sayı serileri İstediğiniz PIN yoksa kabul edildi, lütfen başka bir kombinasyon deneyin.",
          nineth_rule: "9. Açıklama ve Bildirim Yükümlülükleri",
          nineth_textpart1:
            "Özellikle adınız, adresiniz, doğum tarihiniz, telefon numaranız ve e-posta adresiniz olmak üzere kişisel verileriniz hakkında bizi doğru bir şekilde bilgilendirmek ve bu amaçla yapılan herhangi bir değişiklik hakkında bize derhal bilgi vermekle yükümlüsünüz.",
          nineth_textpart2:
            "Kimlik doğrulama aracınızın, kişiselleştirilmiş güvenlik özelliklerinizin kaybolması veya çalınması veya bunların kötüye kullanılması veya yetkisiz kullanımı hakkında bizi derhal bilgilendirin. Lütfen info@beso.dev adresine e-posta gönderin.",
          tenth_rule: "10. Depolama",
          tenth_textpart:
            "Bizimle olan sözleşmeniz Almanca olarak akdedilecektir. Sözleşmeyi akdederken bu Ek Hükümler de dahil olmak üzere sözleşme hükümlerini çağırma ve bunları çoğaltılabilir biçimde saklama olanağınız vardır. Sözleşme metninin ayrı bir saklaması tarafımızca yapılmayacaktır.",
          eleventh_rule: "11. Fikri Mülkiyet",
          eleventh_textpart:
            " Uygulama ve Çevrimiçi Arayüz, telif hakkı yasası ve ticari marka yasası gibi fikri mülkiyet yasaları tarafından korunmaktadır. Sizinle ilgili bu haklar yalnızca bize saklıdır.",
          twelfth_rule: "12. Münhasırlık",
          twelfth_textpart:
            "Size, yalnızca sizinle olan sözleşmesel ilişkimizin amacını yerine getirmek için, sözleşmesel ilişkinizin süresiyle sınırlı, sınırlı, münhasır olmayan, devredilemez ve alt lisanslanabilir hakkı, hükümlere uygun olarak Uygulamayı ve Çevrimiçi Arayüzü kullanma hakkını veriyoruz. Kullanım hakkı, sözleşme süresinin sona ermesiyle sona erer.",
          thirteenth_rule: "13. Makul Kullanım",
          thirteenth_textpart:
            " Kullanıcı (i) Uygulamayı veya Çevrimiçi Arayüzü kiralama, kiralama, ödünç verme, çoğaltma, yeniden satma veya dağıtma veya bunlara erişme hakkına sahip değildir; (ii) Uygulamayı veya Çevrimiçi Arayüzü diğer hizmetlerin geliştirilmesi için kullanma; (iii) kendisine hiçbir kullanım hakkı verilmemiş olan Uygulamanın veya Çevrimiçi Arayüzün işlevlerini etkinleştirmek veya kullanmak; (iv) Uygulamanın veya Çevrimiçi Arayüzün kullanım haklarını üçüncü taraflara devretmek veya üçüncü taraflara Uygulamaya veya Çevrimiçi Arayüze erişim izni vermek; (v) Uygulamanın veya Çevrimiçi Arayüzün kaynak kodunu değiştirmek, çevirmek, çoğaltmak veya derlemesini çözmek veya telif hakkı yasasına göre yasal olarak zorunlu olabilecekler dışında işlevlerini araştırmak; ve (vi) özellikle Beso'nun sınai mülkiyet hakları veya telif haklarıyla ilgili yasal bilgileri kaldırmak, gizlemek veya değiştirmek.",
          fourteenth_rule: "14. Kullanıcının Görevleri",
          fourteenth_textpart:
            "Uygulamayı veya Çevrimiçi Arayüzü kullanırken, herhangi bir yasa dışı eylemde bulunmanız veya geçerli yasaları ihlal etmeniz yasaktır, özellikle aşağıdakileri yapmamalısınız: üçüncü tarafların sınai mülkiyet haklarını, telif haklarını veya fikri haklarını ihlal etmek; kullanım davranışınızda iftira niteliğinde, ırkçı veya saldırgan ifadelerde bulunmak veya bu tür eylemlerde bulunmak; virüs, truva atı, casus yazılım, reklam yazılımı, kötü amaçlı yazılım veya diğer zararlı veya hasar verici programlar içeren içerikleri iletmek; istenmeyen reklamları (spam) veya başka bir rahatsızlık biçimini dağıtmak.",
          fifteenth_rule: "15. Veri Koruma",
          fifteenth_textpart1:
            "Uygulama ve Çevrimiçi Arayüz ile bağlantılı olarak kişisel verilerinizin işlenmesinden ve bunların kullanımlarından sorumlu yetkili Beso'dur.",
          fifteenth_textpart2:
            " Beso, Avrupa Veri Koruma kurallarına göre bir Veri Koruma Görevlisine sahiptir ve data@beso.dev adresinden ulaşılabilir. Gizlilik ve veri saklama hakkında daha fazla bilgi, bu Şartlar ve Koşulların ayrılmaz bir parçası olan Gizlilik ve Veri Saklama Politikasında bulunabilir.",
          sixteenth_rule:
            "16. Kişisel Verilerinizin Toplanması, İşlenmesi ve Kullanımı",
          sixteenth_textpart:
            "Kişisel verilerinizi yürürlükteki yasal hükümlerle uyumlu bir şekilde topluyor, işliyor ve kullanıyoruz. Sorumluluğumuz altında toplanan, işlenen ve kullanılan tüm kişisel veriler yalnızca sizinle olan sözleşmesel ilişkimizi yerine getirme amacıyla ve bu amaç için gerekenden daha uzun süre saklanmaz. Genişletilmiş gizlilik ve veri saklama koşulları, bu Şartlar ve Koşulların ayrılmaz bir parçası olan Gizlilik ve Veri Saklama Politikası belgesinde bulunabilir.",
          seventeenth_rule: "17. Uygulamanın Satın Alınması",
          seventeenth_textpart:
            "Uygulama, üçüncü taraf satış platformları (“uygulama mağazaları”) üzerinden edinilebilen sizin tarafınızdan kullanılan akıllı telefona bağlıdır. Satın almanız, ilgili uygulama mağazasına önceden kaydolmayı gerektirir. İlgili uygulama mağazası operatörü tarafından kişisel verilerin toplanması, işlenmesi ve kullanımı üzerinde hiçbir etkimiz yoktur. Bu konuda tek sorumlu makamlar bunlardır.",
          eightteenth_rule:
            " 18. Verilerinizin işlenmesi ve incelenmesi; Bilgi Edinme Hakkı; Veri Koruması Hakkında Sorular",
          eightteenth_textpart1:
            "İstediğiniz zaman, Uygulamada veya Çevrimiçi Arayüzde kişisel verilerinizi görüntüleyebilirsiniz. Ayrıca daha sonra kendi şifrenizi de değiştirebilirsiniz. Daha fazla kişisel veriyi değiştirmek veya düzenlemek için lütfen Müşteri Destek departmanımızla iletişime geçin: support@beso.dev",
          eightteenth_textpart2:
            "Ayrıca, istediğiniz zaman sizinle ilgili olarak saklanan kişisel veriler, bunların kaynağı ve alıcıları ve saklanma amacı hakkında bilgi talep edebilirsiniz. Yukarıda belirtilen iletişim bilgilerini kullanarak bize ulaşabilirsiniz. Veri korumasıyla ilgili sorular, öneriler ve notlar da data@beso.dev adresine yönlendirilebilir.",
          nineteenth_rule: "19. Kişisel Verilerin Toplanması",
          nineteenth_textpart:
            "Kişisel verilerin toplanması, kullanımı ve işlenmesi için Beso Veri Politikası geçerlidir.",
          twentieth_rule: "20. Beso'nun fesih hakkı",
          twentieth_textpart:
            "Bu sözleşmeyi feshetme hakkı, bu Şartlar ve Koşullar'ın onaylanmasıyla kabul edilmiş sayılır.",
          twentyfirst_rule: "21. Sorumluluk",
          twentyfirst_textpart:
            "Biz, yasal temsilcimiz veya yardımcımızın bir görev ihlaline dayanan, garantili kalitenin olmaması veya bizim tarafımızdan kötü niyetli davranış nedeniyle ortaya çıkan yaşam, uzuv veya sağlık yaralanmasından kaynaklanan zararlardan ve ayrıca bizim veya yasal temsilcimiz veya yardımcımızın kasıtlı veya ağır ihmalinden kaynaklanan zararlardan kısıtlama olmaksızın sorumlu olacağız.",
          twentysecond_rule: "22. Görev ihlali",
          twentysecond_textpart:
            "Bu sözleşme kapsamında öngörülebilir zararlarla sınırlı olmak üzere, ağır ihmal haricinde hiçbir eylemden sorumlu tutulmayacağız. Önemli sözleşmesel görevler, soyut olarak, yerine getirilmesinin ilk etapta bir sözleşmeyi düzenli bir şekilde uygulamaya koymayı mümkün kıldığı ve sözleşme taraflarının düzenli olarak bunlara uymasına güvenebileceği görevlerdir.",
          twentythird_rule: "23. Sorumluluğun sınırlandırılması",
          twentythird_textpart:
            "Beso tarafından takip edilen veya üstlenilen tüm sorumluluklar hariç tutulmuştur.",
          twentyfourth_rule: "24. Mahsup",
          twentyfourth_textpart:
            "Alacaklarımızı yalnızca tartışmasız veya yasal olarak belirlenmiş karşı taleplerle mahsup edebilirsiniz.",
          twentyfifth_rule: "25. Şartlar ve Koşullarda Değişiklikler",
          twentyfifth_textpart:
            "Bu Şartlar ve Koşullarda yapılan bir değişiklik hakkında, değişikliklerin yürürlüğe girmesinden önce sizi e-posta yoluyla bilgilendireceğiz (“değişiklik teklifi”). Değişiklik teklifi yalnızca Müşterinin onayı veya belirlenen yasal bir tarih (hangisi daha erken gerçekleşirse) üzerine yürürlüğe girecektir.",
          // * -------------------- Footer ---------------------
          beso: "Beso",
          footer_infobeso:
            "Küçük işletmeler, büyük çoğunluğun hala kağıt kayıt tuttuğu ve dijital varlığa sahip olmadığı dünya çapındaki ekonomilerde büyük bir rol oynamaktadır. Beso, bu girişimcilerin tam potansiyellerine ulaşmalarına yardımcı olmak için burada.",
          quick_links: "Hızlı Linkler",
          home: "Ana Sayfa",
          privacy_policy: "Gizlilik Politikası",
          terms_conditions: "Şartlar & koşullar",
          about_us: "Hakkımızda",
          meet_team: "Ekibi tanıyın",
          our_story: "Hikayemiz",
          career: "Kariyer",
          contact: "Bize ulaşın",
          follow_us: "Bizi takip edin",
          copyright: "Copyright Beso @ 2024. Her hakkı saklıdır.",
        },
      },
    },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
