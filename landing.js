let cards = document.querySelectorAll(".wrap_card");

cards.forEach((card) => {
      card.addEventListener("click", () => {
        cards.forEach((item) => {
            item.classList.remove("active");
        })
        card.classList.add("active");
      })
})





let popup = document.getElementById("popup");
let container = document.querySelector(".container");

function openPopup() {
  popup.classList.add("open-popup");
  container.classList.add("blurred");  }

function closePopup() {
  popup.classList.remove("open-popup");
  container.classList.remove("blurred");  
}










