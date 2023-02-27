"use strict";
const user = document.querySelector(".js-user");
const btn = document.querySelector(".js-btn");

const clue = document.querySelector(".js-clue");
const total = document.querySelector(".js-total");
const tries = document.querySelector(".js-tries");

const random = getRandomNumber(100);
console.log(random);

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//funcion +evento click boton
function handleClick(ev) {
  ev.preventDefault();
  getNumber();
  updateNumber();
}
btn.addEventListener("click", handleClick);

//funcion para sumar el total de intentos

let sumTotal = 0;
//funcion para recoger el valor que intruduce el usuario(la que yo hice(no modificaba solo el numero sino todo el texto...añadir etiqueta span en html))
function updateNumber() {
  sumTotal = sumTotal + 1;
  tries.innerHTML = sumTotal;
}

//condicional

const getNumber = () => {
  const userValue = parseInt(user.value);

  if (userValue > 100) {
    clue.innerHTML = "El numero debe estar entre 1 y 100";
  } else if (userValue > random) {
    clue.innerHTML = "Demasiado alto";
  } else if (userValue < random) {
    clue.innerHTML = "Demasiado bajo";
  } else if (userValue === random) {
    clue.innerHTML = "Has ganado campeona";
  }
};
