let productos = [{ name: "asdf", id: "1" }, {}];
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





// TODO ------------------------------ AGOS

// Selección del metodo de delivery de la compra

// Primero: guardar el formulario.

const deliveryMethodForm = document.querySelector('#selectionDelivery');

// Segundo: guardar la section de envio y retiro

const deliveryMethod = document.querySelector('#deliveryOption');

const pickUpMethod = document.querySelector('#pickUpOpcion');


// Eventu
const showDelivery = deliveryMethodForm.addEventListener('click', function () {
  // Tercero: guardar el valor clickeado por el usuario
  let deliveryMethodChosen = deliveryMethodForm.methodChosen.value;

  if (deliveryMethodChosen === "Entrega a domicilio") {
    deliveryMethod.classList.remove('hidden');
    pickUpMethod.classList.add('hidden');
  } else {
    pickUpMethod.classList.remove('hidden');
    deliveryMethod.classList.add('hidden');
  }

});


