class Person {

    //Private Fields
    #name;
    #age;
    #occupation;

    constructor(name, age, occupation) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
    }
    //Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get occupation() {
        return this.#occupation;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }
}
