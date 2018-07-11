class Product {

    constructor(newProductObject) {
        this.id = newProductObject.id;
        this.name = newProductObject.name;
        this.description = newProductObject.description;
        this.price = newProductObject.price;
        this.image = newProductObject.image;
    };

    //createTestData() – Skal sætte data ind i en Product.instances og kalde funktionen saveAll()
    //saveAll() – Skal gemme Product.instances til localStorage eller sessionStorage.
    //loadlAll() – Hvis der findes data i localStorage eller sessionStorage skal denne data loades ind i Product.instances, ellers skal test data oprettes for så at loades ind i Product.instances. 


    createTestData() {
        let dataString = "";
        let dataObj = {};
        let dataKeys = [];
        let dataKey = "";

        dataObj = {
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
        }

        console.log(typeof(dataString));

        // dataObj = JSON.parse(dataString);

        dataKeys = Object.keys(dataObj);

        for (let i=0; i < dataKeys.length; i++) {
            dataKey = dataKeys[i];
            Product.Instances[dataKey] = new Product(dataObj[dataKey]);
        };

        console.log(Product.Instances);
        // console.log(dataString);

        // var test123 = Object.keys(dataString);
        // console.log("test123:: ::: : :");
        // console.log(test123);

    };

    saveAll() {

    };

    loadAll() {

    };
};


//Product.instances property, hvor alle produkter ligger i et object.
Product.Instances = [];