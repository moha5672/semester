//const url = "https://kea-alt-del.dk/t7/api/products/1573";
//1 grab the data//
async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products");
  const data = await response.json();
  console.log(data);
  //2 loop //3 for hver
  data.forEach(showProduct);
}
getData();
function showProduct(product) {
  console.log(product);
  //4 fange vores template
  const template = document.querySelector("#smallProductTemplate").content;
  console.log(template);

  //5. clone
  const copy = template.cloneNode(true);
  //6. skifte date
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".pris").textContent = product.price;
  copy.querySelector(".type").textContent = product.articletype;
  if (product.soldout) {
    copy.querySelector("article").classList.add("udsolgt");
  }
  if (product.discount) {
    copy.querySelector("article").classList.add("onSale");
  }
  copy.querySelector(".discounted").textContent = product.discount;

  //7 appende
  document.querySelector("main").appendChild(copy);
}
