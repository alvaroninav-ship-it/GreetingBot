function Greet(name,sexo,edad) {
    const hora = new Date().getHours();
    let message='';
    if (hora < 12) {
        message+= `Buenos días, `;
    } else if (hora < 18) {
        message+= `Buenas tardes,  `;
    } else {
        message+= `Buenas noches,  `;
    }
    if (edad >= 18) {
        if (sexo === 'masculino') {
            message += ' Sr. ';
        } else if (sexo === 'femenino') {
            message += ' Sra. ';
        }
    }
    message+= name + '!';
    return message;
}

export default Greet;