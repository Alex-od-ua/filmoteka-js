!function(){var e=document.querySelector("body"),t=document.querySelector("footer");document.querySelector(".change-color__wrap").addEventListener("click",(function(o){e.classList.contains("light-color-theme")&&t.classList.contains("light-color-theme")?(e.classList.remove("light-color-theme"),t.classList.remove("light-color-theme"),e.classList.add("dark-color-theme"),t.classList.add("dark-color-theme")):(e.classList.remove("dark-color-theme"),t.classList.remove("dark-color-theme"),e.classList.add("light-color-theme"),t.classList.add("light-color-theme"));localStorage.setItem("theme",e.classList)}));var o=localStorage.getItem("theme");o?(e.classList=o,t.classList=o):(o="dark-color-theme",t.classList.add("dark-color-theme"),e.classList.add("dark-color-theme"))}();
//# sourceMappingURL=library.0e6d7976.js.map