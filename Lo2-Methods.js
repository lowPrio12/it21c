//Input
const person1 = {
    name: "Jacob Israel A. Ranin",
    age: 20,
    gender: "Male",
    hobby: "Read Comics",
}

//Process and Output
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);
console.log("Gender: " + person1.gender);
console.log("Hobby: " + person1.hobby);
console.log("--------------------------------");

// Class definition
class Person {
    constructor(name, age, gender, hobby) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Hobby: " + this.hobby);
    }
}