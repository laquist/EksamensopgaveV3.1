class Product {

    constructor(newProductObject) {
        // this.id = newProductObject.id;
        // this.name = newProductObject.name;
        // this.description = newProductObject.description;
        // this.price = newProductObject.price;
        // this.image = newProductObject.image;
        this.navn = newProductObject.navn;
        this.beskrivelse = newProductObject.beskrivelse;
        this.pris = newProductObject.pris;
        this.img = newProductObject.img;
    };

    //createTestData() – Skal sætte data ind i en Product.instances og kalde funktionen saveAll()
    //saveAll() – Skal gemme Product.instances til localStorage eller sessionStorage.
    //loadlAll() – Hvis der findes data i localStorage eller sessionStorage skal denne data loades ind i Product.instances, ellers skal test data oprettes for så at loades ind i Product.instances. 


    static createTestData() {
        var dataSource = {};
        var dataString = "";
        var dataJsonObj = {};
        var dataKeys = [];
        var dataKey = "";

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

        //For at kunne JSON.parse, skulle det være en string, og jeg kunne ikke finde en måde at sætte dataen som string. Det er noget i formatet, som gjorde jeg ikke bare kunne sætte quotes omkring. Så nu har jeg et objekt med raw data, som jeg står stringify'er
        dataString = JSON.stringify(dataSource);

        dataJsonObj = JSON.parse(dataString);

        dataKeys = Object.keys(dataJsonObj);

        for (let i=0; i < dataKeys.length; i++) {
            dataKey = dataKeys[i];
            Product.Instances[dataKey] = new Product(dataJsonObj[dataKey]);

            //Temp - log the new product
            // console.log(Product.Instances[dataKey]);
        };

        console.log("Length: " + Object.keys(Product.Instances).length);
        
        
        // console.log("DataObj:");
        // console.log(dataJsonObj);

        // console.log("DataKeys");
        // console.log(dataKeys);

        // console.log("Test DataObj");
        // console.log(dataJsonObj.coffee1);

    };

    saveAll() {

    };

    loadAll() {

    };
};


//Product.instances property, hvor alle produkter ligger i et object.
Product.Instances = [];