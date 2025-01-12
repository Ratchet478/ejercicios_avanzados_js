const users = [
    {
        name: "Alberto",
        favoritesSounds: {
            waves: { format: "mp3", volume: 50 },
            rain: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Antonio",
        favoritesSounds: {
            waves: { format: "mp3", volume: 30 },
            shower: { format: "ogg", volume: 55 },
            train: { format: "mp3", volume: 60 },
        },
    },
    {
        name: "Santiago",
        favoritesSounds: {
            shower: { format: "mp3", volume: 50 },
            train: { format: "ogg", volume: 60 },
            firecamp: { format: "mp3", volume: 80 },
        },
    },
    {
        name: "Laura",
        favoritesSounds: {
            waves: { format: "mp3", volume: 67 },
            wind: { format: "ogg", volume: 35 },
            firecamp: { format: "mp3", volume: 60 },
        },
    },
];

for (const user of users) {
    let volMedio = 0;
    let salida = "";
    let volTotal = 0;
    for (const favoriteSound in user.favoritesSounds) {
        volTotal += user.favoritesSounds[favoriteSound].volume;
    }
    volMedio = volTotal / Object.keys(user.favoritesSounds).length;
    salida = `El volumen medio de ${user.name} es ${volMedio}`;
    console.log(salida);
}
