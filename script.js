// Targets buttons
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Target elements from modal
const modal = document.getElementById("modal");
const modalTitle = document.querySelector(".modal-content h2");
const closeBtn = document.getElementById("closeBtn");

// Add event listener to buttons
// btn1
btn1.addEventListener("click", function () {
  modalTitle.textContent = "I am the modal window nr.1";
  modal.classList.remove("hidden");
});

// btn2
btn2.addEventListener("click", function () {
  modalTitle.textContent = "I am the modal window nr.2";
  modal.classList.remove("hidden");
});

// btn3
btn3.addEventListener("click", function () {
  modalTitle.textContent = "I am the modal window nr.3";
  modal.classList.remove("hidden");
});

// close btn
closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});
