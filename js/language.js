const supportedLangs = ["en", "de", "fr", "es", "ja", "pt"];

const urlParams = new URLSearchParams(window.location.search);
let lang = urlParams.get("lang");

if (!lang) {
    lang = navigator.language.slice(0, 2);
}

if (!supportedLangs.includes(lang)) {
    lang = "en";
}

fetch(`static/languageAssets/${lang}.json`)
    .then(response => response.json())
    .then(dict => {
        applyTranslations(dict);
        document.fonts.ready.then(() => {
            adjustBestOfferText();
        });
    });


function applyTranslations(dict) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        let text = dict[key] || key;

        if (el.classList.contains("btn-text-left-subtitle")) {
            text = text.replace("{{price}}", "$39.99");
        }
        else if (el.classList.contains("btn-text-price-per-week")) {
            text = text.replace("{{price}}", "$0.48");
        }
        else if (el.classList.contains("weekly-btn-text-right")) {
            text = text.replace("{{price}}", "$6.99");
        }

        el.innerHTML = text;
    });
}

if (lang === "ja") {
    document.querySelectorAll(".yearly-btn-text-left, .yearly-btn-text-right")
        .forEach(el => el.classList.add("lang-ja"));
} else {
    document.querySelectorAll(".yearly-btn-text-left, .yearly-btn-text-right")
        .forEach(el => el.classList.remove("lang-ja"));
}