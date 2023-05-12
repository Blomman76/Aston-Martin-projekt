let knapp = document.getElementById("knapp");
let rabatt = document.getElementById("Rabatt");



knapp.addEventListener("click", ()=>{
  rabatt.insertAdjacentHTML("beforeend", `<div>Du har rabatt på 20% och din rabattkod är: Heja Linus!</div>`)
})