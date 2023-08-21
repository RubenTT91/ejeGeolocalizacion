//Código para Localizar
let nameUser;
let frecuencia;
let registro = "";
let contenidoTabla = "";
let Idinterval;
contenidoTabla =
  "<tr><th>StampTime</th><th>Name</th><th>Latitud</th><th>Longitud</th></tr>";

function iniciar() {
    Idinterval =0;
    nameUser = prompt("Nombre Usuario", "name");
    frecuencia = Number(prompt("Indique un valor para el rastreo >0 ", "segundos"));
  if (!Idinterval) {
    if(!isNaN(frecuencia)&& Number.isInteger(frecuencia)&& frecuencia>0){
        Idinterval = setInterval(position,(frecuencia*1000));
    }else{
        alert('Valor no valido. Digite un número Entero mayor a 0')
        iniciar();
    }
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
      <td>${nameUser}</td>
      <td>${latitud}</td>
      <td>${longitud}</td></tr>`;
  registrar(registro);
}

function registrar(valores) {
  contenidoTabla += valores;
  document.getElementById("datos").innerHTML = contenidoTabla;
}
