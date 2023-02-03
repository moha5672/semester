const url = "https://kea-alt-del.dk/t7/api/products/1573";
const imagePath = "https://kea-alt-del.dk/t7/images/webp/640/1573.webp";
function hentData() {
  fetch(url)
    .then((resp) => resp.json())
    .then(visProdukt);
}
function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#gender").textContent = produkt.gender;
  document.querySelector("#pris").textContent = produkt.price;
  document.querySelector("img").src = imagePath;
}

hentData();
