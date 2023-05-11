document.getElementById("buyshirt").addEventListener("click", () => {
    addProductToLocalStorage({ name: "Shirt", price: 49.99 })
  })

  document.getElementById("buysweater").addEventListener("click", () => {
    addProductToLocalStorage({ name: "Sweater", price: 79.99 })
  })


   /**
   * Lägger till objektet product i en array i localStorage som heter products.
   * @param {object product} product ett objekt som läggs in i en array i localStorage.
   */
   function addProductToLocalStorage(product) {
    // Hämta ut alla produkter som finns i localStorage
    // JSON.parse(string) tar en sträng i JSON-format och gör ett javascript-objekt av det.
    let products = JSON.parse(localStorage.getItem("products"))
  
    // kontrollera om det fanns en array i localStorage
    if (products && Array.isArray(products)) {
      // OM det fanns en array i localStorage, lägg till product.
      products.push(product)
    } else {
      // om det INTE fanns en array i localStorage så skapa en med product i.
      products = [product]
    }
  
    // Spara arrayen med produkter i localStorage igen.
    // JSON.stringify(objekt) skapar en sträng på JSON-format av ett objekt.
    localStorage.setItem("products", JSON.stringify(products))
  }




  // ______________________________________


let namn = document.getElementById("Name");
let username = document.getElementById("Username");
let password = document.getElementById("Password");
let knapp = document.getElementById("knapp");
let form = document.getElementById("formulär");


knapp.addEventListener("click", ()=>{
  form.insertAdjacentHTML("beforeend", `<div>Ditt namn är ${namn.value}, ditt username är ${username.value} och dit lösenord är ${password.value}</div>`)
  location.reload()
})