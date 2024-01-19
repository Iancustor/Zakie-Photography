const darkModeBtn = document.querySelector(".darkmode-toggle");
// console.log(darkModeBtn);
const body = document.body;
darkModeBtn.addEventListener("click", changeMode);
const nameEl = document.querySelector(".name");

// adding theme to local storage
let theme = localStorage.getItem("theme");

theme === "light" ? enableLightMode() : enableDarkMode();

function changeMode() {
  theme === "light" ? enableDarkMode() : enableLightMode();
  body.classList.contains("dark")
    ? (darkModeBtn.innerHTML = "<i class='bx bxs-sun'></i>")
    : (darkModeBtn.innerHTML = "<i class='bx bxs-moon'></i>");
}
function enableLightMode() {
  body.classList.remove("dark");
  theme = "light";
  localStorage.setItem("theme", "light");
}

function enableDarkMode() {
  body.classList.add("dark");
  theme = "dark";
  localStorage.setItem("theme", "dark");
}

// console.log(theme)

// time and year
const today = new Date();
const year = today.getFullYear();
// console.log(year);

// curent year
const yearContainer = document.querySelector(".year");
yearContainer.textContent = year;
// console.log(year);
