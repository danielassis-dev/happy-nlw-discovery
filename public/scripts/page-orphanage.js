const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};

// create map
const map = L.map("mapid", options).setView([2.8205841, -60.6725646], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and add marker
L.marker([2.8205841, -60.6725646], { icon }).addTo(map);

/* image gallery */

function selectImage(event) {
  const button = event.currentTarget;

  // remover todas as classes "active"
  const buttons = document.querySelectorAll(".images button");
  console.log(buttons);
  for (const btn of buttons) {
    btn.classList.remove("active");
  }

  // selecionar a image clicada
  const selectedImage = button.children[0];

  // atualizar o container de image
  const image = document.querySelector(".orphanage-details > img");
  image.src = selectedImage.src;

  // adicionar a classe .active para este botão
  button.classList.add("active");
}
