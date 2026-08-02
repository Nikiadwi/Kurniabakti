const data = {
  "tahu-tempe": [
    "Industri Pengolahan Pangan Tahu dan Tempe",
    "Industri Pengolahan Pangan",
    "assets/img/hero-1.svg",
  ],
  "pertanian-tanaman-pangan": [
    "Pertanian Tanaman Pangan",
    "Pertanian",
    "assets/img/hero-2.svg",
  ],
  "perdagangan-ciawi": [
    "Kawasan Pusat Perdagangan Perkotaan Ciawi",
    "Perdagangan",
    "assets/img/hero-3.svg",
  ],
};
const id = new URLSearchParams(location.search).get("id") || "tahu-tempe";
const current = data[id] || data["tahu-tempe"];
const detailImage = document.querySelector("#detail-image");
document.title = `${current[0]} | Desa Kurniabakti`;
document.querySelector("#detail-title").textContent = current[0];
document.querySelector("#content-heading").textContent = current[0];
document.querySelector("#detail-category").textContent = current[1];
document.querySelector("#info-category").textContent = current[1];
document.querySelector("#breadcrumb").textContent = current[0];
if (detailImage) {
  detailImage.src = current[2];
  detailImage.alt = `Foto ${current[0]}`;
}
const miniMap = L.map("mini-map", { scrollWheelZoom: false }).setView(
  [-7.15278, 108.13944],
  15,
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(miniMap);
L.marker([-7.15278, 108.13944])
  .addTo(miniMap)
  .bindPopup(current[0])
  .openPopup();
