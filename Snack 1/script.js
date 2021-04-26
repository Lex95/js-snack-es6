const bici = [
    {nome: "La Rossa", peso: 500},
    {nome: "La Blu", peso: 600},
    {nome: "La Viola", peso: 520},
    {nome: "La Gialla", peso: 550},
    {nome: "La Nera", peso: 650},
    {nome: "La Bianca", peso: 540},
    {nome: "La Rosa", peso: 490},
    {nome: "La Verde", peso: 400},
    {nome: "La Marrone", peso: 530},
    {nome: "L'Arancione", peso: 610},
];
let position = 0;
let temp = bici[0].peso;

for (let i = 0; i < bici.length; i++) {
    if (bici[i].peso < temp) {
        temp = bici[i].peso;
        position = i;
    }
}

var {nome, peso} = bici[position];
document.getElementById("myH1").innerHTML = `La bici più leggera è ${nome} con un peso di ${peso} grammi!`;