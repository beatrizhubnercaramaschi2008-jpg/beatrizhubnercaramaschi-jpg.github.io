// Carregar dados salvos
document.getElementById("profilePic").src = localStorage.getItem("pfp") || "default-pfp.png";
document.getElementById("profileName").textContent = localStorage.getItem("name") || "Nome do Usuário";
document.getElementById("profileUsername").textContent = localStorage.getItem("username") || "@username";
document.getElementById("profileBio").textContent = localStorage.getItem("bio") || "Esta é a minha bio.";

if (localStorage.getItem("logged") !== "true") {
  window.location.href = "07-login.html";
}

document.getElementById("profilePic").src = localStorage.getItem("pfp");
document.getElementById("profileName").textContent = localStorage.getItem("name");
document.getElementById("profileUsername").textContent = localStorage.getItem("username");
document.getElementById("profileBio").textContent = localStorage.getItem("bio");
