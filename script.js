// Sidebar Toggle
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("sidebarToggle");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
  sidebar.style.width = "250px";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0";
});

// Search functionality
document.querySelector(".search-box button").addEventListener("click", () => {
  let query = document.querySelector(".search-box input").value.toLowerCase();
  let bikes = document.querySelectorAll(".bike-card");

  bikes.forEach(bike => {
    let name = bike.querySelector("h3").innerText.toLowerCase();
    bike.style.display = name.includes(query) ? "block" : "none";
  });
});
