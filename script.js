// campo minato :
// 1- creo i bottoni con le selezione delle modalita 
//     selezione opzione 1 --> griglia grande 
//     selezione opzione 2 --> griglia piu grando 
// 2- le varie selezioni fanno venire fuori una griglia diversa


// funzione di creazione della griglia 
 function generaGriglia(){
    // leggi la slezione dell'utente 
    let mod = document.getElementById("modalita").value;

    let container = document.getElementsByClassName("container");

    // numero massimo per la modalita selezinata 
    let nQuadrati;
    if(modalita === "facile"){
        nQuadrati = 100;
    }else if (modalita === "medio"){
        nQuadrati= 81
    }else if (modalita === "difficile"){
        nQuadrati = 49
    }
//   generiamo i quadratini 
 }
