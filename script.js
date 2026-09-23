// =========================================================
// MENU MOBILE
// =========================================================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {

            menuToggle.textContent = "✖";
            menuToggle.setAttribute(
                "aria-label",
                "Fermer le menu"
            );

        } else {

            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Ouvrir le menu"
            );

        }

    });

}


// Fermer le menu lorsqu'on clique sur un lien

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

    });

});


// =====================================================
// MENU PARAMÈTRES
// =====================================================

const settingsToggle =
    document.querySelector(".settings-toggle");

const settingsMenu =
    document.querySelector(".settings-menu");

if (settingsToggle && settingsMenu) {

    settingsToggle.addEventListener("click", function (event) {

        event.stopPropagation();

        settingsMenu.classList.toggle("active");

    });


    document.addEventListener("click", function (event) {

        if (
            !settingsMenu.contains(event.target) &&
            !settingsToggle.contains(event.target)
        ) {

            settingsMenu.classList.remove("active");

        }

    });

}


// =====================================================
// FERMER LES MENUS
// =====================================================

function closeMenus() {

    if (settingsMenu) {
        settingsMenu.classList.remove("active");
    }

    if (navLinks) {
        navLinks.classList.remove("active");
    }

    if (menuToggle) {

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

    }

}


// =====================================================
// MODE SOMBRE
// =====================================================

const darkModeToggle = document.getElementById("dark-mode-toggle");

if (darkModeToggle) {

    // Vérifier le choix enregistré au chargement
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        // Enregistrer le choix
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}
// =====================================================
// FENÊTRE D'AIDE
// =====================================================

const helpButton =
    document.getElementById("help-button");

const helpModal =
    document.getElementById("help-modal");

const helpClose =
    document.getElementById("help-close");

const helpOk =
    document.getElementById("help-ok");


if (helpButton && helpModal) {

    helpButton.addEventListener("click", function () {

        closeMenus();

        helpModal.classList.add("active");

    });

}


if (helpClose && helpModal) {

    helpClose.addEventListener("click", function () {

        helpModal.classList.remove("active");

    });

}


if (helpOk && helpModal) {

    helpOk.addEventListener("click", function () {

        helpModal.classList.remove("active");

    });

}


if (helpModal) {

    helpModal.addEventListener("click", function (event) {

        if (event.target === helpModal) {

            helpModal.classList.remove("active");

        }

    });

}


// =====================================================
// FENÊTRE CHATBOT
// =====================================================

const chatbotButton =
    document.getElementById("chatbot-button");

const chatbotModal =
    document.getElementById("chatbot-modal");

const chatbotClose =
    document.getElementById("chatbot-close");


if (chatbotButton && chatbotModal) {

    chatbotButton.addEventListener("click", function () {

        closeMenus();

        chatbotModal.classList.add("active");

    });

}


if (chatbotClose && chatbotModal) {

    chatbotClose.addEventListener("click", function () {

        chatbotModal.classList.remove("active");

    });

}


if (chatbotModal) {

    chatbotModal.addEventListener("click", function (event) {

        if (event.target === chatbotModal) {

            chatbotModal.classList.remove("active");

        }

    });

}

// =====================================================
// SYSTÈME DE TRADUCTION
// =====================================================

