!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");n.disabled=!0,e.addEventListener("click",(function(){n.disabled=!1,e.disabled=!0,t.style.backgroundColor=d(),a=setInterval((function(){t.style.backgroundColor=d()}),1e3)}));var a=null;function d(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}n.addEventListener("click",(function(){clearInterval(a),e.disabled=!1,n.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.7b3fe192.js.map