const endpoint = "https://kea-alt-del.dk/t7/api/products";

function HentData() {
  fetch(fil)
    .then((resp) => resp.json())
    .then(vis);
}
const temp = document.querySelector("template").content;
const beholder = document.querySelector("main");
function visData(data) {
  console.log(data);
  const beholder = document.querySelector("main");
  const skabelon = document.querySelector("udsolgt");
  json.forEach((element) => {
    const klon = skabelon.cloneNode(true).textContent;
    klon.querySelector("gender").textContent = underviser.gender;
    beholder.appendChild(klon);
  });
}
HentData();
