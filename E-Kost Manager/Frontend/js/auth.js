document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // cegah reload default form

  const role = document.getElementById("role").value;

  if (role === "owner") {
    window.location.href = "dashboard-owner.html";
  } else if (role === "tenant") {
    window.location.href = "dashboard-tenant.html";
  } else {
    alert("Silakan pilih role terlebih dahulu!");
  }
});
