/* 

    Dato un array di prodotti da comprare, stampare in pagina una lista della spesa

    Passi da seguire:
    1) Definisco un array di stringhe
    2) Creo un contenitore per la mia lista nell'HTML
    3) Scorro tutto l'array
        - Per ogni elemento, lo aggiungo nel contenitore precedentemente creato

*/

const myList = document.getElementById('grocery-list');
console.log('myList', myList, typeof myList);

const groceryList = [
    'Latte',
    'Uova',
    'Pomodori',
    'Insalata',
    'Crocchette per il gatto',
    'Detersivo per i panni'
];

for (
    let pippo = 0;                   // PEZZO 1
    pippo < groceryList.length;      // PEZZO 2
    pippo++                          // PEZZO 3
) {
    console.log(groceryList[pippo]);

    // myList.innerHTML += `<li>${groceryList[pippo]}</li>`;
    /* OPPURE */
    // myList.innerHTML = myList.innerHTML + `<li>${groceryList[pippo]}</li>`;

    const newLi = document.createElement('li');
    newLi.innerHTML = groceryList[pippo];
    newLi.addEventListener('click', function () {
        newLi.classList.toggle('done');
    });

    myList.append(newLi);
}

document.querySelector('form').addEventListener(
    'submit',
    function (gino) {
        gino.preventDefault();

        const productInput = document.getElementById('product');

        const newProduct = productInput.value;
        console.log('newProduct', newProduct, newProduct.length, typeof newProduct);

        if (newProduct.length >= 3) {
            productInput.value = '';

            groceryList.push(newProduct);

            const newLi = document.createElement('li');
            newLi.innerHTML = newProduct;
            newLi.addEventListener('click', function () {
                newLi.classList.toggle('done');
            });
        
            myList.append(newLi);
        }
        else {
            alert('SCL');
        }
    }
);

document.getElementById('empty-list').addEventListener(
    'click',
    function () {
        myList.innerHTML = '';
    }
);

document.getElementById('restore-list').addEventListener(
    'click',
    function () {
        for (
            let pippo = 0;                   // PEZZO 1
            pippo < groceryList.length;      // PEZZO 2
            pippo++                          // PEZZO 3
        ) {
            console.log(groceryList[pippo]);
        
            // myList.innerHTML += `<li>${groceryList[pippo]}</li>`;
            /* OPPURE */
            // myList.innerHTML = myList.innerHTML + `<li>${groceryList[pippo]}</li>`;
        
            const newLi = document.createElement('li');
            newLi.innerHTML = groceryList[pippo];
            newLi.addEventListener('click', function () {
                newLi.classList.toggle('done');
            });
        
            myList.append(newLi);
        }
    }
);

/* 
    VERSIONE CON IL WHILE
*/
// let pippo = 0;                              // PEZZO 1
// while (pippo < groceryList.length) {        // PEZZO 2
//     console.log(groceryList[pippo]);
    
//     myList.innerHTML = myList.innerHTML + `<li>${groceryList[pippo]}</li>`;
    
//     pippo++;                                // PEZZO 3
// }