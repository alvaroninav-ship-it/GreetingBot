function Greet(name,gender) {
    const hora = new Date().getHours();

    if (hora < 12) {
        return `Buenos días ,${gender} ${name}`;
    } else if (hora < 18) {
        return `Buenas tardes, ${gender} ${name}`;
    } else {
        return `Buenas noches, ${gender} ${name}`;
    }
}

export default Greet;