class Person {
    // Private Fields
    #name;
    #age;
    #occupation;
    #hobby;

    constructor(name, age, occupation, hobby) {
        this.#name = name;
        this.#age = age;
        this.#occupation = occupation;
        this.#hobby = hobby;
    }

    // Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get occupation() {
        return this.#occupation;
    }

    get hobby() {
        return this.#hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("Hobby: " + this.hobby);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('persona');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}<br>
            <strong>Hobby:</strong> ${this.hobby}
        `;
    }
}

class Student extends Person {
    constructor(name, age, occupation, hobby, major) {
        super(name, age, occupation, hobby);
        this.major = major;
    }

    // Overriding the displayInfo method
    displayInfo() {
        super.displayInfo();
        console.log("Major: " + this.major);
    }

    // Extending the displayInfoHTML method
    displayInfoHTML() {
        super.displayInfoHTML();
        const personElement = document.getElementById('persona');
        personElement.innerHTML += `<br><strong>Major:</strong> ${this.major}`;
    }
}

// Creating an instance of the Student class
const student = new Student('Jacob Israel A. Ranin Jr.', 20, 'Student', 'Read Comics', 'Information Technology');

// Calling methods
student.displayInfo();