import Greet from './greeting.js';

const form = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado-div');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nombre').value;

    const greetingMessage = Greet(name);

    resultadoDiv.textContent = greetingMessage;
});