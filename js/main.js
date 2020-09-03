//Clase Productos
class Productos {
  constructor(nombre, valor){
      this.nombre = nombre;
      this.valor = valor;
  }
}
//Objetos - Array productos
let Products = [
  { 
     nombre: "Beni Shoga",
      valor: 10,
  },
  {
      nombre: "Do Chua",
      valor: 10,
  },
  {
      nombre: "Limones",
      valor: 10,
  },
  {
      nombre: "Sauerkraut",
      valor: 10,
  },
  {
      nombre: "Alcaparras",
      valor: 10,
  },
  {
      nombre: "Remolachas",
      valor: 10,
  }

])

let carro = [];
localStorage.setItem("carro", JSON.stringify(carro));

//añadir al carro -D-
const btnAñadir = document.querySelectorAll("button");
const añadirHandler = (e) => {
  console.log(e.target.attributes.id.value);
  //tomar id del producto seleccionado
  const id = e.target.attributes.id.value;
  const carro = JSON.parse(localStorage.getItem("carro"));
  //buscar en array principal de productos
  productos.forEach((i) => {
    if (i.id === id) {
      carro.push(i);
    }
  });
  localStorage.setItem("carro", JSON.stringify(carro));
  //guardarlo en nuevo array de localstorage
};
btnAñadir.forEach((i) => i.addEventListener("click", añadirHandler));





//-------------------------------- AGOS

// Selección del metodo de delivery de la compra

// Primero: guardar el formulario.

const deliveryMethodForm = document.querySelector('#selectionDelivery');

// Segundo: guardar la section de envio y retiro

const deliveryMethod = document.querySelector('#deliveryOption');

const pickUpMethod = document.querySelector('#pickUpOpcion');;


// Tercero: guardar el valor clickeado por el usuario
const deliveryMethodChosen = deliveryMethodForm.methodChosen.value;

// Cuarto: si cuando clickea el valor es igual a entrega a domilicio que sale la clase hidden del elemento.
const showDelivery = deliveryMethodForm.addEventListener('click', function () {

  if (deliveryMethodChosen === "Entrega a domicilio") {
    deliveryMethod.classList.remove('hidden');
  } else {
    pickUpMethod.classList.remove('hidden');
  }
});

// ! Entra siempre por el else!!!!!!!!!!!!
