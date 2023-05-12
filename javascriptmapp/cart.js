let cartDiv = document.getElementById("cart")

//localStorage.getItem("nyckel") hämtar värdet på det som sparats i LocalStorage med nyckeln "nyckel".
// JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
let products = JSON.parse(localStorage.getItem("products"))

//Variabeln products innehåller nu en array med alla produkter som sparats i LocalStorage.
console.log(products)

if (Array.isArray(products)) {
  let summa = 0;
  products.forEach((product) => {
    cartDiv.insertAdjacentHTML(
      "beforeend",
      `<div>Namn: ${product.name} Pris: ${product.price}$</div>`
    )
    summa = summa + product.price;
  })
  let rundsum = Math.round(summa);
  cartDiv.insertAdjacentHTML(
    "beforeend",
    `<div>Summan av dina produktär är: ${rundsum}$ </div>`
  )
} else {
  cartDiv.insertAdjacentHTML("beforeend", `<div>Varukorgen är tom.</div>`)
}

// _____________________________________________________

let Tabort = document.getElementById("delete")

function cleanLocalStorage() {
  for(key in localStorage) {
      delete localStorage[key];
  }
}

Tabort.addEventListener("click", ()=>{
  cleanLocalStorage()
  location.reload()
})


