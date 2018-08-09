//Array
var cart = [];

var cartSum = 0; //lav en function/metode til at regne dette ud og opdatere det i DOM?

function cartSaveAll () {
    let valueString = "";
    let error = false;

    try {
        valueString = JSON.stringify(cart);
        sessionStorage.setItem('Cart', valueString);
    }
    catch (e) {
        alert("Error when writing to sessionStorage (Cart)\n" + e);
        error = true;
    }

    if (!error) {
        console.log("Successfully saved to sessionStorage (Cart)");
    }
    else {
        console.log("Error when saving to sessionStorage (Cart)\n" + e);
    }
};

function cartLoadAll () {
    try {
        if (sessionStorage.getItem('Cart')) {
            var tempCart = JSON.parse(sessionStorage.getItem('Cart'));

            for (let i = 0; i < tempCart.length; i++) {
                let cartID = tempCart[i].navn;
                ProductCard.clickHandler(cartID);
            }
        }
    }
    catch (e) {
        alert("Error when reading from sessionStorage (Cart)\n" + e);
    }
};