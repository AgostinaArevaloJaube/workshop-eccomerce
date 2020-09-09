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
    img: "assets/store_files/image-asset.jpeg",
  },
  {
    nombre: "Do Chua",
    valor: 10,
    id: 2,
    img: "assets/store_files/image-asset(1).jpeg",
  },
  {
    nombre: "Limones",
    valor: 10,
    id: 3,
    img: "assets/store_files/image-asset(2).jpeg",
  },
  {
    nombre: "Sauerkraut",
    valor: 10,
    id: 4,
    img: "assets/store_files/image-asset(3).jpeg",
  },
  {
    nombre: "Alcaparras",
    valor: 10,
    id: 5,
    img: "assets/store_files/image-asset(4).jpeg",
  },
  {
    nombre: "Remolachas",
    valor: 10,
    id: 6,
    img: "assets/store_files/image-asset(5).jpeg",
  },
];

//TODO añadir producto al carro -D-

const btnAñadir = document.querySelectorAll(".btn_añadir");

// ** esta funcion va a guardar en el array "carro" el numero de id del producto que añada al carrito**
const añadirHandler = (e) => {
  //tomar id del producto seleccionado
  const id = parseInt(e.target.attributes.id.value);
  if (localStorage.getItem("carro")) {
    var carro = JSON.parse(localStorage.getItem("carro"));
  } else {
    var carro = [];
  }

  //buscar en array principal de productos cual coincide con el id del producto
  products.forEach((i) => {
    if (i.id === id) {
      //agregar el item al array
      carro.push(i);
    }
  });
  localStorage.setItem("carro", JSON.stringify(carro));
  //guardar el array carro en el local storage
  console.log(localStorage.getItem("carro"));
};
btnAñadir.forEach((i) => i.addEventListener("click", añadirHandler));
