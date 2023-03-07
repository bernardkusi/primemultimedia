let bars = document.getElementsByClassName("bars")[0];
let nav = document.getElementsByTagName("nav")[0];

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})