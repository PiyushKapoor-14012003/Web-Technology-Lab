const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    occupation: "Software Developer",
    gender: "male",
    // info: function() {
    //     console.log("Hello, my name is " + this.firstName + " " + this.lastName + " gender is" +" "+ this.gender);
    // }
};

// person.info(); 

const Piyush = Object.create(person);

console.log(Piyush.firstName);