function findArrayIndex(array, text) {
    return array.indexOf(text);
}

const mainCharacters = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
];
console.log(findArrayIndex(mainCharacters, "Rey"));
//Parte 2
//devuelvo array sin el elemento que le paso, el cual me dice donde esta findArrayIndex
function removeItem(array, item) {
    let salida = [];
    let skip = findArrayIndex(array, item);
    if (skip === -1) {
        salida = array;
    }
    else {
        for (let i = 0; i < array.length; i++) {
            if (i !== skip) {
                salida.push(array[i]);
            }
        }
    }
    return salida;
}
console.log(removeItem(mainCharacters, "Rey"));