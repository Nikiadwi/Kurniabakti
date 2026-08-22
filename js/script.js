const header = document.querySelector(".site-header");
const nav = document.querySelector(".main-nav");
const menuToggle = document.querySelector(".menu-toggle");
window.addEventListener("scroll", () =>
  header.classList.toggle("scrolled", window.scrollY > 40),
);
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
  menuToggle.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
});
document
  .querySelectorAll(".main-nav a, .site-header .button")
  .forEach((link) =>
    link.addEventListener("click", () => nav.classList.remove("open")),
  );
const observer = new IntersectionObserver(
  (entries, obs) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    }),
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));
const dots = document.querySelectorAll(".slide-dots button");
if (dots.length) {
  const heroSlides = document.querySelectorAll(".hero-slide");
  const totalSlides = heroSlides.length;

  dots.forEach((dot, index) =>
    dot.addEventListener("click", () => {
      dots.forEach((item) => item.classList.remove("active"));
      dot.classList.add("active");
      heroSlides.forEach((slide, slideIndex) => {
        slide.style.animation = "none";
        slide.offsetHeight;
        slide.style.animation = `heroFade 15s infinite ${slideIndex === index ? "0s" : `${((slideIndex - index + totalSlides) % totalSlides) * 5}s`}`;
      });
    }),
  );

  setInterval(() => {
    const active = [...dots].findIndex((dot) =>
      dot.classList.contains("active"),
    );
    dots[(active + 1) % dots.length].click();
  }, 5000);
}
const lightbox = document.querySelector(".lightbox");
document.querySelectorAll(".gallery-photo").forEach((photo) =>
  photo.addEventListener("click", () => {
    lightbox.querySelector("span").textContent = photo.dataset.title;
    const image = photo.querySelector("img");
    lightbox.querySelector(".lightbox-photo").style.backgroundImage = image
      ? `url("${image.src}")`
      : "";
    lightbox.classList.add("open");
  }),
);
const closeLightbox = () => lightbox.classList.remove("open");
lightbox.querySelector("button").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
const map = L.map("map", { scrollWheelZoom: false }).setView(
  [-7.15278, 108.13944],
  14,
);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);
L.marker([-7.15278, 108.13944])
  .addTo(map)
  .bindPopup(
    "<strong>Desa Kurniabakti</strong><br>Jl. Desa Kurniabakti, Kec. ..., Kab. ...",
  )
  .openPopup();
