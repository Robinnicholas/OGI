function lazyload(){const e=document.querySelectorAll("img"),t=new IntersectionObserver((e,r)=>{e.forEach(e=>{var t;e.isIntersecting&&(t=e.target.getAttribute("data-src"),e.target.setAttribute("src",t),e.target.classList.add("fadein"),r.unobserve(e.target))})});e.forEach(e=>{t.observe(e)})}function textAnimation(){const e=document.querySelector(".fancy"),t=e.textContent,r=t.split("");e.textContent="";for(var s of r)e.innerHTML+=`<span>${s}</span>`;let a=0,n=setInterval(()=>{const e=document.querySelectorAll(".hero-content span")[a];e.classList.add("fade"),a++,a===r.length&&(clearInterval(n),n=null)},100)}function navigation(){const e=document.querySelector(".burger");e.addEventListener("click",()=>{let e=document.querySelector(".nav-bar");return e.classList.toggle("show-on-mobile")})}function headerScroll(){window.addEventListener("scroll",()=>{let e=document.querySelector("header");return 43<window.scrollY?e.classList.add("add-bg"):e.classList.remove("add-bg")})}function progress(){let e=document.querySelector(".progress>ul"),t=document.querySelector(".col-right"),r=0;setInterval(()=>{r+=1,1==r?(e.classList.add("ready"),t.classList.add("ready")):2==r?(e.classList.replace("ready","started"),t.classList.replace("ready","started")):3==r?(e.classList.replace("started","event-one"),t.classList.replace("started","event-one")):4==r?(e.classList.replace("event-one","event-two"),t.classList.replace("event-one","event-two")):5==r&&(e.classList.replace("event-two","ended"),t.classList.replace("event-two","ended")),5<r&&(r=0,e.classList.replace("ended","ready"),t.classList.replace("ended","ready"))},5e3)}window.addEventListener("load",()=>{navigation(),headerScroll(),progress(),textAnimation(),lazyload()});