const translations = {

    // =================================================
    // FRANÇAIS
    // =================================================

    fr: {

        // ==================== HEADER ====================

        navHome: "Accueil",
        navAbout: "À propos",
        navExpertises: "Expertises",
        navProjects: "Projets",
        navContact: "Contact",

        settings: "Paramètres",
        language: "Langue",
        darkMode: "Mode sombre",
        help: "Aide",
        chatbot: "Chatbot",
        information: "Plus d'informations",
        privacy: "Confidentialité",
        terms: "Conditions d'utilisation",


        // ==================== HERO ====================

        heroTitle:
            "Développeur Web & Mobile",

        heroDescription:
            "Je transforme vos idées en solutions digitales adaptées.",

        heroProjects:
            "Voir mes projets →",

        heroContact:
            "Me contacter",


        // ==================== À PROPOS ====================

        aboutLabel:"À PROPOS",
aboutTitle:"Je crée des solutions pensées pour le réel.",
aboutDescription:"Je suis Stéphane Mwamba, développeur web et logiciel spécialisé dans la conception de solutions numériques, l'informatique de gestion et les projets digitaux. Mon objectif est de transformer des idées et des besoins concrets en applications, plateformes et expériences numériques utiles.",


        expertisesLabel:
    "EXPERTISES",

expertisesTitle:
    "Ce que je fais",

expertiseWebTitle:
    "Développement Web",

expertiseWebDescription:
    "Création de sites, plateformes et applications modernes adaptées aux besoins.",

expertiseSoftwareTitle:
    "Développement Logiciel",

expertiseSoftwareDescription:
    "Conception d'applications et outils métiers destinés à répondre aux besoins spécifiques des entreprises.",

expertiseDataTitle:
    "Informatique de gestion",

expertiseDataDescription:
    "Conception de systèmes permettant d'organiser, gérer et exploiter les données et processus des organisations.",

expertiseDesignTitle:
    "Bases de données & S I",

expertiseDesignDescription:
    "Modélisation, implémentation, gestion et structuration des bases de données pour une meilleure gestion des informations.",

expertiseDigitalTitle:
    "Solutions numérique & automatisation",

expertiseDigitalDescription:
    "Conception de solutions numériques adaptées aux problématiques réelles et automatisation grâce à l'IA.",

expertiseMarketingTitle:
    "Sécurité et chiffrement",

expertiseMarketingDescription:
    "Protection contre les attaques malveillantes et sécurisation des données et informations.",
      
    // ==================== TECHNOLOGIES ====================

        technologiesLabel:
            "TECHNOLOGIES",

        technologiesTitle:
            "Les outils que j'utilise.",


        // ==================== PROJETS ====================

        projectsLabel:
            "PROJETS",

        projectsTitle:
            "Quelques solutions que j'ai conçues.",

        projectsDescription:
            "Découvrez quelques projets qui illustrent mon savoir-faire et ma passion pour le développement.",

        projectsAll:
            "Voir tous les projets",

        previousProject:
            "Projet précédent",

        nextProject:
            "Projet suivant",


        // ==================== NZELAPAY ====================

        projectDiscoverNzela:
            "Découvrir NzelaPay",

        projectNzelaCategory:
            "Fintech · Marketplace",

        projectNzelaDescription:
            "Plateforme de paiement et marketplace de produits et services numériques.",


        // ==================== LEMARCHÉ ====================

        projectDiscoverLemarche:
            "Découvrir Lemarché",

        projectLemarcheCategory:
            "Marketplace",

        projectLemarcheDescription:
            "Plateforme mettant en relation vendeurs et acheteurs dans un espace numérique simple.",


        // ==================== SANTÉ ====================

        projectDiscoverHealth:
            "Découvrir la plateforme de santé",

        projectHealthCategory:
            "Santé · Gestion",

        projectHealthDescription:
            "Solution web destinée à la gestion des patients et des activités hospitalières.",


        // ==================== MS AGENCY ====================

        projectDiscoverAgency:
            "Découvrir MS Agency",

        projectAgencyCategory:
            "Digital · Services",

        projectAgencyDescription:
            "Plateforme de services digitaux, création web, marketing et formations.",


        // ==================== EKOLIER ====================

        projectDiscoverEkolier:
            "Découvrir Ekolier",

        projectEkolierCategory:
            "Éducation · Gestion",

        projectEkolierDescription:
            "Plateforme destinée à la gestion scolaire et au suivi des activités éducatives.",


        // ==================== MÉTADONNÉES PROJETS ====================

        webSoftware:
            "Web & Logiciel",

        fintech:
            "Fintech",

        webDevelopment:
            "Développement Web",

        ecommerce:
            "E-commerce",

        dataManagement:
            "Gestion de données",

        health:
            "Santé",

        digitalSolutions:
            "Solutions digitales",

        marketing:
            "Marketing",

        education:
            "Éducation",

        management:
            "Gestion",


        // ==================== CHIFFRES ====================

        statsLabel:
            "MON PARCOURS EN CHIFFRES",

        statsTitle:
            "Des idées transformées en réalisations concrètes.",

        statsProjects:
            "Projets réalisés",

        statsTechnologies:
            "Technologies utilisées",

        statsExpertises:
            "Domaines d'expertise",

        statsPeople:
            "Personnes accompagnées",


        // ==================== CONTACT ====================

        contactLabel:
            "CONTACT",

        contactTitle:
            "vous avez un besoin ?",

        contactDescription:
            "Parlons-en et voyons comment le transformer une solution digitale",

        email:
            "Email",

        phone:
            "Téléphone",

        whatsapp:
            "WhatsApp",

        location:
            "Localisation",

        contactButton:
            "Me contacter",


        // ==================== FOOTER ====================

        footerDescription:
            "Je transforme des idées en solutions digitales concrètes.",

        footerExpertises:
    "Expertises",

footerWeb:
    "Développement Web",

footerDigital:
    "Développement logiciel",

footerManagement:
    "Application métier",

footerApplications:
    "Bases de données",

footerEntrepreneurship:
    "Informatique de gestion",

footerchriffrement:
    "Sécurité et chiffrement",

footerNavigation:
    "Navigation",

footerAccueil:
    "Accueil",

footerApropos:
    "À propos",

footerProjets:
    "Projets",

footerContact:
    "Contact",

footerLegal:
    "Légal",

footerLegalNotice:
    "Mentions légales",

footerPrivacy:
    "Politique de confidentialité",

footerTerms:
    "Conditions d'utilisation",

footerFollow:
    "Suivez-moi",

footerCopyright:
    "© 2026 Stéphane Mwamba. Tous droits réservés.",
        // ==================== AIDE ====================

        helpTitle:
            "Aide",

        helpText1:
            "Bienvenue sur mon portfolio. Utilisez le menu de navigation pour découvrir mon parcours, mes expertises, mes technologies et mes projets.",

        helpText2:
            "Le menu Paramètres vous permet également d'accéder aux différentes fonctionnalités du site.",

        helpOk:
            "J'ai compris",


        // ==================== CHATBOT ====================

        chatbotTitle:
            "Chatbot",

        chatbotWelcome:
            "Bonjour 👋 Je suis l'assistant de Stéphane. Comment puis-je vous aider ?",

        chatbotPlaceholder:
            "Écrivez votre question...",

        chatbotSend:
            "Envoyer",


        // ==================== INFORMATIONS ====================

        informationTitle:
            "Plus d'informations",

        informationDomain:
            "Mon domaine",

        informationDomainText:
            "Développement web, logiciel, solutions digitales et informatique de gestion.",

        informationVision:
            "Ma vision",

        informationVisionText:
            "Transformer des idées et des besoins concrets en solutions digitales utiles.",

        informationPortfolio:
            "Ce portfolio",

        informationPortfolioText:
            "Il présente mon parcours, mes expertises, mes technologies et les projets que j'ai conçus.",


        // ==================== CONFIDENTIALITÉ ====================

        privacyTitle:
            "Confidentialité",

        privacyData:
            "Vos données",

        privacyDataText:
            "Ce portfolio ne demande pas de créer un compte et ne collecte pas de données personnelles simplement lors de la consultation du site.",

        privacyContact:
            "Contact",

        privacyContactText:
            "Lorsque vous utilisez l'adresse email affichée sur le site, les informations sont transmises au service de messagerie utilisé pour envoyer votre message.",

        privacyCookies:
            "Cookies",

        privacyCookiesText:
            "Le site peut utiliser des fonctionnalités techniques nécessaires à son fonctionnement. Aucune utilisation commerciale de vos données n'est prévue dans le cadre de ce portfolio.",

        privacyProtection:
            "Protection",

        privacyProtectionText:
            "La protection des informations des visiteurs constitue une priorité lors de l'évolution du site.",


        // ==================== CONDITIONS ====================

        termsTitle:
            "Conditions d'utilisation",

        termsUse:
            "Utilisation du site",

        termsUseText:
            "Ce portfolio est destiné à présenter le profil, les compétences, les réalisations et les services de Stéphane Mwamba.",

        termsContent:
            "Contenu du portfolio",

        termsContentText:
            "Les textes, éléments graphiques, interfaces et réalisations présentés sur ce site sont destinés à présenter le travail de Stéphane.",

        termsResponsible:
            "Utilisation responsable",

        termsResponsibleText:
            "Il est demandé aux visiteurs de ne pas utiliser le site ou son contenu d'une manière illégale, abusive ou susceptible de nuire au site.",

        termsEvolution:
            "Évolution du site",

        termsEvolutionText:
            "Le contenu et les fonctionnalités du portfolio peuvent évoluer afin d'améliorer l'expérience des visiteurs.",

        termsAccept:
            "Acceptation",

        termsAcceptText:
            "En consultant ce site, vous acceptez de l'utiliser de manière responsable et conformément à sa vocation de portfolio professionnel."

    },


    // =================================================
    // ENGLISH
    // =================================================

    en: {

        // ==================== HEADER ====================

        navHome:
            "Home",

        navAbout:
            "About",

        navExpertises:
            "Expertise",

        navProjects:
            "Projects",

        navContact:
            "Contact",

        settings:
            "Settings",

        language:
            "Language",

        darkMode:
            "Dark mode",

        help:
            "Help",

        chatbot:
            "Chatbot",

        information:
            "More information",

        privacy:
            "Privacy",

        terms:
            "Terms of use",


        // ==================== HERO ====================

        heroTitle:
            "Web & Software Developer",

        heroDescription:
            "I transform your ideas into tailored digital solutions.",

        heroProjects:
            "View my projects →",

        heroContact:
            "Contact me",


        // ==================== ABOUT ====================

        aboutLabel:"ABOUT",
aboutTitle:"I create solutions designed for the real world.",
aboutDescription:"I am Stéphane Mwamba, a web and software developer specialized in digital solutions, management information systems and digital projects. My goal is to transform ideas and concrete needs into useful applications, platforms and digital experiences.",

        // ==================== EXPERTISE ====================

       expertisesLabel:
    "EXPERTISE",

expertisesTitle:
    "What I do",

expertiseWebTitle:
    "Web Development",

expertiseWebDescription:
    "Creation of modern websites, platforms and applications adapted to specific needs.",

expertiseSoftwareTitle:
    "Software Development",

expertiseSoftwareDescription:
    "Design of business applications and tools tailored to the specific needs of organizations.",

expertiseDataTitle:
    "Management Information Systems",

expertiseDataDescription:
    "Design of systems that organize, manage and leverage organizational data and processes.",

expertiseDesignTitle:
    "Databases & Information Systems",

expertiseDesignDescription:
    "Database modeling, implementation, management and structuring for better information management.",

expertiseDigitalTitle:
    "Digital Solutions & Automation",

expertiseDigitalDescription:
    "Design of digital solutions adapted to real-world challenges and automation using AI.",

expertiseMarketingTitle:
    "Security & Encryption",

expertiseMarketingDescription:
    "Protection against malicious attacks and security of data and information.",
        // ==================== TECHNOLOGIES ====================

        technologiesLabel:
            "TECHNOLOGIES",

        technologiesTitle:
            "The tools I work with.",


        // ==================== PROJECTS ====================

        projectsLabel:
            "PROJECTS",

        projectsTitle:
            "Some solutions I have designed.",

        projectsDescription:
            "Discover some projects that showcase my skills and passion for development.",

        projectsAll:
            "View all projects",

        previousProject:
            "Previous project",

        nextProject:
            "Next project",


        // ==================== NZELAPAY ====================

        projectDiscoverNzela:
            "Discover NzelaPay",

        projectNzelaCategory:
            "Fintech · Marketplace",

        projectNzelaDescription:
            "Payment platform and marketplace for digital products and services.",


        // ==================== LEMARCHÉ ====================

        projectDiscoverLemarche:
            "Discover Lemarché",

        projectLemarcheCategory:
            "Marketplace",

        projectLemarcheDescription:
            "Platform connecting sellers and buyers in a simple digital space.",


        // ==================== HEALTH ====================

        projectDiscoverHealth:
            "Discover the healthcare platform",

        projectHealthCategory:
            "Healthcare · Management",

        projectHealthDescription:
            "Web solution designed to manage patients and hospital activities.",


        // ==================== MS AGENCY ====================

        projectDiscoverAgency:
            "Discover MS Agency",

        projectAgencyCategory:
            "Digital · Services",

        projectAgencyDescription:
            "Digital services platform covering web creation, marketing and training.",


        // ==================== EKOLIER ====================

        projectDiscoverEkolier:
            "Discover Ekolier",

        projectEkolierCategory:
            "Education · Management",

        projectEkolierDescription:
            "Platform designed for school management and educational activity tracking.",


        // ==================== PROJECT METADATA ====================

        webSoftware:
            "Web & Software",

        fintech:
            "Fintech",

        webDevelopment:
            "Web Development",

        ecommerce:
            "E-commerce",

        dataManagement:
            "Data Management",

        health:
            "Healthcare",

        digitalSolutions:
            "Digital Solutions",

        marketing:
            "Marketing",

        education:
            "Education",

        management:
            "Management",


        // ==================== STATS ====================

        statsLabel:
            "MY JOURNEY IN NUMBERS",

        statsTitle:
            "Ideas transformed into concrete achievements.",

        statsProjects:
            "Projects completed",

        statsTechnologies:
            "Technologies used",

        statsExpertises:
            "Areas of expertise",

        statsPeople:
            "People supported",


        // ==================== CONTACT ====================

        contactLabel:
            "CONTACT",

        contactTitle:
            "Have an idea?",

        contactDescription:
            "Let's discuss your project and find a digital solution tailored to your needs.",

        email:
            "Email",

        phone:
            "Phone",

        whatsapp:
            "WhatsApp",

        location:
            "Location",

        contactButton:
            "Contact me",


        // ==================== FOOTER ====================

        footerDescription:
            "I transform ideas into concrete digital solutions.",

        footerExpertises:
    "Expertise",

footerWeb:
    "Web Development",

footerDigital:
    "Software Development",

footerManagement:
    "Business Applications",

footerApplications:
    "Databases",

footerEntrepreneurship:
    "Management Information Systems",

footerchriffrement:
    "Security & Encryption",

footerNavigation:
    "Navigation",

footerAccueil:
    "Home",

footerApropos:
    "About",

footerProjets:
    "Projects",

footerContact:
    "Contact",

footerLegal:
    "Legal",

footerLegalNotice:
    "Legal Notice",

footerPrivacy:
    "Privacy Policy",

footerTerms:
    "Terms of Use",

footerFollow:
    "Follow me",

footerCopyright:
    "© 2026 Stéphane Mwamba. All rights reserved.",
        // ==================== HELP ====================

        helpTitle:
            "Help",

        helpText1:
            "Welcome to my portfolio. Use the navigation menu to discover my journey, expertise, technologies and projects.",

        helpText2:
            "The Settings menu also gives you access to the different features of the website.",

        helpOk:
            "Got it",


        // ==================== CHATBOT ====================

        chatbotTitle:
            "Chatbot",

        chatbotWelcome:
            "Hello 👋 I am Stéphane's assistant. How can I help you?",

        chatbotPlaceholder:
            "Write your question...",

        chatbotSend:
            "Send",


        // ==================== INFORMATION ====================

        informationTitle:
            "More information",

        informationDomain:
            "My field",

        informationDomainText:
            "Web and software development, digital solutions and management information systems.",

        informationVision:
            "My vision",

        informationVisionText:
            "Transforming concrete ideas and needs into useful digital solutions.",

        informationPortfolio:
            "This portfolio",

        informationPortfolioText:
            "It presents my journey, expertise, technologies and the projects I have designed.",


        // ==================== PRIVACY ====================

        privacyTitle:
            "Privacy",

        privacyData:
            "Your data",

        privacyDataText:
            "This portfolio does not require an account and does not collect personal data simply when you browse the website.",

        privacyContact:
            "Contact",

        privacyContactText:
            "When you use the email address displayed on the website, the information is transmitted to the email service used to send your message.",

        privacyCookies:
            "Cookies",

        privacyCookiesText:
            "The website may use technical features necessary for its operation. No commercial use of your data is intended as part of this portfolio.",

        privacyProtection:
            "Protection",

        privacyProtectionText:
            "Protecting visitors' information is a priority as the website evolves.",


        // ==================== TERMS ====================

        termsTitle:
            "Terms of use",

        termsUse:
            "Website use",

        termsUseText:
            "This portfolio is intended to present Stéphane Mwamba's profile, skills, achievements and services.",

        termsContent:
            "Portfolio content",

        termsContentText:
            "The texts, graphic elements, interfaces and work presented on this website are intended to showcase Stéphane's work.",

        termsResponsible:
            "Responsible use",

        termsResponsibleText:
            "Visitors are asked not to use the website or its content in an illegal, abusive or harmful manner.",

        termsEvolution:
            "Website evolution",

        termsEvolutionText:
            "The content and features of the portfolio may evolve to improve the visitor experience.",

        termsAccept:
            "Acceptance",

        termsAcceptText:
            "By visiting this website, you agree to use it responsibly and in accordance with its purpose as a professional portfolio."

    }

};


