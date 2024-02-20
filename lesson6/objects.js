// створити 3 обʼєкти через {}

const animals = {
  pets: ["Dog", "Cat"],
  wild: ["Bear", "Fox"],
};

console.log(animals.pets);

const movie = {
  action: ["Avengers", "Gladiator"],
  comedy: ["American Pie", "The Hangover"],
  drama: ["Forrest Gump", "Titanic"],
};
console.log(movie.comedy);

const car = {
  brand: ["VW"],
  model: ["Golf VIII"],
};
console.log(car.brand, car.model);

//створити 3 обʼєкти через Object()

let phone1 = new Object();
phone1.brand = "Apple";
phone1.model = "15";
phone1.color = "Black";

let phone2 = new Object();
phone2.brand = "Apple";
phone2.model = "15";
phone2.color = "Yellow";

let phone3 = new Object();
phone3.brand = "Apple";
phone3.model = "15";
phone3.color = "Pink";

console.log(phone1);
console.log(phone2);
console.log(phone3);

// створити обʼєкт на базі прототипу іншого обʼєку (Object.create(інший_оʼєкт)
let person = {
  name: "Daniel",
  age: 22,
  infoByPerson: function(){
      console.log(`Person name: ${this.name}, person age: ${this.age}`);
  }
};

let newPerson = Object.create(person)
console.log("Details for person:")
newPerson.infoByPerson();

// або через __prototype__) 
let persProto = {
  __proto__: person
};

console.log("Details for person:");
persProto.infoByPerson();


// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
//унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів

let engineer = Object.create(person)
engineer.speciality = "QA";
engineer.experience = "5 years"

let QA_engineer = Object.create(person)
  QA_engineer.type = "Manual"

  console.log("Details for person:")
  person.infoByPerson()
  console.log("speciality: " + engineer.speciality)
  console.log("experience: " + engineer.experience)
  console.log("Type: " + QA_engineer.type)