const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
];
function swap(array, index1, index2) {
    let salida = [];
    for (let index = 0; index < array.length; index++) {
        if (index === index1) {
            salida.push(array[index2]);
        }
        else if (index === index2) {
            salida.push(array[index1]);
        }
        else {
            salida.push(array[index]);
        }

    }
    return salida;
}