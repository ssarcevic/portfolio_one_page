function dropdownMenu(){var e=document.querySelector(".burger"),t=document.querySelector(".menu"),o=document.querySelector(".menu__nav"),n=document.querySelector(".burger__middle");e.addEventListener("click",function(){e.classList.toggle("close"),n.classList.toggle("hidden"),o.classList.toggle("open"),t.classList.toggle("menu-fixed")}),o.addEventListener("click",function(){e.classList.toggle("close"),n.classList.toggle("hidden"),o.classList.toggle("open"),t.classList.toggle("menu-fixed")})}function slider(){var e,t=document.querySelectorAll(".projects__box-img"),o=0;function n(){e=setInterval(function(){0<t.length&&(t[o].classList.remove("preview"),--o<0&&(o--,o=3)),t[o].classList.add("preview")},3e3)}window.addEventListener("load",n()),n(),clearInterval(e)}function scroll(){document.querySelector(".button-up").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})})}document.querySelector(".burger")&&dropdownMenu(),document.querySelector(".projects__box-img")&&slider(),scroll();