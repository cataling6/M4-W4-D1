import { urlGet } from "../main.js";
import { fetchProductPost } from "./FetchProducts.js";
import { reloadMyPage } from "./DetailsModal.js";
export const insertNewProduct = async () => {
  const name = document.getElementById("newName");
  const brand = document.getElementById("newBrand");
  const imgUrl = document.getElementById("newImg");
  const desc = document.getElementById("newDesc");
  const price = document.getElementById("newPrice");
  const data = { name: name.value, description: desc.value, brand: brand.value, imageUrl: imgUrl.value, price: price.value };

  await fetchProductPost(urlGet, data);
  reloadMyPage();
};
