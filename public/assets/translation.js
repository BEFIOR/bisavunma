function TranslateInit() {
  if (!window.__GOOGLE_TRANSLATION_CONFIG__) {
    return;
  }

  // Safari için ek kontrol
  if (typeof google === "undefined" || !google.translate) {
    setTimeout(TranslateInit, 100);
    return;
  }

  new google.translate.TranslateElement({
    pageLanguage: "tr",
    includedLanguages: "tr,en,ar,de,es,fr",
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false,
    multilanguagePage: true,
    gaTrack: false,
    gaId: null,
  });
}
