const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  
  // Nome
  const name = document.getElementById("newName").value;
  if (name) localStorage.setItem("name", name);

  // Username
  const username = document.getElementById("newUsername").value;
  if (username) localStorage.setItem("username", "@" + username);

  // Bio
  const bio = document.getElementById("newBio").value;
  if (bio) localStorage.setItem("bio", bio);

  // Foto de perfil
  const file = document.getElementById("newPic").files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("pfp", reader.result);
    };
    reader.readAsDataURL(file);
  }

  alert("Perfil atualizado com sucesso!");
});