// =====================================================
// FONCTION DE TRADUCTION
// =====================================================

function changeLanguage(language) {

    if (!translations[language]) {
        language = "fr";
    }


    // =================================================
    // TEXTES NORMAUX
    // =================================================

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach((element) => {

        const key =
            element.dataset.i18n;

        const translation =
            translations[language][key];


        if (translation === undefined) {
            return;
        }


        /*
         * Si l'élément contient une icône ou un autre élément HTML,
         * on conserve les éléments HTML et on modifie uniquement
         * le texte.
         */

        const textNodes = [];

        element.childNodes.forEach((node) => {

            if (node.nodeType === Node.TEXT_NODE) {

                textNodes.push(node);

            }

        });


        if (textNodes.length > 0) {

            const lastTextNode =
                textNodes[textNodes.length - 1];

            lastTextNode.textContent =
                " " + translation;

        } else {

            element.textContent =
                translation;

        }

    });


    // =================================================
    // PLACEHOLDERS
    // =================================================

    const placeholders =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    placeholders.forEach((element) => {

        const key =
            element.dataset.i18nPlaceholder;

        if (
            translations[language][key] !== undefined
        ) {

            element.placeholder =
                translations[language][key];

        }

    });


    // =================================================
    // ARIA-LABEL
    // =================================================

    const ariaElements =
        document.querySelectorAll(
            "[data-i18n-aria]"
        );


    ariaElements.forEach((element) => {

        const key =
            element.dataset.i18nAria;

        if (
            translations[language][key] !== undefined
        ) {

            element.setAttribute(
                "aria-label",
                translations[language][key]
            );

        }

    });


    // =================================================
    // LANGUE DU DOCUMENT
    // =================================================

    document.documentElement.lang =
        language;


    // =================================================
    // TITRE DE LA PAGE
    // =================================================

    if (language === "en") {

        document.title =
            "Stéphane Mwamba — Web & Software Developer";

    } else {

        document.title =
            "Stéphane Mwamba — Développeur Web & Logiciel";

    }


    // =================================================
    // MÉMORISER LA LANGUE
    // =================================================

    localStorage.setItem(
        "portfolioLanguage",
        language
    );


    // =================================================
    // BOUTON DE LANGUE ACTIF
    // =================================================

    languageOptions.forEach((option) => {

        option.classList.toggle(
            "active",
            option.dataset.language === language
        );

    });

}


