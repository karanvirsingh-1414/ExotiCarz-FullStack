let popup = document.getElementById("popup");
let overlay = document.getElementById("overlay");
let container = document.querySelector(".container");

function openPopup() {
  popup.classList.add("open-popup");
  overlay.classList.add("active");
  container.classList.add("blurred");  // Blur the background
}

function closePopup() {
  popup.classList.remove("open-popup");
  overlay.classList.remove("active");
  container.classList.remove("blurred");  // Remove blur from the background
}