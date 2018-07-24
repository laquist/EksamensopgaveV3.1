class Product {

    constructor(newProductObject) {
        this.navn = newProductObject.navn;
        this.beskrivelse = newProductObject.beskrivelse;
        this.pris = newProductObject.pris;
        this.img = newProductObject.img;
    };

    static createTestData() {
        let dataSource = {};
        
        let dataString = "";
        let dataJsonObj = {};
        let dataKeys = [];
        let dataKey = "";

        dataSource = {
            "coffee1": {
                "navn" : "Americano",
                "beskrivelse" : "Stærk crema espresso med varmt vand",
                "pris" : "60kr",
                "img" : "Americano.jpg"
            },
            "coffee2": {
                "navn" : "Caffe latte",
                "beskrivelse" : "Espresso med skummet varm mælk",
                "pris" : "65kr",
                "img" : "Caffe_Latte.jpg"
            },
            "coffee3": {
                "navn" : "Cappuccino",
                "beskrivelse" : "Espresso med dampet mælk og skum",
                "pris" : "75kr",
                "img" : "Cappucino.jpg"
            },
            "coffee4": {
                "navn" : "Espresso",
                "beskrivelse" : "Espresso lavet af vores dygtigste baristaer",
                "pris" : "50kr",
                "img" : "Espresso.jpg"
            },
            "coffee5": {
                "navn" : "Macchiato",
                "beskrivelse" : "Lækker espressodrik med skummet mælk og chokolade",
                "pris" : "100kr",
                "img" : "Macchiato.jpg"
            }
        };

        //Bruger JSON.stringify for at lave det om fra et JS object til en string i JSON format
        dataString = JSON.stringify(dataSource);

        //Fra JSON string format til Object
        dataJsonObj = JSON.parse(dataString);

        //Navnene af de properties der er i objectet. Så i dette tilfælde er det de key's der findes i vores key/value liste/map af instances
        dataKeys = Object.keys(dataJsonObj);

        //Laver object (Product), og gemmer derefter det object i Product.Instances (og gentager...)
        for (let i=0; i < dataKeys.length; i++) {
            dataKey = dataKeys[i];
            Product.Instances[dataKey] = new Product(dataJsonObj[dataKey]);
        };

        Product.saveAll();
    };

    static saveAll() {
        let valueString = "";
        let error = false;

        try {
            valueString = JSON.stringify(Product.Instances);
            sessionStorage.setItem('Products', valueString);
        }
        catch (e) {
            alert("Error when writing to sessionStorage\n" + e);
            error = true;
        }

        if (!error) {
            console.log("Successfully saved to sessionStorage");
        }
        else {
            console.log("Error when saving to sessionStorage\n" + e);
        }
    };

    static loadAll() {
        let valueString = "";

        let dataJsonObj = {};
        let dataKeys = [];
        let dataKey = "";

        try {
            if (sessionStorage.getItem('Products')) {
                valueString = sessionStorage.getItem('Products');
            }
        }
        catch (e) {
            alert("Error when reading from sessionStorage\n" + e);
        }

        if (valueString) {
            dataJsonObj = JSON.parse(valueString);

            console.log("DataJsonObj: ");
            console.log(dataJsonObj);

            dataKeys = Object.keys(dataJsonObj);
            
            for (let i=0; i < dataKeys.length; i++) {
                dataKey = dataKeys[i];
                Product.Instances[dataKey] = new Product(dataJsonObj[dataKey]);
            };

            console.log(dataKeys.length + " items loaded from sessionStorage!");
        }
        else {
            console.log("No matching data found in sessionStorage");

            console.log("Creating testdata!");
            Product.createTestData();
        }
    };
};


//Skal Product.Instances erklæres udenfor klassen? (Så vidt jeg kan se, så ja. Se følgende)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Static class-side properties and prototype data properties must be defined outside of the 

//Product.instances property, hvor alle produkter ligger i et object.
Product.Instances = {};