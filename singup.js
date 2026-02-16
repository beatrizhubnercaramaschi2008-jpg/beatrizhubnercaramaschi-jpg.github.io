document.getElementById("signupBtn").addEventListener("click", () => {
  const name = document.getElementById("signupName").value;
  const username = document.getElementById("signupUsername").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const picFile = document.getElementById("signupPic").files[0];

  if (!name || !username || !email || !password) {
    alert("Preencha todos os campos!");
    return;
  }

  // Guardar foto
  if (picFile) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("pfp", reader.result);
    };
    reader.readAsDataURL(picFile);
  } else {
    localStorage.setItem("pfp", "default-pfp.png");
  }

  // Guardar dados
  localStorage.setItem("name", name);
  localStorage.setItem("username", "@" + username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("bio", "Olá! Eu ainda não escrevi uma bio.");

  // Marcar como logado
  localStorage.setItem("logged", "true");

  alert("Conta criada com sucesso!");
  window.location.href = "12-profile.html";
});
