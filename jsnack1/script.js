const storeNumbers = [];
let sum = 0;

for(let i = 0; i < 10; i++){
    const numToInsert = parseInt(prompt(`Inserisci dieci numeri: `));
    console.log(numToInsert);
    storeNumbers.push(numToInsert);
    sum = sum + numToInsert;
}

console.log('somma:' + sum);