import { createEditBoxCard } from "./CreateCard.js";

const locker = document.querySelector(".bi-lock");
const unlocked = document.querySelector(".bi-file-earmark-lock");

export const unlockFunction = () => {
  const headerCard = document.querySelectorAll(".modal-header");
  headerCard.forEach((header) => {
    header.addEventListener("click", () => {
      if (locker.className === "bi bi-lock fs-2") {
        locker.className = "bi bi-unlock fs-2";
      } else {
        locker.className = "bi bi-lock fs-2";
      }
    });
  });
};
