interface Person {
  namestud: string;
  readonly course: string;
  age: number;
  honorsDegree?: boolean; // optional

  introduce(): void;
}

// User object ko Person interface follow karna zaroori hai
const user: Person = {
  namestud: "Rahul",
  course: `Btech IT-A1`,
  age: 25,

  introduce(){
     console.log(`Hi my name is ${this.namestud}, ${this.age}YO and currently studying ${this.course}`);
  }
};

user.introduce();
