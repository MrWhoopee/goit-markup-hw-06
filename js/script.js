const modalBtn = document.querySelector(".hero-btn")

const modal = document.querySelector(".modal-overlay")

const modalCloseBtn = document.querySelector(".modal-close-btn")

modalBtn.addEventListener("click", () => {
    modal.classList.toggle("is-open")
})

modalCloseBtn.addEventListener("click", () => {
    modal.classList.toggle("is-open")
})
