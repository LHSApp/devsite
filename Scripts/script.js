const modalOverley = document.querySelector(".modal-overlay");

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    modalOverley.classList.add("active");
    modalOverley.querySelector("iframe").src =
      `https://leandrohsantos.com.br/images/${imageId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverley.classList.remove("active");
});
