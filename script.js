// campo minato :
// 1- creo i bottoni con le selezione delle modalita 
//     selezione opzione 1 --> griglia grande 
//     selezione opzione 2 --> griglia piu grando 
// 2- le varie selezioni fanno venire fuori una griglia diversa


function generaGriglia() {
    // Leggi la selezione dell'utente
    var modalita = document.getElementById("modalita").value;

    // Trova il container
    var container = document.getElementById("container");



    // Determina il numero massimo per la modalità selezionata
    var numeroMassimo;
    if (modalita === "facile") {
        numeroMassimo = 100;
    } else if (modalita === "medio") {
        numeroMassimo = 81;
    } else if (modalita === "difficile") {
        numeroMassimo = 49;
    }

    // Genera quadratini con numeri da 1 al numero massimo
    for (var i = 1; i <= numeroMassimo; i++) {
        var quadrato = document.createElement("div");
        quadrato.className = "square";
        quadrato.textContent = i;
        container.appendChild(quadrato);
    }

    // Mostra il container
    container.style.display = "block";

    // Puoi fare ulteriori azioni in base alla modalità selezionata
    alert("Modalità selezionata: " + modalita);
}

