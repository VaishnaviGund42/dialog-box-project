const openBtn = document.getElementById("openDialog");
const closeBtn = document.getElementById("closeDialog");
const dialogBox = document.getElementById("dialogBox");
const loginForm = document.getElementById("loginForm");
const exploreBtn = document.getElementById("exploreBtn");

// Open dialog
openBtn.addEventListener("click", () => {
  dialogBox.style.display = "flex";
});

// Close dialog
closeBtn.addEventListener("click", () => {
  dialogBox.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === dialogBox) {
    dialogBox.style.display = "none";
  }
});

// Login form submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "12345") {
    alert("✅ Login successful! Welcome " + username);
    dialogBox.style.display = "none";
  } else {
    alert("❌ Invalid username or password!");
  }
});

// Explore button scroll
exploreBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
