// create map
const map = L.map("mapid").setView([2.8205841, -60.6725646], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;
// create and add marker
// update latlng input
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  // update latlng input
  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon });
  marker.addTo(map);
});

// create a new photo field
function addPhotoField() {
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clonar a última imagem adicionada.
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // verificar de o campo está vazio. Se sim, não adicionar ao container de imagem
  const input = newFieldContainer.children[0];
  if (input.value == "") {
    return;
  }

  // limpar o campo antes de adicionar ao container
  input.value = "";

  // adicionar o clone ao container de #images
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    // limpar o valor do campo
    return;
  }

  span.parentNode.remove();
}

// troca (swap) do sim e não
function toggleSelect(event) {
  // pegar o botão clicados
  const button = event.currentTarget;

  // retirar a class .active (dos botões)
  // const buttons = document.querySelectorAll(".button-select button");
  const buttons = button.parentNode.children; // equally valid??
  for (const btn of buttons) btn.classList.remove("active");

  // colocar a class .active nesse botão clicado
  button.classList.add("active");

  // atualizar o meu input hidden com o valor selecionado
  const input = document.querySelector("[name=open_on_weekends]");
  input.value = button.dataset.value;
}
