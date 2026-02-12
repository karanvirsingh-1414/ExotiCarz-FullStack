// Expanding Cards Logic
const cards = document.querySelectorAll(".wrap_card");

if (cards.length > 0) {
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((item) => {
        item.classList.remove("active");
      });
      card.classList.add("active");
    });
  });
}










