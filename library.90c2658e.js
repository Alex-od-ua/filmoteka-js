!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"jTXyS":"library.90c2658e.js","8nR3u":"BOX.7c8e27d0.jpg","85d9N":"index.63bf67bb.js"}'));var i,l=a("bpxeT"),c=a("8nrFW"),s=a("2TvXO"),d=a("UL92Z");i=a("aNJCr").getBundleURL("jTXyS")+a("iE7OH").resolve("8nR3u");var r=a("6JpON"),f=document.querySelector(".film-list"),u=document.querySelector("[data-modal-close]");document.querySelector("[data-modal]"),document.querySelector("body"),document.querySelector(".card-list");f.addEventListener("click",(function(e){console.log(e.target.closest(".film-item"));var t=e.target.closest(".film-item").id;v(),fetchFilmInfo(t).then(p).catch(m)})),u.addEventListener("click",v);function p(t){var n,o,a,f,u,p,m,v,_,y;console.log(t.data),refs.cardList.innerHTML=(n=t.data,o=n.original_title,a=void 0===o?"no data":o,f=n.vote_average,u=n.vote_count,p=n.popularity,m=n.genres,v=n.overview,_=void 0===v?"no data":v,y=n.poster_path,'<li class="modal_card_container list">\n    <div class="modal_pict_container">\n        <img class="film-img" loading="lazy"\n         src="'.concat(null===y?e(i):"https://image.tmdb.org/t/p/w500/"+y,'">\n    </div>\n\n    <div class="modal_text_container">\n    \n        <h2 class="film_title">').concat(a,'</h2>\n\n        <ul class="modal_filminfo list">\n            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">').concat(f.toFixed(1),"</span> / ").concat(u,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(p,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">').concat(a,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(0===m.length?"no data":m.map((function(e){return e.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal_text_container-about to-upercase">About</h3>\n        <p class="modal_text_container-overwiew">').concat(_,'</p>\n       \n\n        <div class="modal_btn_container">\n            \n            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>'));var w,L,b="watched",S="queue",x=t.data,E=document.querySelector(".add-queue-btn"),q=document.querySelector(".add-watched-btn"),O=[],T=x,R=[],k=x;function C(){return(C=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){q.textContent="Remove from watched",q.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){E.textContent="Remove from queue",E.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){q.textContent="Add to watched",q.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=e(l)(e(s).mark((function t(){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){E.textContent="Add to queue",E.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}(0,d.getLocalSt)(b)||(0,d.setLocalSt)(b,[]),(0,d.getLocalSt)(S)||(0,d.setLocalSt)(S,[]),(0,d.getLocalSt)(b).find((function(e){return e.id===x.id}))&&(q.textContent="Remove from watched",q.classList.add("active")),(0,d.getLocalSt)(S).find((function(e){return e.id===x.id}))&&(E.textContent="Remove from queue",E.classList.add("active"));q.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),q.classList.contains("active")){var n;console.log(x.id),(n=O=[]).push.apply(n,e(c)((0,d.getLocalSt)(b)));var o=O.indexOf(x.id);return O.splice(o,1),w=JSON.stringify(O),localStorage.setItem(b,w),console.log(w),e(r).Notify.failure("Removed from watched"),q.classList.remove("active"),q.textContent="Removed from watched",q.disabled=!0,void function(){N.apply(this,arguments)}()}var a;(a=O=[]).push.apply(a,e(c)((0,d.getLocalSt)(b))),O.push(T),w=(0,d.setLocalSt)(b,O),console.log(O),q.textContent="Added from watched",q.disabled=!0,function(){C.apply(this,arguments)}(),q.classList.add("active")})),E.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),E.classList.contains("active")){var n;console.log(x.id),(n=R=[]).push.apply(n,e(c)((0,d.getLocalSt)(S)));var o=R.indexOf(x.id);R.splice(o,1);var a=JSON.stringify(R);localStorage.setItem(S,a),console.log(a),e(r).Notify.failure("Removed from queue"),E.classList.remove("active"),E.textContent="Removed from queue",E.disabled=!0,function(){H.apply(this,arguments)}()}else{var i;(i=R=[]).push.apply(i,e(c)((0,d.getLocalSt)(S))),R.push(k),L=JSON.stringify(R),localStorage.setItem("queue",L),console.log(L),E.textContent="Added from queue",E.disabled=!0,function(){A.apply(this,arguments)}(),E.classList.add("active")}})),window.addEventListener("keydown",g),refs.modal.addEventListener("click",h)}function m(e){console.log(e),window.addEventListener("keydown",g),refs.modal.addEventListener("click",h)}function v(){refs.modal.classList.toggle("is-hidden"),refs.modalBody.classList.toggle("no-scroll")}function g(e){"Escape"===e.code&&(v(),_())}function h(e){e.currentTarget===e.target&&(v(),_())}function _(){window.removeEventListener("keydown",g),refs.modal.removeEventListener("click",h)}}();
//# sourceMappingURL=library.90c2658e.js.map