// =====================================================
// BOUTONS DE LANGUE
// =====================================================

const languageOptions =
    document.querySelectorAll(
        ".language-option"
    );


languageOptions.forEach((option) => {

    option.addEventListener("click", () => {

        const language =
            option.dataset.language;

        changeLanguage(language);

    });

});


// =====================================================
// LANGUE SAUVEGARDÉE
// =====================================================

const savedLanguage =
    localStorage.getItem(
        "portfolioLanguage"
    );


if (
    savedLanguage &&
    translations[savedLanguage]
) {

    changeLanguage(savedLanguage);

} else {

    changeLanguage("fr");

}

// =====================================================
// ENVOI DES MESSAGES DU CHATBOT
// =====================================================

const chatbotForm =
    document.getElementById("chatbot-form");

const chatbotInput =
    document.getElementById("chatbot-input");

const chatbotMessages =
    document.querySelector(".chatbot-messages");


if (
    chatbotForm &&
    chatbotInput &&
    chatbotMessages
) {

    chatbotForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const message =
                chatbotInput.value.trim();


            if (message === "") {
                return;
            }


            // Message utilisateur

            const userMessage =
                document.createElement("div");

            userMessage.classList.add(
                "chat-message",
                "user-message"
            );


            const userText =
                document.createElement("p");

            userText.textContent =
                message;


            userMessage.appendChild(
                userText
            );


            chatbotMessages.appendChild(
                userMessage
            );


            chatbotInput.value = "";


            // Indicateur "écrit..."

            const typingMessage =
                document.createElement("div");

            typingMessage.classList.add(
                "chat-message",
                "bot-message",
                "typing-message"
            );


            typingMessage.innerHTML = `
                <span class="chat-message-icon">
                    <i class="fa-solid fa-robot"></i>
                </span>

                <p>
                    <span class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </p>
            `;


            chatbotMessages.appendChild(
                typingMessage
            );


            chatbotMessages.scrollTop =
                chatbotMessages.scrollHeight;


            setTimeout(function () {

                typingMessage.remove();


                const response =
                    getChatbotResponse(message);


                const botMessage =
                    document.createElement("div");


                botMessage.classList.add(
                    "chat-message",
                    "bot-message"
                );


                const botIcon =
                    document.createElement("span");

                botIcon.classList.add(
                    "chat-message-icon"
                );

                botIcon.innerHTML =
                    `<i class="fa-solid fa-robot"></i>`;


                const botText =
                    document.createElement("p");

                botText.textContent =
                    response;


                botMessage.appendChild(
                    botIcon
                );

                botMessage.appendChild(
                    botText
                );


                chatbotMessages.appendChild(
                    botMessage
                );


                chatbotMessages.scrollTop =
                    chatbotMessages.scrollHeight;


            }, 900);


            chatbotMessages.scrollTop =
                chatbotMessages.scrollHeight;

        }
    );

}


