import{S as l}from"./assets/vendor-8e3c971e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();var n=document.getElementById("header");window.addEventListener("scroll",function(){window.scrollY>0?n.classList.add("scrolled"):n.classList.remove("scrolled")});window.addEventListener("scroll",function(){document.querySelectorAll(".header-nav-a, .menu-nav-a").forEach(r=>{const i=r.getAttribute("href").substring(1),o=document.getElementById(i);if(o){const e=o.offsetTop,t=e+o.clientHeight,s=window.scrollY+1;s>=e&&s<t?r.classList.add("active"):r.classList.remove("active")}})});new l(".swiper",{slidersPerView:3,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".btn-prevt",prevEl:".btn-next"},breakpoints:{1280:{slidesPerView:4},768:{slidesPerView:3},320:{slidesPerView:2}}});
//# sourceMappingURL=commonHelpers.js.map
