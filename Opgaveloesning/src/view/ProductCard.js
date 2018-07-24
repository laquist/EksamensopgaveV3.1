// En klasse til ProductCard der kan tage en eller flere produkter fra Product.instances og oprette et HTML element. Denne klasse kan indeholde følgende metoder:
//  createProductCard() – Opretter et HTML element med informationer fra et produkt.
//  clickHandler() – Bruges når der klikkes på ’Bestil. 
//     - Tilføjer produktet til bestillingslisten. 
//     - Lægger prisen til den samlede pris i listen og opdaterer DOM.
//     - Efterfølgende skal denne ændring gemmes i localStorage eller sessionStorage så brugeren som minimum ikke mister data ved browser refresh.
//  setupUserInterface() – kalder loadAll() og sætter hvert produkt ind på siden. 

class ProductCard {

    constructor() {

    };

    static createProductCard(productObj) {

        var productName = productObj.navn;
        var productDescription = productObj.beskrivelse;
        var productPrice = productObj.pris;
        var productImg = productObj.img;


        var newCardString = `
        <article class="col-12 col-sm-12 com-md-6 col-lg-6 col-xl-6">
            <div class="card product mb-4 mx-auto">
                <img class="card-img-top" src="src/img/${productImg}" alt="${productName}">
                <div class="card-body">
                    <h5 class="card-title">${productName}</h5>
                    <p class="card-text">${productDescription}</p>
                    <div class="row">
                        <div class="col-12">
                            <button type="button" class="btn btn-outline-dark btnBestil">Bestil</button>
                            <p class="float-right m-0">${productPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        `;

        var pathElement = document.getElementById('productCardContainer');
        
        pathElement.innerHTML += newCardString;
    
    };

    clickHandler() {

    };

    setupUserInterface() {

    };
};






// *****************
// Har lavet alle knapperne på produkterne om til buttons i stedet for <a> tags og givet alle Bestil knapperne på produkterne, class'en btnBestil
// Til at kunne sætte en event listener på om de bliver trykket på