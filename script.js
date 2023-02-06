tab1 = [ 5, -8, 12, 35, -94, 54, -14, 42, -31, -42 ]
 tab2 = [ 10, -54, -36, 30, 16, -64, 84, -95, 12, -30]

 console.table(tab1);
 console.table(tab2);

 const tab3 = tab1.filter(number => number > 0);
 console.table(tab3);

tab2.fill(0);
console.table(tab2);

// Prend en entrée un tableau d'entiers
function displayArray(tab1) {
 // Affiche les éléments du tableau dans le DOM
 const resultDiv = document.getElementById("result");
 resultDiv.innerHTML = `Tableau : [${result}]`;
}

