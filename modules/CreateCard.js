const containerCards = document.getElementById("container-cards");
const boxCard = document.querySelector(".box-card");
const boxDetails = document.querySelector(".box-details");
const boxFooter = document.querySelector(".box-footer");

// export const composeCard = (pName, img, description, price) => {
//   createBoxCard(pName, img, description, price);
// };

export const createBoxCard = (pName, brand, img, description, price, id) => {
  const card = `<div class="box-card border border-1 rounded-3 d-flex flex-column justify-content-between">
    <div class="box-img d-flex justify-content-center">
    <img src="${img}" alt="" />
    </div>
    <div class="box-details">
    <p>
    ${pName} - ${brand}
    </p>
    <p>${description}</p>
    <p>${price}</p>
    </div>
    <div class="box-footer d-flex justify-content-between px-1">
    <input type="button" data-object-id="det-${id}" type="button" class="btn btn-primary" value="Dettagli" data-bs-toggle="modal" data-bs-target="#detailsModal" />
    <input type="button" data-object-id="del-${id}" class="btn btn-danger" value="Elimina" />
    </div>
    </div>`;
  containerCards.innerHTML += card;
};
const createBoxDetails = () => {};
const createBoxFooter = () => {};
