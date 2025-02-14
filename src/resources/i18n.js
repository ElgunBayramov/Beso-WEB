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
          email_beso:
            "For a full investment prospectus please email invest@beso.dev",
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
          email_beso:
            "Tam investisiya prospekti üçün invest@beso.dev elektron poçtuna müraciət edin",
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
          email_beso:
            "Para obtener un folleto de inversión completo, envíe un correo electrónico a invest@beso.dev.",
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
          email_beso:
            "Tam bir yatırım prospektüsü için lütfen invest@beso.dev adresine e-posta gönderin.",
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
