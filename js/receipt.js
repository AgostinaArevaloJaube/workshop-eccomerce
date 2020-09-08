//ARRAY DE ITEMS
var arrayItems = JSON.parse(localStorage.getItem("carro"));
var precios = 0;

//OBJETOS
var lista = document.querySelector(".rec_list");
var listaPrecios = document.querySelector(".rec_precios");
var totalSpan = document.querySelector(".rec_h2 span");
var entrega = document.querySelector(".rec_detalles span")

//EJECUCION
agregarItems();
entregaFuncion();
//FUNCIONES
function agregarItems() {
  for (let index = 0; index < arrayItems.length; index++) {
    var agregado = document.createElement("LI");
    var agregadoPrecios = document.createElement("LI");
    precios += arrayItems[index].valor;
    agregado.innerHTML = arrayItems[index].nombre;
    agregadoPrecios.innerHTML = arrayItems[index].valor;
    lista.appendChild(agregado);
    listaPrecios.appendChild(agregadoPrecios);
  }
  totalSpan.innerHTML = precios;
}

function entregaFuncion() {
    if (localStorage.getItem("entrega") == 1){
        entrega.innerHTML = "Envío a domicilio";
    } else{
        entrega.innerHTML = "Retiro por showroom";
    }
}

