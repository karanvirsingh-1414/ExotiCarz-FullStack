document.getElementById("toggleGas").addEventListener("change", function () {
    var gasCars = document.getElementById("gas");
    var evCars = document.getElementById("grnCars");
    var luxText = document.querySelector(".lux, .luxGrn");
    if (this.checked) {
      gasCars.style.display = "none";
      evCars.style.display = "inline"; 
      luxText.classList.remove("lux");
      luxText.classList.add("luxGrn");
      luxText.textContent = "Green";
    } else {
      gasCars.style.display = "flex";
      evCars.style.display = "none";
      luxText.classList.remove("luxGrn");
      luxText.classList.add("lux");
      luxText.textContent = "Luxury";
    }
  });
  
