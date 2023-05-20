const botonEncriptar = document.getElementById("BotonEncriptar");
const botonDesencriptar = document.getElementById("BotonDesencriptar");
const sectionWait = document.getElementById("wait");
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
function encriptar() {
  var texto = document.getElementById("TextIn").value;
  var texto_encriptado = "";
  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    if (letra === "e") {
      texto_encriptado += "enter";
    } else if (letra === "i") {
      texto_encriptado += "imes";
    } else if (letra === "a") {
      texto_encriptado += "ai";
    } else if (letra === "o") {
      texto_encriptado += "ober";
    } else if (letra === "u") {
      texto_encriptado += "ufat";
    } else {
      texto_encriptado += letra;
    }
  }
  document.getElementById("resultado").textContent = texto_encriptado;
  sectionWait.style.display = "none";
}
