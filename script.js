const toggle = document.getElementById("theme-toggle");
const icons = document.querySelectorAll(".home-socials img");
const menuToggle = document.getElementById("menu-toggle");

const setMode = (dark) => {
  document.body.classList.toggle("dark", dark);
  localStorage.setItem("dark", dark);
  toggle.textContent = dark ? "☀️" : "🌙";

  icons.forEach((i) => {
    i.src = dark ? i.dataset.dark : i.dataset.light;
  });
};

setMode(localStorage.getItem("dark") === "true");

toggle.addEventListener("click", () =>
  setMode(!document.body.classList.contains("dark"))
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 600) {
    menuToggle.checked = false;
  }
});

const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a, .side-menu a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (href === "index.html" && currentPath === "")) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

const backToTop = document.createElement("button");
backToTop.id = "back-to-top";
backToTop.textContent = "⬆";
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const notesTextarea = document.getElementById("notes-textarea");
if (notesTextarea) {
  const savedNotes = localStorage.getItem("euiofy_notes");
  if (savedNotes) {
    notesTextarea.value = savedNotes;
  }

  notesTextarea.addEventListener("input", () => {
    localStorage.setItem("euiofy_notes", notesTextarea.value);
  });
}