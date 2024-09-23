function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person1 = createPerson('Alice', 30);
const person2 = createPerson('Bob', 25);

person1.greet(); 
person2.greet(); 