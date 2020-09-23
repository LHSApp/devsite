const modalOverley = document.querySelector(".modal-overlay");

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const imageId = card.getAttribute("id");

    modalOverley.classList.add("active");
    modalOverley.querySelector(
      "img"
    ).src = `https://leandrohsantos.com.br/images/${imageId}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverley.classList.remove("active");
});
