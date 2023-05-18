const numbers = prompt('Inserisci un valore.');

const numbersList = numbers.split(''); //* Scompone i caratteri della stringa inserita in elementi di un array

let sum = 0;

for (let i = 0; i < numbersList.length; i++){
    const arrayElement = parseInt(numbersList[i]); //* Ogni elemento diventa un numero
    sum = sum + arrayElement; //* calcolo la somma per ogni valore
}

console.log(`Somma: ${sum}`);

