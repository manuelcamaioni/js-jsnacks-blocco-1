const inviteList = ['Luciana', 'Massimo', 'Anotnia', 'Luca', 'Marcolino'];
let access = false;
const inviteName = prompt('Inserisci nome dell\'invitato/a');

    for(let i = 0; i < inviteList.length; i++){

        if(inviteName === inviteList[i]){
            access = true;
        }
    }

    if(access == true){
        const selectGender = prompt('Inserisci il genere della persona invitata. M/F');
            if(selectGender === 'M' || selectGender != 'F'){
                console.log(`${inviteName} è stato invitato.`);
                
            }else if(selectGender === 'F'){

                console.log(`${inviteName} è stata invitata.`);
                
            } else {
                console.log('Errore nell\'inserimento dei dati');
            }
    }