if (!window.WebFontConfig) {
  window.WebFontConfig = {};
  (() => {
    const wf = document.createElement("script");
    wf.src = (document.location.protocol === "https:" ? "https" : "http") +
      "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();
}

export const webfontLoader = {
  add: (vendor, family, key) => {
    const vendorCfg = window.WebFontConfig[vendor] || {};
    vendorCfg.families = vendorCfg.families || [];
    vendorCfg.families.push(family);
    if (key) {
      vendorCfg.key = key;
    }
    window.WebFontConfig[vendor] = vendorCfg;
  }
};

