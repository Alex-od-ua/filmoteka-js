!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var s=i("8MBJY"),l=i("a2hTj"),a=document.querySelector(".btn-js-pause"),u=document.querySelector(".btn-js-play");u.style.display="none";var o=function(){"use strict";function t(r,n,i){e(s)(this,t),this.element=r,this.currentTranslation=n,this.speed=i,this.direction=!0,this.lerp={current:this.currentTranslation,target:this.currentTranslation,ease:.1},this.events(),this.render()}return e(l)(t,[{key:"events",value:function(){var e=this;a.addEventListener("click",(function(t){t.currentTarget&&(e.speed=0,a.style.display="none",u.style.display="flex")})),u.addEventListener("click",(function(t){t.currentTarget&&(e.speed=.07,u.style.display="none",a.style.display="flex")}))}},{key:"lerpFunc",value:function(e,t,r){this.lerp.current=e*(1-r)+t*r}},{key:"forward",value:function(){this.lerp.target+=this.speed,this.lerp.target>100&&(this.lerp.current-=200,this.lerp.target-=200)}},{key:"animate",value:function(){this.forward(),this.lerpFunc(this.lerp.current,this.lerp.target,this.lerp.ease),this.element.style.transform="translateX(".concat(this.lerp.current,"%)")}},{key:"render",value:function(){var e=this;this.animate(),window.requestAnimationFrame((function(){return e.render()}))}}]),t}(),c=document.querySelectorAll(".dynamic__gallery__wrapper");new o(c[0],0,.07),new o(c[1],-100,.07)}();
//# sourceMappingURL=index.50c26dc4.js.map
