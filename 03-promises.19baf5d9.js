!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6JpON");var r=document.querySelector(".form"),i=(document.querySelector('button[type="submit"]'),document.querySelector('input[name="amount"]')),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]');function l(e){var n=e.position,o=e.delay;return new Promise((function(e,t){var r=Math.random()>.3;setTimeout((function(){r?e({position:n,delay:o}):t({position:n,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(i.value),o=Number(u.value),t=Number(a.value),r=1;r<=n;r+=1)l({position:r,delay:o}).then((function(e){var n=e.position,o=e.delay;console.log("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("Rejected promice ".concat(n," in ").concat(o,"ms"))})),o+=t}))}();
//# sourceMappingURL=03-promises.19baf5d9.js.map