// =====================================================
// RÉPONSES AUTOMATIQUES DU CHATBOT
// =====================================================

function getChatbotResponse(message) {

    const question =
        message.toLowerCase();


    const language =
        localStorage.getItem(
            "portfolioLanguage"
        ) || "fr";


    if (
        question.includes("qui es-tu") ||
        question.includes("qui est stéphane") ||
        question.includes("qui est stephane") ||
        question.includes("who are you") ||
        question.includes("who is stephane")
    ) {

        if (language === "en") {

            return "I am the assistant of Stéphane Mwamba's portfolio. Stéphane is a web and software developer who works on digital solutions.";

        }

        return "Je suis l'assistant du portfolio de Stéphane Mwamba. Stéphane est développeur web et logiciel et travaille sur des solutions digitales.";

    }


    if (
        question.includes("projet") ||
        question.includes("projets") ||
        question.includes("project") ||
        question.includes("projects")
    ) {

        if (language === "en") {

            return "Stéphane is working on projects such as NzelaPay, Lemarché, a patient management platform, MS Agency and Ekolier.";

        }

        return "Stéphane travaille notamment sur NzelaPay, Lemarché, une plateforme de gestion des malades, MS Agency et Ekolier.";

    }


    if (
        question.includes("technologie") ||
        question.includes("technologies") ||
        question.includes("langage") ||
        question.includes("technology") ||
        question.includes("technologies") ||
        question.includes("language")
    ) {

        if (language === "en") {

            return "Stéphane works with HTML, CSS, JavaScript, PHP, Python, C#, SQL, Laravel, Django, React, Next.js, MySQL and PostgreSQL.";

        }

        return "Stéphane travaille notamment avec HTML, CSS, JavaScript, PHP, Python, C#, SQL, Laravel, Django, React, Next.js, MySQL et PostgreSQL.";

    }


    if (
        question.includes("service") ||
        question.includes("services") ||
        question.includes("expertise") ||
        question.includes("expertises")
    ) {

        if (language === "en") {

            return "The main areas of expertise are web development, software development, digital solutions, management information systems, business applications and digital marketing.";

        }

        return "Les principales expertises sont le développement web, le développement logiciel, les solutions digitales, l'informatique de gestion, les applications métier et le marketing digital.";

    }


    if (
        question.includes("contact") ||
        question.includes("contacter") ||
        question.includes("email") ||
        question.includes("mail")
    ) {

        if (language === "en") {

            return "You can contact Stéphane by email at stephanemwamba46@gmail.com.";

        }

        return "Vous pouvez contacter Stéphane par email à stephanemwamba46@gmail.com.";

    }


    if (
        question.includes("bonjour") ||
        question.includes("salut") ||
        question.includes("hello") ||
        question.includes("hi")
    ) {

        if (language === "en") {

            return "Hello 👋 Welcome to Stéphane's portfolio. What would you like to discover?";

        }

        return "Bonjour 👋 Ravi de vous accueillir sur le portfolio de Stéphane. Que souhaitez-vous découvrir ?";

    }


    if (language === "en") {

        return "I am still learning 🤖. Try asking me about Stéphane, his projects, technologies, services or contact information.";

    }


    return "Je suis encore en train d'apprendre 🤖. Essayez de me poser une question sur Stéphane, ses projets, ses technologies, ses services ou son contact.";

}


