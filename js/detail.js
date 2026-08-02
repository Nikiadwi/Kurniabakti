const data = {
  "tahu-tempe": [
    "Industri Pengolahan Pangan Tahu dan Tempe",
    "Industri Pengolahan Pangan",
  ],
  "pertanian-tanaman-pangan": ["Pertanian Tanaman Pangan", "Pertanian"],
  "perdagangan-ciawi": [
    "Kawasan Pusat Perdagangan Perkotaan Ciawi",
    "Perdagangan",
  ],
};
const id = new URLSearchParams(location.search).get("id") || "tahu-tempe";
const current = data[id] || data["tahu-tempe"];
document.title = `${current[0]} | Desa Kurniabakti`;
document.querySelector("#detail-title").textContent = current[0];
document.querySelector("#content-heading").textContent = current[0];
document.querySelector("#detail-category").textContent = current[1];
document.querySelector("#info-category").textContent = current[1];
document.querySelector("#breadcrumb").textContent = current[0];
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
