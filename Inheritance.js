class Car {
    constructor(brand) {
        this.brand = brand;
    }
    present() {
        return 'I have ' + this.brand;
    }
}

class Model extends Car {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        return this.present() + ' and it is a' + this.model;
    }
}

myCar = new Model('Tata', 'Nano');
document.write(myCar.show());
