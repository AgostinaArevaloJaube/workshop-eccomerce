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

// TODO ------------------------------ IARA

// Validación de pago con tarjeta
//Validación del número de la tarjeta, false si tiene < 16 digitos
var cardNumber = document.getElementById("card-number");
function validacionNumber() {
  if (cardNumber.value.length !== 16) {
    cardNumber.style.borderColor = "#FD3636";
    return false;
  } else {
    cardNumber.style.borderColor = "#A2FF45";
    return true;
  }
}
//Validación del nombre en la tarjeta, false si Holder < 3 caracteres
var cardName = document.getElementById("card-holder");
function validacionName() {
  if (cardName.value.length < 3) {
    cardName.style.borderColor = "#FD3636";
    return false;
  } else {
    cardName.style.borderColor = "#A2FF45";
    return true;
  }
}
// Validación de la selección de mes y año, false si month || year == "null"
var cardExpirationMonth = document.getElementById("card-expiration-month");
var cardExpirationYear = document.getElementById("card-expiration-year");
function validacionMonthYear() {
  if (
    cardExpirationMonth.value == null ||
    cardExpirationMonth.value == 0 ||
    cardExpirationYear.value == null ||
    cardExpirationYear.value == 0
  ) {
    cardExpirationMonth.style.borderColor = "#FD3636";
    cardExpirationYear.style.borderColor = "#FD3636";
    return false;
  } else {
    cardExpirationMonth.style.borderColor = "#A2FF45";
    cardExpirationYear.style.borderColor = "#A2FF45";
    return true;
  }
}
// Validación del CVV, false si CVV < 3 digitos
var cardCVV = document.getElementById("card-ccv");
function validacionCVV() {
  if (cardCVV.value.length < 3) {
    cardCVV.style.borderColor = "#FD3636";
    return false;
  } else {
    cardCVV.style.borderColor = "#A2FF45";
    return true;
  }
}
//Llamo a las funciones para ejecutarlas
validacionCVV();
validacionName();
validacionNumber();
validacionMonthYear();
//Validación de la compra, una vez completados y validados los datos se da el OK de la compra
//Quise redireccionar al inicio pero no pude, si alguien sabe como se hace, bienvenido sea su aporte
function validacionCompra() {
  if (
    !validacionNumber() ||
    !validacionName() ||
    !validacionCVV() ||
    !validacionMonthYear()
  ) {
    alert(
      "Corrobore sus datos, ningun casillero puede permanecer de color rojo.\n No pudo realizarse la compra."
    );
  } else {
    alert("Los datos son correctos, su compra ha sido realizada!");
    /*var ok = window.confirm("¿Desea continuar navegando en nuestra web?");
    if (ok){
      redireccionamiento();
    }else{
      alert("Muchas gracias por su compra!");
    }*/
  }
}
/*function redireccionamiento() {
  window.location.assign("/index.html");
}*/

//funcion que muestra un producto en la seccion de pago
const display = (item) => {
  li = document.createElement("li");

  li.innerHTML = `<img src="${item.img}"/> <span>${item.nombre} : $${item.valor}            <button class="btnDelete" id ="${item.id}">x</button></span>`;
  document.getElementById("cart").appendChild(li);
};

const carro = JSON.parse(localStorage.getItem("carro"));

//funcion que muestra el carrito con todos los productos
const cart = (items) => {
  let total = 0;
  carro.forEach((i) => {
    display(i);
    total += i.valor;
  });
  document.querySelector(".totalAmount").innerHTML = `Total: $${total} `;
};
cart(carro);

//funcion para borrar items del carrito
const deleteItem = (e) => {
  //primero se borran todos los elementos del carro
  for (i = 0; i < carro.length; i++) {
    document
      .getElementById("cart")
      .removeChild(document.querySelector("#cart li"));
  }
  //se detecta el id del boton que se toco
  const id = e.target.attributes.id.value;
  const index = carro.findIndex((i) => i.id == id);
  //si existe un elemento en el carro que coincida con el numero de id se borra y se actualiza el carro
  if (index != -1) {
    carro.splice(index, 1);
    localStorage.setItem("carro", JSON.stringify(carro));
    cart(carro);
    listener();
  }
};

//se ponen los listener dentro de una funcion para poder actualizarlo cada vez que se borra un item
const listener = () => {
  const deleteBtns = document.querySelectorAll(".btnDelete");
  deleteBtns.forEach((i) => {
    i.addEventListener("click", deleteItem);
  });
};

listener();

//
