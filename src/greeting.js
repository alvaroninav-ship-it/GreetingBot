function Greet(name, sexo, edad, idioma) {
    const hora = new Date().getHours();
    let message = '';

    if (idioma === 'es') {
        if (name==''){
            name='visitante';
        }
        if (hora < 12) {
            message = 'Buenos días, ';
        } else if (hora < 18) {
            message = 'Buenas tardes, ';
        } else {
            message = 'Buenas noches, ';
        }
        if (edad >= 18) {
            if (sexo === 'masculino') {
                message += 'Sr. ';
            } else if (sexo === 'femenino') {
                message += 'Sra. ';
            }
        }
    } else if (idioma === 'en') {
        if (name==''){
            name='visitor';
        }
        if (hora < 12) {
            message = 'Good morning, ';
        } else if (hora < 18) {
            message = 'Good afternoon, ';
        } else {
            message = 'Good evening, ';
        }

        if (edad >= 18) {
            if (sexo === 'masculino') {
                message += 'Mr. ';
            } else if (sexo === 'femenino') {
                message += 'Ms. ';
            }
        }
    }

    message += name + '!';

    return message;
}

export default Greet;