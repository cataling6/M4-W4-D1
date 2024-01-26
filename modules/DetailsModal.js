import { fetchProductGet, fetchProductPut } from "./FetchProducts.js";
import { url_g } from "../main.js";
export let lockerStatus = false;
let productName;
let productBrand;
let productDescription;
let productPrice;
let productId;
let locker = document.querySelector(".bi-lock");
window.btnSave = document.querySelectorAll("button");
const headerCard = document.querySelectorAll(".modal-header");
const modalDetails = document.querySelector("#modal-details");
let imgBoxDetails = document.querySelector("#modal-img");
const imgDetails = document.createElement("img");
let getProducts = [];
export const generateModal = async (id) => {
  const btn = document.que;
  const idObj = id.split("-")[1];
  console.log(url_g, idObj);
  getProducts = await fetchProductGet(url_g + idObj);

  productName = getProducts.name;
  productBrand = getProducts.brand;
  productDescription = getProducts.description;
  productPrice = getProducts.price;
  productId = getProducts._id;

  imgDetails.src = getProducts.imageUrl;
  imgBoxDetails.append(imgDetails);

  modalDetails.innerHTML = `<p>${productName} </p><p>${productBrand}</span></p>
                            <p>${productDescription}</p>
                            <p>${productPrice}</p>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="clear()">Close</button>
                            <button type="button" class="btn btn-primary" id="save-${idObj}">Save changes</button>
                            </div>`;

  //imgBoxDetails = "";
  headerCard.forEach((header) => {
    header.addEventListener("click", () => {
      if (locker.className === "bi bi-lock fs-2") {
        locker.className = "bi bi-unlock fs-2";
        unlockModify(productName, productBrand, productDescription, productPrice, productId);
      } else {
        locker.className = "bi bi-lock fs-2";
        lockModify(productName, productBrand, productDescription, productPrice, productId);
      }
    });
  });
};
export const clear = () => {
  imgBoxDetails = "";
  imgDetails = "";
};

export const unlockModify = (name, brand, description, price, id) => {
  modalDetails.innerHTML = `<input type="text" class="input-style" value="${name}" id="name-${id}"></input>
                            <input type="text" class="input-style" value="${brand}" id="brand-${id}"></input>
                            <textarea type="text" class="input-style" id="desc-${id}">${description}</textarea>
                            <input class="input-style"type="text" value="${price} id="price-${id}"></input>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="clear()">Close</button>
                            <button type="button" class="btn btn-primary" id="save-${id}">Save changes</button>
                            </div>`;
};
export const lockModify = (name, brand, description, price, id) => {
  console.log(id);
  modalDetails.innerHTML = `<p>${name} </p><p>${brand}</span></p>
                            <p>${description}</p>
                            <p>${price}</p>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="clear()">Close</button>
                            <button type="button" class="btn btn-primary" id="save-${id}">Save changes</button>
                            </div>`;
};

// export const saveMods = async (id) => {
//   const productName = document.getElementById(`name-${id}`);
//   const productBrand = document.getElementById(`brand-${id}`);
//   const productDescription = document.getElementById(`description-${id}`);
//   const productPrice = document.getElementById(`price-${id}`);

//   const data = { name: productName, brand: productBrand, description: productDescription, price: productPrice };
//   await fetchProductPut(url, data);
// };
