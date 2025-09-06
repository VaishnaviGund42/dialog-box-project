const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");
const dialogBox = document.getElementById("dialogBox");
const loginForm = document.getElementById("loginForm");
const exploreBtn = document.getElementById("exploreBtn");

// Open dialog
openBtn.addEventListener("click", () => {
  dialogBox.style.display = "flex";
});