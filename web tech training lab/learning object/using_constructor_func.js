function obj (name, age, gender, occupation){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.occupation=occupation;
}

const piyush = new obj("Piyush", 21, "Male", "Software Developer");
console.log("Hello, my name is"+" "+piyush.name+".\n"+"I am"+" "+piyush.age+" years old.\n"+"My occupation is"+" "+piyush.occupation+".\n");
