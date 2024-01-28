export const containerCards = document.getElementById("container-cards");

export const createBoxCard = (data) => {
  const card = `<div class="box-card border border-1 rounded-3 d-flex flex-column justify-content-between">
    <div class="box-img d-flex justify-content-center">
    <img src="${data.imageUrl}" alt="product_image" />
    </div>
    <div class="box-details">
    <p><b>${data.name}</b></p>
    <p>${data.brand}</p>
    <p>${data.description}</p>
    <p>${data.price}<span> €</span></p>
    </div>
    <div class="box-footer d-flex justify-content-between px-1">
    <input type="button" data-object-id="det-${data._id}" type="button" class="btn btn-primary" value="Dettagli" data-bs-toggle="modal" data-bs-target="#detailsModal" />
    <input type="button" data-object-id="del-${data._id}" class="btn btn-danger" value="Elimina" />
    </div>
    </div>`;
  containerCards.innerHTML += card;
};
