class Product {

    constructor(newProductObject) {
        this.id = newProductObject.id;
        this.name = newProductObject.name;
        this.description = newProductObject.description;
        this.price = newProductObject.price;
        this.image = newProductObject.image;
    };

    //Product.instances property, hvor alle produkter ligger i et object.
    Instances = {};
};