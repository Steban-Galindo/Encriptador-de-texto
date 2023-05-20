const botonEncriptar = document.getElementById("BotonEncriptar");
const botonDesencriptar = document.getElementById("BotonDesencriptar");
const botoncopiar = document.getElementById("btCopiar");
const sectionWait = document.getElementById("wait");
botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
botoncopiar.addEventListener("click", copiar);
function encriptar() {
  sectionWait.style.display = "none";
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
}
function desencriptar() {
  sectionWait.style.display = "none";
  var texto = document.getElementById("TextIn").value;
  var resultado = texto;
  resultado = resultado.replace(/ai/gi, "a");
  resultado = resultado.replace(/enter/gi, "e");
  resultado = resultado.replace(/imes/gi, "i");
  resultado = resultado.replace(/ober/gi, "o");
  resultado = resultado.replace(/ufat/gi, "u");
  document.getElementById("resultado").textContent = resultado;
}
function copiar() {
  var aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("resultado").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  alert("Texto copiado correctamente");
}
