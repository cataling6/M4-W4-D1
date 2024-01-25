import { fetchProductGet } from "./FetchProducts.js";
import { url_g } from "../main.js";

const modalDetails = document.querySelector("#modal-details");
let imgBoxDetails = document.querySelector("#modal-img");
const imgDetails = document.createElement("img");
export const generateModal = async (id) => {
  const idObj = id.split("-")[1];
  console.log(url_g, idObj);
  const getProducts = await fetchProductGet(url_g + idObj);

  imgDetails.src = getProducts.imageUrl;
  imgBoxDetails.append(imgDetails);

  modalDetails.innerHTML = `<p>${getProducts.name} - <span>${getProducts.brand}</span></p>
              <p>${getProducts.description}</p>
              <p>${getProducts.price}</p>`;

  imgBoxDetails = "";
};
export const clear = () => {
  imgBoxDetails = "";
  imgDetails = "";
};
// headerCard.forEach((header) => {
//   header.addEventListener("click", () => {
//     if (locker.className === "bi bi-lock fs-2") {
//       locker.className = "bi bi-unlock fs-2";
//       createEditBoxCard(productName, productBrand, productImageUrl, productDescription, productPrice, productId);
//     } else {
//       locker.className = "bi bi-lock fs-2";
//       createBoxCard(productName, productBrand, productImageUrl, productDescription, productPrice, productId);
//     }
//   });
// });
