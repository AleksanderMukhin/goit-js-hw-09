function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");document.querySelector('button[type="submit"],[textContent="Create promises"]');const a=document.querySelector(".form"),l=a.querySelector('[name="amount"]'),u=a.querySelector('[name="delay"]'),s=a.querySelector('[name="step"]');function d(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}a.addEventListener("submit",(t=>{t.preventDefault();const n=parseInt(l.value),o=parseInt(u.value),r=parseInt(s.value);if(n<=0||o<=0||r<=0)return e(i).Notify.info("Enter a value greater than 0");for(let t=1;t<=n;t+=1)d(t,o+(t-1)*r).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.d22ad72d.js.map