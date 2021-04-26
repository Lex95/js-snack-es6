const squadre = [
    {nome: "Juventus", puntiFatti: 0, falliSubiti: 0},
    {nome: "Milan", puntiFatti: 0, falliSubiti: 0},
    {nome: "Inter", puntiFatti: 0, falliSubiti: 0},
    {nome: "Roma", puntiFatti: 0, falliSubiti: 0},
    {nome: "Lazio", puntiFatti: 0, falliSubiti: 0},
    {nome: "Napoli", puntiFatti: 0, falliSubiti: 0},
];

var randomNumber = () => Math.floor(Math.random() * 10);

for (let i = 0; i < squadre.length; i++) {
    squadre[i].puntiFatti = randomNumber();
    squadre[i].falliSubiti = randomNumber();
};

var arrayFinal = [];

for (let i = 0; i < squadre.length; i++) {
    let {nome, falliSubiti} = squadre[i];
    arrayFinal.push({nome, falliSubiti});
};

console.log(arrayFinal);