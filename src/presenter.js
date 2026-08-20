import Greet from './greeting.js';

const form = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado-div');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nombre').value;
    const gender = document.getElementById('sexo').value;
    const age = parseInt(document.getElementById('edad').value);

    const greetingMessage = Greet(name, gender, age);

    resultadoDiv.textContent = greetingMessage;
});