// =====================================================
// PLUS D'INFORMATIONS
// =====================================================

const informationButton =
    document.getElementById("information-button");

const informationModal =
    document.getElementById("information-modal");

const informationClose =
    document.getElementById("information-close");


if (
    informationButton &&
    informationModal
) {

    informationButton.addEventListener(
        "click",
        function () {

            closeMenus();

            informationModal.classList.add(
                "active"
            );

        }
    );

}


if (
    informationClose &&
    informationModal
) {

    informationClose.addEventListener(
        "click",
        function () {

            informationModal.classList.remove(
                "active"
            );

        }
    );

}


if (informationModal) {

    informationModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                informationModal
            ) {

                informationModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =====================================================
// CONFIDENTIALITÉ
// =====================================================

const privacyButton =
    document.getElementById("privacy-button");

const privacyModal =
    document.getElementById("privacy-modal");

const privacyClose =
    document.getElementById("privacy-close");


if (
    privacyButton &&
    privacyModal
) {

    privacyButton.addEventListener(
        "click",
        function () {

            closeMenus();

            privacyModal.classList.add(
                "active"
            );

        }
    );

}


if (
    privacyClose &&
    privacyModal
) {

    privacyClose.addEventListener(
        "click",
        function () {

            privacyModal.classList.remove(
                "active"
            );

        }
    );

}


if (privacyModal) {

    privacyModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                privacyModal
            ) {

                privacyModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =====================================================
// CONDITIONS D'UTILISATION
// =====================================================

const termsButton =
    document.getElementById("terms-button");

const termsModal =
    document.getElementById("terms-modal");

const termsClose =
    document.getElementById("terms-close");


if (
    termsButton &&
    termsModal
) {

    termsButton.addEventListener(
        "click",
        function () {

            closeMenus();

            termsModal.classList.add(
                "active"
            );

        }
    );

}


if (
    termsClose &&
    termsModal
) {

    termsClose.addEventListener(
        "click",
        function () {

            termsModal.classList.remove(
                "active"
            );

        }
    );

}


if (termsModal) {

    termsModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                termsModal
            ) {

                termsModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


// =========================================================
// ANIMATIONS AU SCROLL
// =========================================================

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale"
    );


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


// =========================================================
// SLIDER DES PROJETS
// =========================================================

const projectsSlider = document.getElementById("projects-slider");
const projectsPrev = document.getElementById("projects-prev");
const projectsNext = document.getElementById("projects-next");

if (projectsSlider && projectsPrev && projectsNext) {

    const getProjectScrollAmount = () => {
        const projectCard = projectsSlider.querySelector(".project-card-new");

        if (!projectCard) {
            return 0;
        }

        const cardWidth = projectCard.getBoundingClientRect().width;
        const gap = parseFloat(
            getComputedStyle(projectsSlider).gap
        ) || 0;

        return cardWidth + gap;
    };

    const updateProjectArrows = () => {
        const maxScroll =
            projectsSlider.scrollWidth - projectsSlider.clientWidth;

        projectsPrev.disabled = projectsSlider.scrollLeft <= 5;
        projectsNext.disabled =
            projectsSlider.scrollLeft >= maxScroll - 5;
    };

    projectsNext.addEventListener("click", () => {
        projectsSlider.scrollBy({
            left: getProjectScrollAmount(),
            behavior: "smooth"
        });
    });

    projectsPrev.addEventListener("click", () => {
        projectsSlider.scrollBy({
            left: -getProjectScrollAmount(),
            behavior: "smooth"
        });
    });

    projectsSlider.addEventListener(
        "scroll",
        updateProjectArrows,
        { passive: true }
    );

    window.addEventListener("resize", updateProjectArrows);

    updateProjectArrows();
}

// =========================================================
// ANIMATION DES CHIFFRES
// =========================================================

const statsSection =
    document.querySelector(
        ".stats-section"
    );

const statNumbers =
    document.querySelectorAll(
        ".stat-number"
    );


if (
    statsSection &&
    statNumbers.length
) {

    const statsObserver =
        new IntersectionObserver(
            (entries) => {

                if (
                    entries[0].isIntersecting
                ) {

                    statNumbers.forEach(
                        (number) => {

                            const target =
                                Number(
                                    number.dataset.target
                                );

                            const suffix =
                                number.dataset.suffix ||
                                "";

                            let current = 0;

                            const duration =
                                1200;

                            const startTime =
                                performance.now();


                            function animateNumber(
                                currentTime
                            ) {

                                const progress =
                                    Math.min(
                                        (
                                            currentTime -
                                            startTime
                                        ) / duration,
                                        1
                                    );


                                const ease =
                                    1 -
                                    Math.pow(
                                        1 - progress,
                                        3
                                    );


                                current =
                                    Math.floor(
                                        target * ease
                                    );


                                number.textContent =
                                    current + suffix;


                                if (
                                    progress < 1
                                ) {

                                    requestAnimationFrame(
                                        animateNumber
                                    );

                                } else {

                                    number.textContent =
                                        target + suffix;

                                }

                            }


                            requestAnimationFrame(
                                animateNumber
                            );

                        }
                    );

                }

            },
            {
                threshold: 0.35
            }
        );


    statsObserver.observe(
        statsSection
    );

}
// =========================================================
// LIENS LÉGAUX DU FOOTER
// =========================================================

const footerInformationLink =
    document.getElementById("footer-information-link");

const footerPrivacyLink =
    document.getElementById("footer-privacy-link");

const footerTermsLink =
    document.getElementById("footer-terms-link");


if (footerInformationLink) {

    footerInformationLink.addEventListener("click", (event) => {

        event.preventDefault();

        const modal =
            document.getElementById("information-modal");

        if (modal) {
            modal.classList.add("active");
        }

    });

}


if (footerPrivacyLink) {

    footerPrivacyLink.addEventListener("click", (event) => {

        event.preventDefault();

        const modal =
            document.getElementById("privacy-modal");

        if (modal) {
            modal.classList.add("active");
        }

    });

}


if (footerTermsLink) {

    footerTermsLink.addEventListener("click", (event) => {

        event.preventDefault();

        const modal =
            document.getElementById("terms-modal");

        if (modal) {
            modal.classList.add("active");
        }

    });

}