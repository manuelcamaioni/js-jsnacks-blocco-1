const numbers = prompt('Inserisci un valore.');

const numbersList = numbers.split('');

let sum = 0;

for (let i = 0; i < numbersList.length; i++){
    const num = parseInt(numbersList[i]);
    sum = sum + num;
}

console.log(`Somma: ${sum}`);

