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
                            <button id="${productName}" type="button" class="btn btn-outline-dark btnBestil">Bestil</button>
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

    static clickHandler(productID) {
        // console.log("clickHandler is clicked!! :)");

        // cart.push(objParamereterHer?);

        
        var objKeys = Object.keys(Product.Instances);
        var productToAdd = null;
        
        for (let i = 0; i < objKeys.length; i++) {
            var objKey = objKeys[i];

            if (Product.Instances[objKey].navn === productID) {
                productToAdd = Product.Instances[objKey];
                console.log("Found the product to add!");
                console.log(Product.Instances[objKey].navn);
            }
        }
        
        if (productToAdd) {
            cart.push(productToAdd);

            cartSum += parseFloat(productToAdd.pris);
            console.log("Product added to cart!");
        }
        else {
            console.log("productToAdd was empty. Could not add to cart");
        }

    };

    static setupUserInterface() {
        //Loads all products from sessionStorage and saving to Product.Instances, or if empty, creating testdata and saving to Product.Instances
        Product.loadAll();

        var i = 0;
        var objKeys = Object.keys(Product.Instances);

        for (i = 0; i < objKeys.length; i++) {
            var objKey = objKeys[i];
            ProductCard.createProductCard(Product.Instances[objKey]);
        }
        
        console.log(i + " ProductCards created.");
    };
};

//Calls the loadAll method, and create for ProductCard for each product
window.addEventListener("onload", ProductCard.setupUserInterface());

//Lytter til alle click's på hele siden, og så kører en function for kun at gøre noget hvis det er en af Bestil knapperne som bliver clicked
window.addEventListener("click", 
    function (event) {
        if (event.target.classList.contains("btnBestil")) {  
            ProductCard.clickHandler(event.target.id);
        }
    },
    false
);