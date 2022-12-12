(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var a=t(81),r=t.n(a),o=t(645),i=t.n(o)()(r());i.push([n.id,'* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\nhtml, body {\n  height: 100%;\n}\n\nnav {\n  background-color: #202124;\n  padding: 2% 10%;\n  display: flex;\n  gap: 30px;\n  border-bottom: 1px solid #3c4043;\n}\n\ninput[type="text"] {\n  border-radius: 10px;\n  width: 300px;\n  padding: 2px 10px;\n}\n\ninput[type="submit"] {\n  margin-left: 20px;\n  letter-spacing: 2px;\n  cursor: pointer;\n}\n\n.logo {\n  color: white;\n\n}\n\n.material-symbols-outlined {\n  color: black;\n}\n\n.searchbar {\n  display: flex;;\n  position: relative;\n}\n\n.searchbar  > span {\n  position: absolute;\n  right: 10px;\n  cursor: pointer;\n}\n\n.container {\n  background-color: #202124;\n}\n\n.info {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 4% 10px;\n  gap: 30px;\n  color: white;\n  height: 100%;\n}\n\n.temp_container {\n  display: flex;\n}\n\n.temp_container > p {\n  font-size: 80px;\n  display: flex;\n}\n\n.temp_container > p > span {\n  font-size: 16px;\n}\n\n\n.more_infos_container {\n  display: flex;\n  flex-direction: column;\n  font-size: 12px;\n  gap: 2px;\n}\n\n.local_container {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n\n.condition_container {\n  padding: 12px 0 ;\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  align-self: flex-end;\n}',""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);a&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],d=a.base?s[0]+a.base:s[0],p=o[d]||0,l="".concat(d," ").concat(p);o[d]=p+1;var u=t(l),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,a);a.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}i.push(l)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=a(n,r),d=0;d<o.length;d++){var p=t(o[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=s}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},359:(n,e,t)=>{async function a(){const n=document.getElementById("search").value,e=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${n}&lang=pt_br&appid=2144e421c9953a56a184bb6357108695`),t=await e.json(),a=t.sys.country,r=await fetch(`https://restcountries.com/v3.1/alpha/${a}`);return{data:t,country_name:(await r.json())[0].altSpellings[1]}}async function r(){return`https://www.countryflagicons.com/FLAT/64/${(await a()).data.sys.country}.png`}t.d(e,{Z:()=>a,r:()=>r})}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),i=t.n(o),c=t(565),s=t.n(c),d=t(216),p=t.n(d),l=t(589),u=t.n(l),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var h=t(359);function v(){const n=document.createElement("link");return n.href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",n.rel="stylesheet",n}async function x(){const n=document.getElementsByClassName("container")[0],e=document.createElement("div"),t=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("img"),i=await(0,h.r)(),c=document.createElement("p"),s=await(0,h.Z)(),d=s.data.main,p=parseInt(d.temp-273.15),l=parseInt(d.temp_max-273.15),u=parseInt(d.temp_min-273.15),m=parseInt(d.feels_like-273.15),f=d.humidity,v=document.createElement("p"),x=document.createElement("p"),y=document.createElement("p"),g=document.createElement("p"),C=document.createElement("p"),b=document.createElement("p"),E=document.createElement("span"),w=s.data.name,_=s.data.sys.country,L=s.data.weather[0].description;console.log(s.data),n.innerHTML=null,n.classList.add("info"),o.src=i,c.textContent=`${w} - ${_}`,v.textContent=`${p}`,E.textContent="°C",x.textContent=`Temperatura máxima: ${l}°C`,y.textContent=`Temperatura mínima: ${u}°C`,g.textContent=`Sensação térmica: ${m}°C`,C.textContent=`Umidade do ar: ${f}%`,b.textContent=L,e.classList.add("temp_container"),t.classList.add("more_infos_container"),a.classList.add("local_container"),r.classList.add("condition_container"),v.appendChild(E),e.appendChild(v),t.appendChild(x),t.appendChild(y),t.appendChild(g),t.appendChild(C),r.appendChild(c),r.appendChild(b),a.appendChild(o),a.appendChild(r),n.appendChild(e),n.appendChild(t),n.appendChild(a)}!function(){document.head.appendChild(v());const n=function(){const n=function(){const n=document.createElement("nav"),e=document.createElement("h1");return e.textContent="Como está o tempo?",e.classList.add("logo"),n.appendChild(e),n.appendChild(function(){const n=document.createElement("div"),e=document.createElement("input"),t=document.createElement("span");return n.classList.add("searchbar"),e.type="text",e.id="search",e.placeholder="Digite o nome de uma cidade",t.classList.add("material-symbols-outlined"),t.textContent="search",e.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),t.click())})),t.addEventListener("click",x),n.appendChild(e),n.appendChild(t),n}()),n}(),e=function(){const n=document.createElement("div");return n.classList.add("container"),n}();return v(),[n,e]}();for(const e of n)document.body.appendChild(e)}()})()})();