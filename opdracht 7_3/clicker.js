const getalElement = document.getElementById("getal");
const verhoogKnop = document.getElementById("verhoogKnop");

let huidigGetal = 0;


verhoogKnop.addEventListener("click", function() {
  
  huidigGetal++;


  if (huidigGetal === 10) {
    huidigGetal = 0;
  }


  getalElement.textContent = huidigGetal;
});