// class class_name {}
class Person {
  // have to initialize in a constructor
  name: string;
  age: number;

  // constructor method to initialize class ppts when a new object is created
  // parametrized constrictor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // user defined function
  greet(): string {
    // this is used to call globally defined in global class, this works on CURRENT INSTANCE of class
    return `hello my name is ${this.name}, I am ${this.age}yo.`;
  }
}

// make object using new to call class
// const newPerson = new Person("Dev kumar", 45);
// console.log(`Name : ${newPerson.name}`);
// console.log(`Age : ${newPerson.age}`);
// console.log(newPerson.greet());

/* acess modifiers (public, private and protected) 

public : Accessible from anywhere, this is bydef is modifier is not specified.

private : accessible within class only.

protected : accessible within class and its sublclasses (inherited classes).
*/

class car1 {
  make: string;
  private model: string; // can not access model ouside using console log, bahar instemaal nhi hoga, bss class mei use hoga
  protected year: number; // an not access year ouside using console log, only in inherited class

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  public getmodel(): string {
    return this.model;
  }
}

// const newCar = new car1(`wagon`, `small buster`, 2015);
// console.log(newCar.getmodel());

// inheritence : virasat
class Animal {
  constructor(public name: string) {}

  makesound(): void {
    console.log("Some generic sound...");
  }
}

class Dog extends Animal {
  // Animal wale name of yaha bhi istemal kar paunga
  // the super keyword is used within a child class to interact with its parent (base) class
  constructor(name: string) {
    super(name);
  }

  makesound(): void {
    console.log(`bow bow... grrrrr`);
  }
}

const Lebra = new Dog("sheru");
// Lebra.makesound(); // bow bow... grrrrr
// // if i comment makesound() in DOG class
// Lebra.makesound(); // Some generic sound...

// Abstract Class
abstract class Shape {
  // abstract method, must be implemented by subclasses(inherited wali)
  abstract getArea(): number;

  printArea(): void {
    console.log(`The area is ${this.getArea()}`);
  }
}
// implements is used for multiple classes extends for one
class Rectangle extends Shape {
  constructor(
    private width: number,
    private height: number,
  ) {
    // default constructor shape aayega
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}

// const rect = new Rectangle(45,80);
// rect.printArea()

// setters and getters
// more control on class ppts.

class Cricle {
  private _radius: number;
  constructor(radius: number) {
    this._radius = radius;
  }

  // get k/w used to fetch value
  get radius(): number {
    return this._radius;
  }

  // set k/w used
  // A 'set' accessor cannot have a return type annotation, A 'set' accessor must have exactly one parameter.
  set radius(value: number) {
    if (value <= 0) {
      throw new Error(`radius must be +ve.`);
    }
    this._radius = value;
  }
}

// const circle = new Cricle(100);
// // calling getter, getter as a method nhi, as a ppt call hoga
// console.log(circle.radius);
// circle.radius = 67
// console.log(circle.radius);

// practise ::
/* bank account class */

class BankAccount {
  private balance: number;

  constructor(
    public accountNumber: string,
    initialBalance: number,
  ) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      throw new Error(`Insufficient balance`);
    }
    this.balance -= amount;
  }

  getbalance(): number {
    return this.balance;
  }
}

const myAccount = new BankAccount(`SBIfbklbf142`, 1000);
myAccount.deposit(500);
myAccount.withdraw(800);
console.log(myAccount.getbalance());
