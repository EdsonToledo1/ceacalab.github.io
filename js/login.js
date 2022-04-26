const auth = firebase.auth();

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      alert("Autenticación exitosa!. Ahora tienes permisos de subir archivos.");
      localStorage.setItem("isAuth", true);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode);
      console.log(errorMessage);

      alert("Usuario no registrado como administrativo.");
    });
});

if (localStorage.getItem("isAuth")) {
  const signInContainer = document.getElementById("loged-out-root");
  signInContainer.remove();
}
