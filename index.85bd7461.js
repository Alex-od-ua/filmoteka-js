!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"hG2aI":"index.85bd7461.js","jujyw":"image template.e7ffa475.jpg","5UbS1":"index.bb890d28.css"}'));var a,l=i("bpxeT"),s=i("8nrFW"),c=i("2TvXO"),r=i("fSCrk"),d=i("lGS20");a=i("aNJCr").getBundleURL("hG2aI")+i("iE7OH").resolve("jujyw");i("4dnvg");var f=function(e){try{var t=localStorage.getItem(e);return JSON.parse(t)}catch(e){console.log("Error",e)}},u=function(e,t){try{var n=JSON.stringify(t);return localStorage.setItem(e,n)}catch(e){console.log("Error",e)}},p=i("6JpON");function m(t){var n,o,i,d,m,v,g,w,y,b;console.log(t.data),r.refs.cardList.innerHTML=(n=t.data,o=n.original_title,i=void 0===o?"no data":o,d=n.vote_average,m=n.vote_count,v=n.popularity,g=n.genres,w=n.overview,y=void 0===w?"no data":w,b=n.poster_path,'<li class="modal_card_container list">\n    <div class="modal_pict_container">\n        <img class="film-img" loading="lazy"\n         src="'.concat(null===b?e(a):"https://image.tmdb.org/t/p/w500/"+b,'">\n    </div>\n\n    <div class="modal_text_container">\n    \n        <h2 class="film_title">').concat(i,'</h2>\n\n        <ul class="modal_filminfo list">\n            <li class="filminfo_left"><p class="modal_filminfo-data">Vote / Votes</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data"><span class="vote_highlighted">').concat(d.toFixed(1),"</span> / ").concat(m,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Popularity</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(v,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Original Title</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data to-upercase">').concat(i,'</p></li>\n\n            <li class="filminfo_left"><p class="modal_filminfo-data">Genre</p></li>\n            <li class="filminfo_right"><p class="modal_filminfo-data">').concat(0===g.length?"no data":g.map((function(e){return e.name})).join(", "),'</p></li>\n        </ul>\n\n        <h3 class="modal_text_container-about to-upercase">About</h3>\n        <p class="modal_text_container-overwiew">').concat(y,'</p>\n       \n\n        <div class="modal_btn_container">\n            \n            <button class="add-watched-btn btn" type="button">ADD TO WATCHED</button>\n            <button class="add-queue-btn btn" type="button">ADD TO QUEUE</button> \n        </div>\n    </div>\n</li>'));var x,L,E="watched",S="queue",O=t.data,k=document.querySelector(".add-queue-btn"),T=document.querySelector(".add-watched-btn"),q=[],C=O,R=[],N=O;function A(){return(A=e(l)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){T.textContent="Remove from watched",T.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=e(l)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){k.textContent="Remove from queue",k.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=e(l)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){T.textContent="Add to watched",T.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=e(l)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){k.textContent="Add to queue",k.disabled=!1}),1e3);case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}f(E)||u(E,[]),f(S)||u(S,[]),f(E).find((function(e){return e.id===O.id}))&&(T.textContent="Remove from watched",T.classList.add("active")),f(S).find((function(e){return e.id===O.id}))&&(k.textContent="Remove from queue",k.classList.add("active"));T.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),T.classList.contains("active")){var n;console.log(O.id),(n=q=[]).push.apply(n,e(s)(f(E)));var o=q.indexOf(O.id);return q.splice(o,1),x=JSON.stringify(q),localStorage.setItem(E,x),console.log(x),e(p).Notify.failure("Removed from watched"),T.classList.remove("active"),T.textContent="Removed from watched",T.disabled=!0,void function(){D.apply(this,arguments)}()}var i;(i=q=[]).push.apply(i,e(s)(f(E))),q.push(C),x=u(E,q),console.log(q),T.textContent="Added from watched",T.disabled=!0,function(){A.apply(this,arguments)}(),T.classList.add("active")})),k.addEventListener("click",(function(t){if(console.log("hello!"),t.preventDefault(),k.classList.contains("active")){var n;console.log(O.id),(n=R=[]).push.apply(n,e(s)(f(S)));var o=R.indexOf(O.id);R.splice(o,1);var i=JSON.stringify(R);localStorage.setItem(S,i),console.log(i),e(p).Notify.failure("Removed from queue"),k.classList.remove("active"),k.textContent="Removed from queue",k.disabled=!0,function(){I.apply(this,arguments)}()}else{var a;(a=R=[]).push.apply(a,e(s)(f(S))),R.push(N),L=JSON.stringify(R),localStorage.setItem("queue",L),console.log(L),k.textContent="Added from queue",k.disabled=!0,function(){H.apply(this,arguments)}(),k.classList.add("active")}})),window.addEventListener("keydown",h),r.refs.modal.addEventListener("click",_)}function v(e){console.log(e),window.addEventListener("keydown",h),r.refs.modal.addEventListener("click",_)}function g(){r.refs.modal.classList.toggle("is-hidden"),r.refs.modalBody.classList.toggle("no-scroll")}function h(e){"Escape"===e.code&&(g(),w())}function _(e){e.currentTarget===e.target&&(g(),w())}function w(){window.removeEventListener("keydown",h),r.refs.modal.removeEventListener("click",_)}console.log(r.refs),r.refs.list.addEventListener("click",(function(e){console.log(e.target.closest(".film-item"));var t=e.target.closest(".film-item").id;g(),(0,d.fetchFilmInfo)(t).then(m).catch(v)})),r.refs.closeModalBtn.addEventListener("click",g)}();
//# sourceMappingURL=index.85bd7461.js.map
