function switchIdiom(idioma) {
    const sexo = document.getElementById('sexo');
    const idiomas=document.getElementById('idioma');
    if (idioma === 'es') {
        document.getElementById('nombre-label').textContent =
            '¿Cuál es tu nombre?';

        document.getElementById('sexo-label').textContent =
            'Sexo:';
        sexo.options[0].textContent = 'Selecciona una opción';
        sexo.options[1].textContent = 'Masculino';
        sexo.options[2].textContent = 'Femenino';

        document.getElementById('edad-label').textContent =
            '¿Cuál es tu edad?';
        idiomas.options[0].textContent = 'Selecciona un idioma';
        idiomas.options[1].textContent = 'Español';
        idiomas.options[2].textContent = 'Inglés';

        document.getElementById('saludar-button').value =
            'Saludar';
    } else {
        document.getElementById('nombre-label').textContent =
            'What is your name?';

        document.getElementById('sexo-label').textContent =
            'Gender:';
        sexo.options[0].textContent = 'Select an option';
        sexo.options[1].textContent = 'Male';
        sexo.options[2].textContent = 'Female';

        document.getElementById('edad-label').textContent =
            'How old are you?';
        idiomas.options[0].textContent = 'Select a language';
        idiomas.options[1].textContent = 'Spanish';
        idiomas.options[2].textContent = 'English';
        document.getElementById('saludar-button').value =
            'Greet';
    }
}

export default switchIdiom;