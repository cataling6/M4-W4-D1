import { fetchProductGet } from "./FetchProducts.js";
import { url_g } from "./main.js";

const modalDetails = document.querySelector("#modal-details");
const imgBoxDetails = document.querySelector("#modal-img");
const imgDetails = document.createElement("img");
export const generateModal = async (id) => {
  const idObj = id.split("-")[1];
  const getProducts = await fetchProductGet(url_g + idObj);

  imgDetails.src = getProducts.imageUrl;
  imgBoxDetails.append(imgDetails);

  modalDetails.innerHTML = `<p>${getProducts.name} - <span>${getProducts.brand}</span></p>
              <p>${getProducts.description}</p>
              <p>${getProducts.price}</p>`;
  //   main.innerHTML = `<div class="modal fade" id="detailsModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"">
  //   <div class="modal-dialog">
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
  //         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //       </div>
  //       <div class="modal-body">
  //        <div class="box-img d-flex justify-content-center">
  //     <img src="{getProducts.imageUrl}" alt="" />
  //     </div>
  //     <div class="box-details">
  //     <p>{getProducts.name} - <span>{getProducts.brand}</span></p>
  //     <p>{getProducts.description}</p>
  //     <p>{getProducts.price}</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  //         <button type="button" class="btn btn-primary">Save changes</button>
  //       </div>
  //     </div>
  //   </div>
  // </div>`;
  imgBoxDetails = "";
};
export const clear = () => {
  imgBoxDetails = "";
  imgDetails = "";
};
