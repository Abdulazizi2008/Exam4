// CLASS ////////////////////
// constructor/prototype

// function Person(name) {
//   this.name = name;
// } // constructor

// Person.prototype.getName = function () {
//   return this.name;
// }; // prototype

// const john = new Person('John Doe');
// console.log(john);

// class

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// }

// const tom = new Person('Tom Smith');
// console.log(tom.getName());

// CLASS EXPRESSION
// const Person = class {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
// };

// const john = new Person('John Doe');
// console.log(john);

// INSTANCEOF /////////////////////
// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     // console.log(new.target);
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// let p1 = new Person('Abdulaziz', 'Toshpulatov');

// let p2 = {
//   firstName: 'John',
//   lastName: 'Doe',
// };

// console.log(p1 instanceof Person);

// console.log(p1 instanceof String);

// let str1 = 'Abdulaziz';

// console.log(str1 instanceof String);

// let str2 = new String('Abdulaziz');

// console.log(str2 instanceof String);

// console.log(String instanceof Object);

// console.log(Function instanceof Object);

// console.log(Function instanceof String);

// GETTER / SETTER /////////////
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     newName = newName.trim();
//     if (newName === '') {
//       throw 'The name cannot be empty';
//     }
//     this._name = newName;
//   }
// }

// let john = new Person('John Smith');
// john.name = 'John Doe';
// console.log(john.name);

// STATIC KEYWORD
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// Person.createAnonymous = function (gender) {
//   let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
//   return new Person(name);
// };

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   static createAnonymous(gender) {
//     let name = gender == 'male' ? 'John Doe' : 'Jane Doe';
//     return new Person(name);
//   }
// }

// let john = new Person('John Smith');
// // console.log(john.getName());
// // console.log(john.createAnonymous('male'));
// console.log(Person.createAnonymous('male'));

// class Product {
//   constructor(name, quantity) {
//     this.name = name;
//     this.quantity = quantity;
//     this.constructor.count++;
//   }
//   static count = 0;
//   static getCount() {
//     return Product.count;
//   }
// }

// INHERITANCE ////////////////////////////
// class Animal {
//   constructor(legs) {
//     this.legs = legs;
//   }
//   walk() {
//     console.log(`Walking on ${this.legs} legs`);
//   }
// }

// class Bird extends Animal {
//   constructor(legs) {
//     super(legs);
//   }
//   fly() {
//     console.log('Flying');
//   }
// }

// let bird = new Bird(2);

// bird.walk();
// bird.fly();

// class Person {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name;
//   }
// }

// let john = new Person('John Doe');
// console.log(john.name);

// class Circle {
//   #radius = 0;
//   constructor(radius) {
//     this.#radius = radius;
//   }
//   get area() {
//     return Math.PI * Math.pow(this.#radius, 2);
//   }
//   set radius(value) {
//     if (typeof value === 'number' && value > 0) {
//       this.#radius = value;
//     } else {
//       throw 'The radius must be a positive number';
//     }
//   }
//   get radius() {
//     return this.#radius;
//   }
// }

// let c1 = new Circle(3);
// console.log(c1.radius);
// console.log(c1.area);

// class Person {
//   _name;
//   constructor(name) {
//     this._name = name;
//   }

//   // get name() {
//   //   return this._name;
//   // }
// }

// let john = new Person('John Doe');
// console.log(john.name);

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return this.firstName + ' ' + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(firstName, lastName, university) {
//     super(firstName, lastName);
//     this.university = university;
//   }
//   getInfo() {
//     return super.getFullName() + ` ${this.university} da o'qiyapti `;
//   }
// }

// class EmployeeStudent extends Student {
//   constructor(firstName, lastName, university, workPlace) {
//     super(firstName, lastName, university);
//     this.workPlace = workPlace;
//   }
//   getInfo() {
//     return super.getInfo() + ` va ${this.workPlace} da ishlaydi `;
//   }
// }

// let es = new EmployeeStudent('Xurshid', 'Shodiyev', 'TATU', "NAJOT TA'LIM");

// // console.log(es);

// console.log(es.getInfo());

// CLASS-1 /////////////////////////////
// class Triangle {
//   #leftSide;
//   #rightSide;
//   #width;

//   constructor(leftSide, rightSide, width) {
//     this.#leftSide = leftSide;
//     this.#rightSide = rightSide;
//     this.#width = width;
//   }

//   getLeftSide() {
//     return this.#leftSide;
//   }

//   getRightSide() {
//     return this.#rightSide;
//   }

//   getWidth() {
//     return this.#width;
//   }

//   setSides(a, b, c) {
//     this.#leftSide = a;
//     this.#rightSide = b;
//     this.#width = c;
//   }
// }

// let tr1 = new Triangle(3, 4, 5);
// tr1.setSides(6, 8, 10);
// console.log(tr1.getLeftSide());
// console.log(tr1.getRightSide());
// console.log(tr1.getWidth());
