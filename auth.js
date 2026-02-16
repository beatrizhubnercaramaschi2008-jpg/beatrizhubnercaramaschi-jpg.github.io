let auth0Client = null;

async function initAuth0() {
  auth0Client = await createAuth0Client({
    domain: "TEU-DOMINIO.auth0.com",
    client_id: "TEU_CLIENT_ID",
    cacheLocation: "localstorage",
    useRefreshTokens: true
  });

  // Se o utilizador acabou de voltar do login
  if (window.location.search.includes("code=")) {
    await auth0Client.handleRedirectCallback();
    window.history.replaceState({}, document.title, "/");
  }

  updateUI();
}

async function login() {
  await auth0Client.loginWithRedirect({
    redirect_uri: window.location.origin
  });
}

async function logout() {
  auth0Client.logout({
    returnTo: window.location.origin
  });
}

async function updateUI() {
  const isAuthenticated = await auth0Client.isAuthenticated();

  document.getElementById("login-btn").style.display = isAuthenticated ? "none" : "block";
  document.getElementById("logout-btn").style.display = isAuthenticated ? "block" : "none";

  if (isAuthenticated) {
    const user = await auth0Client.getUser();
    document.getElementById("user-info").innerText = `Olá, ${user.name}`;
  }
}

window.onload = initAuth0;
