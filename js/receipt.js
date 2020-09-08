//ARRAY DE ITEMS
var arrayItems = JSON.parse(localStorage.getItem("carro"));
var precios = 0;
//OBJETOS
var lista = document.querySelector(".rec_list");

agregarItems();
//FUNCIONES
function agregarItems() {
  for (let index = 0; index < arrayItems.length; index++) {
    var agregado = document.createElement("LI");
    agregado.innerHTML = arrayItems[index].nombre;
    lista.appendChild(agregado);
  }
}
