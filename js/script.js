// const elemSpesa = [
//     "latte", 
//     "nutella", 
//     "caffe", 
//     "carne",  
//     "uova",
//     "pane",
//     "pasta",
//     "riso",
//     "zucchero",
//     "sale",
//     "burro",
//     "formaggio",
//     "miele",
//     "pomodori",
//     "insalata"
// ];

// // contenuto HTML
// let contenutoHTML = '';

// for (let i = 0; i < elemSpesa.length; i++) {
//     contenutoHTML += `<li>${elemSpesa[i]}</li>`;
// }

// // Inserisce la lista
// const listaSpesaContainer = document.getElementById('listaSpesaContainer');
// if (listaSpesaContainer) {
//     listaSpesaContainer.innerHTML = `<ul>${contenutoHTML}</ul>`;
// } else {
//     console.error("Elemento con id 'listaSpesaContainer' non trovato.");
// }



const elemSpesa = [
    "latte", 
    "nutella", 
    "caffe", 
    "carne",  
    "uova",
    "pane",
    "pasta",
    "riso",
    "zucchero",
    "sale",
    "burro",
    "formaggio",
    "miele",
    "pomodori",
    "insalata"
];

// contenuto HTML
let contenutoHTML = '';
let i = 0;  // inizializza il contatore

// Utilizza un ciclo while per attraversare l'array
while (i < elemSpesa.length) {
    contenutoHTML += `<li>${elemSpesa[i]}</li>`;
    i++;  // incrementa il contatore
}

// Inserisce la lista
const listaSpesaContainer = document.getElementById('listaSpesaContainer');
if (listaSpesaContainer) {
    listaSpesaContainer.innerHTML = `<ul>${contenutoHTML}</ul>`;
} else {
    console.error("Elemento con id 'listaSpesaContainer' non trovato.");
}




// La differenza principale tra i cicli while e for in programmazione, in particolare in JavaScript, riguarda la sintassi e il modo in cui vengono gestite le condizioni e l'iterazione. Entrambi i cicli possono essere utilizzati per eseguire un blocco di codice più volte, ma sono strutturati in modo diverso e possono essere scelti in base alle specifiche esigenze del problema da risolvere.

// Ciclo for
// Il ciclo for è generalmente usato quando il numero di iterazioni è noto prima che il ciclo inizi. La sua sintassi include tre parti principali: inizializzazione, condizione di continuazione, e incremento, tutte racchiuse in un'unica riga.
// Parti del ciclo for:

// Inizializzazione (let i = 0): Imposta il punto di partenza del ciclo.
// Condizione (i < 10): Definisce fino a quando il ciclo dovrebbe continuare.
// Incremento (i++): Aggiorna il valore per la prossima iterazione.
// Ciclo while
// Il ciclo while è usato quando il numero di iterazioni non è noto prima dell'inizio del ciclo o quando il ciclo deve continuare finché una condizione specifica è vera. La condizione è valutata prima dell'esecuzione del blocco di codice.
// Parti del ciclo while:

// Condizione (i < 10): Definisce fino a quando il ciclo dovrebbe continuare. Viene valutata prima di ogni iterazione.
// Blocco di codice: Viene eseguito finché la condizione è vera.
// Aggiornamento della condizione (i++): Tipicamente alla fine del blocco di codice per prepararsi alla prossima iterazione.

