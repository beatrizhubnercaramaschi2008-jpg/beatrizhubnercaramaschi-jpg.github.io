// templates/navbar.js
function initNavbar() {
  // Atualiza link de profile se estiver logado
  const profileLink = document.getElementById("profileLink");
  if (profileLink && localStorage.getItem("logged") === "true") {
    profileLink.href = "12-profile.html";
  }

  // Destacar página ativa com base no data-page
  const page = location.pathname.split("/").pop().replace(".html", "");
  document.querySelectorAll("#nav-links a").forEach(a => {
    a.classList.remove("active");
    if (a.dataset.page === page) a.classList.add("active");
  });

  // Theme toggle (defensivo: só liga se existir)
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    themeBtn.onclick = () => {
      document.body.classList.toggle("light-mode");
      themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
    };
  }

  // Menu mobile
  const menuBtn = document.getElementById("menuToggle");
  const nav = document.getElementById("nav-links");
  if (menuBtn && nav) {
    menuBtn.onclick = () => nav.classList.toggle("open");
  }

  // Acessibilidade: fechar menu ao clicar fora (mobile)
  document.addEventListener("click", (e) => {
    if (!nav || !menuBtn) return;
    if (!nav.classList.contains("open")) return;
    const target = e.target;
    if (!nav.contains(target) && target !== menuBtn) {
      nav.classList.remove("open");
    }
  });
}

window.initNavbar = initNavbar;
