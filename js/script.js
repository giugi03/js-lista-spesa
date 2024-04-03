// array

const elemSpesa = [ "latte", "nutella", "caffe", "carne",  "uova" ];

// variabile tracker

let indiceSpesa = 0;

// contenuto HTML

let contenutoHTML = '';


while (indiceSpesa < elemSpesa.length) {
    // console.log(indiceSpesa);
    contenutoHTML += `<li> ${elemSpesa[indiceSpesa]}</li>`;
    indiceSpesa++;
}

document.getElementById('listaSpesaContainer').innerHTML = contenutoHTML;