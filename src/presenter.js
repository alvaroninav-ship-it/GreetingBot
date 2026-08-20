import Greet from './greeting.js';
import switchIdiom from './switchIdiom.js';

const form = document.getElementById('formulario');
const resultadoDiv = document.getElementById('resultado-div');

const idioma = document.getElementById('idioma');

idioma.addEventListener('change', () => {
    switchIdiom(idioma.value);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nombre').value;
    const gender = document.getElementById('sexo').value;
    const age = parseInt(document.getElementById('edad').value);

    const greetingMessage = Greet(
        name,
        gender,
        age,
        idioma.value
    );

    resultadoDiv.textContent = greetingMessage;
});