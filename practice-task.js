// Define a Beverage class with properties name, ounces, container, and isCold.
// isCold should always be false at instantiation of an object.
// container should be optional and default to "bottle".
// Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the beverage is cold or not.
// Add a refrigerate() method outside the constructor that changes the value of isCold and prints a notification.
// Instantiate at least 3 different kinds of beverages with unique properties.
// Use the describe() method to print descriptions of each beverage.
// Use the refrigerate() method on one of the beverages, then call describe() again.

class Beverage {
    constructor(name, ounces, container = "bottle") {
        this.name = name;
        this.ounces = ounces;
        this.isCold = false;
        this.container = container;
    }
    describe() {
        if (this.isCold) {
            console.log(`The beverage called ${this.name} comes in a ${this.ounces} ${this.container}. It's ice cold.`);
        } else {
            console.log(`The beverage called ${this.name} comes in a ${this.ounces} ${this.container}. It's room temp.`);
        }
    }
    refrigerate() {
        this.isCold = true;
        console.log(`${this.name} is now ice cold!`);
    }
}

let juice = new Beverage("Orange juice", 40);
juice.describe();
let coffee = new Beverage("Khaldi", 20);
coffee.container = "cup";
coffee.describe();
let soda = new Beverage("Coke", 12);
soda.describe();
soda.refrigerate();
soda.describe();

