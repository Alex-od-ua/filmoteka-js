const e=document.querySelector("body"),t=document.querySelector("footer");document.querySelector(".change-color__wrap").addEventListener("click",(function(s){e.classList.contains("light-color-theme")&&t.classList.contains("light-color-theme")?(e.classList.remove("light-color-theme"),t.classList.remove("light-color-theme"),e.classList.add("dark-color-theme"),t.classList.add("dark-color-theme")):(e.classList.remove("dark-color-theme"),t.classList.remove("dark-color-theme"),e.classList.add("light-color-theme"),t.classList.add("light-color-theme"));localStorage.setItem("theme",e.classList)}));const s=localStorage.getItem("theme");s?(e.classList=s,t.classList=s):(s="dark-color-theme",t.classList.add("dark-color-theme"),e.classList.add("dark-color-theme"));
//# sourceMappingURL=library.b00ab3d4.js.map