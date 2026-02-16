document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("logged", "true");
    window.location.href = "12-profile.html";
  } else {
    alert("Email ou senha incorretos!");
  }
});
