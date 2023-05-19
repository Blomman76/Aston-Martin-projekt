let knapp = document.getElementById("knapp");
let rabatt = document.getElementById("Rabatt");

knapp.addEventListener("click", ()=>{
  rabatt.insertAdjacentHTML("beforeend", `<div>Rabattkod: HejaLinus! , på alla butiker i Stockholm</div>`)
})

// _______________________________

L.mapbox.accessToken = 'pk.eyJ1IjoiYmxvbW1hbjI0IiwiYSI6ImNsaG01em42ajB1N3czZW9wZG9nYTNseGQifQ.uU567uzw4uTN_33G7-Md1g';
var map = L.mapbox.map('map')
    .setView([59.4, 17.9], 9)
    .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));