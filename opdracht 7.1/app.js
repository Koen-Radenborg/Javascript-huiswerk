let budget = 100;
let product = prompt ("prijs product");
let tekst = document.getElementById ("h1")

if (budget > product) {
    tekst.innerText = "U heeft genoeg geld!"
}

else {
    tekst.innerText = "Helaas, te weinig geld"
}