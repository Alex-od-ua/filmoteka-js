!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o.register("UL92Z",(function(t,n){e(t.exports,"getLocalSt",(function(){return r})),e(t.exports,"setLocalSt",(function(){return i}));var r=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Error",e)}},i=function(e,t){try{var n=JSON.stringify(t);return localStorage.setItem(e,n)}catch(e){console.log("Error",e)}}})),o("iE7OH").register(JSON.parse('{"2Y0K8":"library.445828b9.js","8nR3u":"BOX.7c8e27d0.jpg","5UbS1":"index.bb890d28.css","2hvCh":"index.f5fe4e5f.js"}'));var c,a=o("8nrFW");c=o("aNJCr").getBundleURL("2Y0K8")+o("iE7OH").resolve("8nR3u");var l=o("UL92Z"),s=o("6JpON"),u="watched",f="queue",d=document.querySelector(".watched-btn"),g=document.querySelector(".queue-btn"),v=document.querySelector(".film-list"),m=document.querySelector(".gallery-library"),h=document.querySelector(".error-div");d.focus();var p=function(e){var t=e.map((function(e){return function(e){var t=e.poster_path,n=e.original_name,r=e.release_date,i=e.genres,o=e.first_air_date,a=e.id,l=e.original_title;e.vote_average,""===r&&(r="no relase date"),void 0===r&&(r=o),void 0===n&&(n=l);var s=r.slice(0,4);console.log(s);var u=i.map((function(e){return e.name}));return null===t?'<li class="film-item list" id="'.concat(a,'">\n    <div class="films">\n      <img class="film-img" src="').concat(c.imgTemplate,'">\n      <h2 class="film-title">').concat(n,'</h2>\n      <h3 class="film-genre">').concat(u.length>2?u.slice(0,2).join(", ")+"...":u," | ").concat(s,"</h3>\n    </div>\n    </li>"):'<li class="film-item list" id="'.concat(a,'">\n    <div class="films">\n      <img class="film-img" src="https://image.tmdb.org/t/p/w500/').concat(t,'">\n      <h2 class="film-title">').concat(n,'</h2>\n      <h3 class="film-genre">').concat(u.length>2?u.slice(0,2).join(", ")+"...":u," | ").concat(s,"</h3>\n    </div>\n    </li>")}(e)})).join("");v.insertAdjacentHTML("beforeend",t)};if((0,l.getLocalSt)(u)){m.classList.remove("empty"),v.innerHTML="";var L=t(a)((0,l.getLocalSt)(u));p(L)}((0,l.getLocalSt)(u).every((function(e){return 0===e.length}))||(0,l.getLocalSt)(f).every((function(e){return 0===e.length})))&&m.classList.add("empty"),m.classList.contains("empty")?h.classList.remove("is-hidden"):h.classList.add("is-hidden");d.addEventListener("click",(function(){v.innerHTML="";var e=t(a)((0,l.getLocalSt)(u));p(e),t(s).Notify.info("Let's see what we have in watched...")})),g.addEventListener("click",(function(){v.innerHTML="";var e=t(a)((0,l.getLocalSt)(f));p(e),t(s).Notify.info("Let's see what we have in queue...")}))}();
//# sourceMappingURL=library.445828b9.js.map