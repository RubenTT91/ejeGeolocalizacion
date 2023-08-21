//Código para Localizar
let registro = "";
let contenidoTabla = "";
let Idinterval;
contenidoTabla =
  "<tr><th>StampTime</th><th>Name</th><th>Latitud</th><th>Longitud</th></tr>";

function iniciar() {
  if (!Idinterval) {
    Idinterval = setInterval(position,1000);
  }
}

function parar() {
  clearInterval(Idinterval);
}


function position(){
    navigator.geolocation.getCurrentPosition(onSucess);
}

function onSucess(position) {
  //Ajuste de Hora
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let tiempo = `${hr} : ${min} : ${sec}`;
  let latitud = position.coords.latitude;
  let longitud = position.coords.longitude;
  //Ajuste de registro
  let registro = `<tr>
      <td>${tiempo}</td>
      <td>nombre</td>
      <td>${latitud}</td>
      <td>${longitud}</td></tr>`;
  registrar(registro);
}

function registrar(valores) {
  contenidoTabla += valores;
  document.getElementById("datos").innerHTML = contenidoTabla;
  console.log(contenidoTabla);
}
