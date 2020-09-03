//Clase Productos
class Productos {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
  }
}
//Objetos - Array productos
let producto = [
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

let carro = [];
localStorage.setItem("carro", JSON.stringify(carro));

//añadir al carro -D-
const btnAñadir = document.querySelectorAll(".btn_añadir");
const añadirHandler = (e) => {
  console.log(e.target.attributes.id.value);
  //tomar id del producto seleccionado
  const id = e.target.attributes.id.value;
  const carro = JSON.parse(localStorage.getItem("carro"));
  //buscar en array principal de productos
  producto.forEach((i) => {
    if (i.id === id) {
      carro.push(i);
    }
  });
  localStorage.setItem("carro", JSON.stringify(carro));
  //guardarlo en nuevo array de localstorage
};
btnAñadir.forEach((i) => i.addEventListener("click", añadirHandler));

// TODO ------------------------------ AGOS

// Selección del metodo de delivery de la compra

// Primero: guardar el formulario.

const deliveryMethodForm = document.querySelector("#selectionDelivery");

// Segundo: guardar la section de envio y retiro

const deliveryMethod = document.querySelector("#deliveryOption");

const pickUpMethod = document.querySelector("#pickUpOpcion");

// Tercero: realizar el evento sobre el form.
const showDelivery = deliveryMethodForm.addEventListener("click", function () {
  // Cuarto: guardar el valor clickeado por el usuario
  let deliveryMethodChosen = deliveryMethodForm.methodChosen.value;

  // Quinto: hacer las comparaciones para que se escondan o se agreguen las clases.
  if (deliveryMethodChosen === "Entrega a domicilio") {
    deliveryMethod.classList.remove("hidden");
    pickUpMethod.classList.add("hidden");
  } else {
    pickUpMethod.classList.remove("hidden");
    deliveryMethod.classList.add("hidden");
  }
});
