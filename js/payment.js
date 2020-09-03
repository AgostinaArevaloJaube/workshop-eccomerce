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
