const elettrodomestici = [
  {
    name: "Lavatrice",
    description: "Lavatrice ad alta efficienza energetica con programmi variabili",
    brand: "Samsung",
    imageUrl: "https://m.media-amazon.com/images/I/61EWQtZi2ML._AC_SL1500_.jpg",
    price: 499.99,
  },
  {
    name: "Forno a microonde",
    description: "Forno a microonde con funzioni di cottura rapida e scongelamento",
    brand: "LG",
    imageUrl: "https://m.media-amazon.com/images/I/516lImfmS3L._AC_SL1500_.jpg",
    price: 129.99,
  },
  {
    name: "Aspirapolvere",
    description: "Aspirapolvere senza sacchetto con tecnologia ciclonica",
    brand: "Dyson",
    imageUrl: "https://m.media-amazon.com/images/I/51XUXklFLCL._AC_SL1500_.jpg",
    price: 349.99,
  },
  {
    name: "Frigorifero",
    description: "Frigorifero con tecnologia di raffreddamento avanzata e ampio spazio interno",
    brand: "Whirlpool",
    imageUrl: "https://m.media-amazon.com/images/I/414C9KANQ0L._AC_SL1500_.jpg",
    price: 799.99,
  },
  {
    name: "Lavastoviglie",
    description: "Lavastoviglie con programmi di lavaggio personalizzabili e funzione di risparmio energetico",
    brand: "Bosch",
    imageUrl: "https://m.media-amazon.com/images/I/71lzPKhKOqL._AC_SL1500_.jpg",
    price: 699.99,
  },
  {
    name: "Macchina da caffè",
    description: "Macchina da caffè automatica con macinacaffè integrato",
    brand: "DeLonghi",
    imageUrl: "https://m.media-amazon.com/images/I/612V9C5wbwL._AC_SL1500_.jpg",
    price: 199.99,
  },
  {
    name: "Robot da cucina",
    description: "Robot da cucina multifunzione con diverse lame e accessori",
    brand: "Kenwood",
    imageUrl: "https://m.media-amazon.com/images/I/81P5zqOlgGL._AC_SL1500_.jpg",
    price: 299.99,
  },
  {
    name: "Tostapane",
    description: "Tostapane con scomparti extra larghi per toast uniformi",
    brand: "Philips",
    imageUrl: "https://m.media-amazon.com/images/I/61bMNCpY13L._AC_SL1329_.jpg",
    price: 59.99,
  },
  {
    name: "Bollitore elettrico",
    description: "Bollitore elettrico ad alta capacità con regolazione della temperatura",
    brand: "Russell Hobbs",
    imageUrl: "https://m.media-amazon.com/images/I/61GsXOnNo7L._AC_SL1207_.jpg",
    price: 39.99,
  },
  {
    name: "Ventilatore",
    description: "Ventilatore a torre con controllo remoto e funzione oscillante",
    brand: "Dyson",
    imageUrl: "https://m.media-amazon.com/images/I/512DGQrWkGL._AC_SL1500_.jpg",
    price: 179.99,
  },
];

import { fetchProductGet, fetchProductPost, fetchProductDelete } from "./modules/FetchProducts.js";
import { createBoxCard } from "./modules/CreateCard.js";
import { generateModal, allowModify, saveMods, reloadMyPage, deleteCard, destroyModal } from "./modules/DetailsModal.js";
import { insertNewProduct } from "./modules/NewProduct.js";

export const urlGet = "https://striveschool-api.herokuapp.com/api/product/";

let dataProduct = {};
let getProducts = [];
const headerCard = document.querySelector(".modal-header");

document.addEventListener("DOMContentLoaded", async () => {
  getProducts = await fetchProductGet(urlGet);

  const spinner = document.getElementById("spinner");

  setTimeout(
    () =>
      getProducts.forEach((element) => {
        dataProduct = { name: element.name, brand: element.brand, description: element.description, imageUrl: element.imageUrl, price: element.price, _id: element._id };
        createBoxCard(dataProduct);
        spinner.classList.replace("d-flex", "d-none");
      }),
    2000
  );

  const btnsPage = document.querySelectorAll("input[type=button]");

  btnsPage.forEach((btn) => {
    btn.removeEventListener("click", () => {});
    btn.addEventListener("click", () => {
      let atr = btn.getAttribute("data-object-id");
      let id;
      if (atr.includes("det")) {
        id = atr.split("-")[1];
        generateModal(id);
      } else if (atr.includes("del")) {
        id = atr.split("-")[1];
        //if (window.confirm("Do you really want to delete product?")) {
        deleteCard(id);
        //}
      }
    });
  });
  const btnClose = document.getElementById("close");

  headerCard.removeEventListener("click", allowModify);
  headerCard.addEventListener("click", allowModify);

  const btnSave = document.getElementById("save");
  btnSave.addEventListener("click", async function () {
    const id = btnSave.getAttribute("data-object-id");
    const urlPut = `https://striveschool-api.herokuapp.com/api/product/${id}`;
    if (id != null) await saveMods(id, urlPut);
    reloadMyPage();
  });

  btnClose.addEventListener("click", function () {
    destroyModal();
  });

  const btnNew = document.getElementById("saveNewProduct");
  btnNew.addEventListener("click", insertNewProduct);

  //function automatica x pulizia array
  // getProducts.forEach((x) => {
  //   const urlD = urlGet + x._id;
  //   fetchProductDelete(urlD).then((x) => console.log(x));
  // });

  // //function automatica x riempimento array
  // elettrodomestici.forEach(async (oggetto) => {
  //   const postProducts = await fetchProductPost(urlGet, oggetto);
  // });
});
