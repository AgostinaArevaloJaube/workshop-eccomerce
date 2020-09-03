//Clase Productos
class Productos {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}
//Objetos - Array productos
let products = [
  {
    nombre: "Beni Shoga",
    valor: 10,
    id: 1,
  },
  {
    nombre: "Do Chua",
    valor: 10,
    id: 2,
  },
  {
    nombre: "Limones",
    valor: 10,
    id: 3,
  },
  {
    nombre: "Sauerkraut",
    valor: 10,
    id: 4,
  },
  {
    nombre: "Alcaparras",
    valor: 10,
    id: 5,
  },
  {
    nombre: "Remolachas",
    valor: 10,
    id: 6,
  },
];

//TODO añadir producto al carro -D-

const btnAñadir = document.querySelectorAll(".btn_añadir");

// ** esta funcion va a guardar en el array "carro" el numero de id del producto que añada al carrito**
const añadirHandler = (e) => {
  //tomar id del producto seleccionado
  const id = parseInt(e.target.attributes.id.value);
  let carro = JSON.parse(localStorage.getItem("carro"));
  //buscar en array principal de productos cuala coincide con el id del producto
  products.forEach((i) => {
    if (i.id === id) {
      //agregar el id al array
      carro.push(i.id);
    }
  });
  localStorage.setItem("carro", JSON.stringify(carro));
  //guardar el array carro en el local storage
  console.log(localStorage.getItem("carro"));
};
btnAñadir.forEach((i) => i.addEventListener("click", añadirHandler));
