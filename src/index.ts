let btnEnviar = document.getElementById("btnEnviar");
//let rotulo = document.getElementById("rotulo");
//let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "usuario";
rotulo2?.innerHTML = "contraseña";

btnEnviar.addEventListener("click", () => {
  let log1: string = "juan";
  let log2: string = "clavejuan";
  let usuario1 = document.getElementById("usuario.value");
  let contraseña1 = document.getElementById("contraseña.value");

  if (usuario.value == log1 && contraseña.value == log2) {
    console.log("Bienvenido");
  } else {
    console.log("Usuario o contraseña incorrecto");
  }
});
