const e=document.querySelector(".btn-js-pause"),t=document.querySelector(".btn-js-play");t.style.display="none";class r{events(){e.addEventListener("click",(r=>{r.currentTarget&&(this.speed=0,e.style.display="none",t.style.display="flex")})),t.addEventListener("click",(r=>{r.currentTarget&&(this.speed=.07,t.style.display="none",e.style.display="flex")}))}lerpFunc(e,t,r){this.lerp.current=e*(1-r)+t*r}forward(){this.lerp.target+=this.speed,this.lerp.target>100&&(this.lerp.current-=200,this.lerp.target-=200)}animate(){this.forward(),this.lerpFunc(this.lerp.current,this.lerp.target,this.lerp.ease),this.element.style.transform=`translateX(${this.lerp.current}%)`}render(){this.animate(),window.requestAnimationFrame((()=>this.render()))}constructor(e,t,r){this.element=e,this.currentTranslation=t,this.speed=r,this.direction=!0,this.lerp={current:this.currentTranslation,target:this.currentTranslation,ease:.1},this.events(),this.render()}}let s=document.querySelectorAll(".dynamic__gallery__wrapper");new r(s[0],0,.07),new r(s[1],-100,.07);
//# sourceMappingURL=index.d0d3e92a.js.map
