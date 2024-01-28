import { fetchProductGet, fetchProductPut, fetchProductDelete } from "./FetchProducts.js";
import { urlGet } from "../main.js";
export let btnSave = "";

let lockerStatus = false;
let productName;
let productBrand;
let productDescription;
let productPrice;
let productId;
let getProducts = [];

let locker = document.querySelector(".bi-lock");
let modalDetails = document.querySelector("#modal-details");
let imgBoxDetails = document.querySelector("#modal-img");
const imgDetails = document.createElement("img");

export const generateModal = async (id) => {
  getProducts = await fetchProductGet(urlGet + id);
  productName = getProducts.name;
  productBrand = getProducts.brand;
  productDescription = getProducts.description;
  productPrice = getProducts.price;
  productId = getProducts._id;
  imgDetails.src = getProducts.imageUrl;

  imgBoxDetails.append(imgDetails);

  modalDetails.innerHTML = `<p>${productName} </p><p>${productBrand}</span></p>
                            <p>${productDescription}</p>
                            <p>${productPrice}</p>`;
};

export const allowModify = () => {
  if (lockerStatus === false) {
    lockerStatus = true;
    locker.className = "bi bi-unlock fs-2";
    unlockModify(productName, productBrand, productDescription, productPrice, productId);
  } else {
    lockerStatus = false;
    locker.className = "bi bi-lock fs-2";
    lockModify(productName, productBrand, productDescription, productPrice, productId);
  }
};

export const unlockModify = (name, brand, description, price, id) => {
  const save = document.getElementById("save");
  const close = document.getElementById("close");
  modalDetails.innerHTML = `<input type="text" class="input-style" value="${name}" id="name-${id}"></input>
                            <input type="text" class="input-style" value="${brand}" id="brand-${id}"></input>
                            <textarea type="text" class="input-style" id="desc-${id}">${description}</textarea>
                            <input class="input-style" type="text" value="${price}" id="price-${id}"></input>
                            `;
  save.setAttribute("data-object-id", id);
  close.setAttribute("data-object-id", id);
  passIdToInputValues(id);
};

export const lockModify = (name, brand, description, price, id) => {
  modalDetails.innerHTML = `<p>${name} </p><p>${brand}</span></p>
                            <p>${description}</p>
                            <p>${price}</p>
                            `;
};

export const passIdToInputValues = (id) => {
  if (lockerStatus === true) {
    const productName = document.getElementById(`name-${id}`);
    const productBrand = document.getElementById(`brand-${id}`);
    const productDescription = document.getElementById(`desc-${id}`);
    const productPrice = document.getElementById(`price-${id}`);
    const data = { name: productName.value, brand: productBrand.value, description: productDescription.value, price: productPrice.value };
    return data;
  }
};

export const saveMods = async (id, url) => {
  const data = passIdToInputValues(id);
  await fetchProductPut(url, data);
  const getData = await fetchProductGet(urlGet);

  return getData;
};

export const reloadMyPage = () => {
  location.reload();
};

export const deleteCard = async (id) => {
  const urlDelete = urlGet + id;
  await fetchProductDelete(urlDelete).then((x) => console.log(x));
  reloadMyPage();
};

export const destroyModal = () => {
  lockerStatus = false;
  locker.className = "bi bi-lock fs-2";
};
