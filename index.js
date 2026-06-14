import{a as m,S as d,i as p}from"./assets/vendor-CIF6YjI2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="56253935-84605c6ab25f84a7284cdd72a",g="https://pixabay.com/api/";async function h(s){const o=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await m.get(`${g}?${o}`)).data}catch(t){console.error("Error fetching images:",t)}}const l=document.querySelector(".gallery"),n=document.querySelector(".loader"),b=new d(".gallery-link",{captionsData:"alt",captionDelay:250});function L(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img 
            class="gallery-image" 
            src="${t}" 
            alt="${e}" 
            loading="lazy" 
          />
        </a>
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${r}</p>
          <p class="info-item"><b>Views:</b> ${i}</p>
          <p class="info-item"><b>Comments:</b> ${u}</p>
          <p class="info-item"><b>Downloads:</b> ${f}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),b.refresh()}function $(){l.innerHTML=""}function S(){n&&n.classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",s=>{s.preventDefault();const o=event.currentTarget.elements["search-text"].value.trim();$(),h(o).then(t=>{if(t.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(t.hits),c.reset()}).catch(t=>{console.log(t)}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
