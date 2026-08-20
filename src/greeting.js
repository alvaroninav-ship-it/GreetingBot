function Greet(name) {
    const hora = new Date().getHours();

    if (hora < 12) {
        return `Buenos días, ${name}`;
    } else if (hora < 18) {
        return `Buenas tardes, ${name}`;
    } else {
        return `Buenas noches, ${name}`;
    }
}

export default Greet;