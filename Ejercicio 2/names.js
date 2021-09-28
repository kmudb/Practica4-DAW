var nombres = {
"Personas": [
{"imagen" : "img/juan-robles.jpg",
"nombre" : "Juan",
"apellido" : "Robles",
"edad" : 29,
"profesion" : "Licenciado"},
{"imagen" : "img/lilian-rosales.jpg",
"nombre" : "Lilian",
"apellido" : "Rosales",
"edad" : 27,
"profesion" : "Bachiller"},
{"imagen" : "img/gustavo-gonzalez.jpg",
"nombre" : "Gustavo",
"apellido" : "Gonzalez",
"edad" : 28,
"profesion" : "Arquitecto"},
{"imagen" : "img/genesis-deras.jpg",
"nombre" : "Génesis",
"apellido" : "Deras",
"edad" : 31,
"profesion" : "Mercadóloga"},
{"imagen" : "img/reina-benitez.jpg",
"nombre" : "Reina",
"apellido" : "Benitez",
"edad" : 25,
"profesion" : "Secretaria"},
{"imagen" : "img/hugo-perez.jpg",
"nombre" : "Hugo",
"apellido" : "Pérez",
"edad" : 34,
"profesion" : "Diseñador"}
]
};
//Obteniendo el elemento contenedor donde se cargarán
//todos los datos del objeto JSON
var div = document.getElementById("info");
div.innerHTML = volcarDatos(nombres.Personas);
function volcarDatos(datos){
var total = datos.length;
data = "<div class='row'>";
for(var i=0; i<total; i++){
data += "<div class='card col-4' >";
data += "<img class='card-img-top' src=" + datos[i].imagen + " alt='Card image cap'>";
data += "<div class='card-body'>";
data +=     '<h5 class="card-title">'+datos[i].nombre + " " + datos[i].apellido + '</h5>';
data +=     '<p class="card-text">nombre'+datos[i].nombre + " " + datos[i].apellido+'<br>';
data+=       'Edad: ' + datos[i].edad + '<br>';
data+=       "Profesión: " + datos[i].profesion+'</p>';
data +=   '</div>'
data +=   '</div>'
}
data +=   '</div>'
return data;
}