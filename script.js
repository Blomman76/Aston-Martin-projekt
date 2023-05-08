const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", ()=>{
  console.log("hamburger")
  hamburger.classList.toggle("active")
  menu.classList.toggle("active")
})