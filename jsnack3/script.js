const numbersList = [];

for(let i = 0; i < 6; i++){
    const insertedNumber = parseInt(prompt('Inserisci un valore.'));
    if(insertedNumber % 2 !== 0){
        numbersList.push(insertedNumber);
    }
}

console.log(numbersList);