import sumar from "./sumador";
import multiplicar from "./multiplicador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

const multiplyForm = document.querySelector("#multiplicar-form");
const firstNumberM= document.querySelector("#primer-numeroM");
const secondNumberM = document.querySelector("#segundo-numeroM");
const divM = document.querySelector("#resultado-divM");

multiplyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(firstNumberM.value);
  const secondNumber = Number.parseInt(secondNumberM.value);
  divM.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});