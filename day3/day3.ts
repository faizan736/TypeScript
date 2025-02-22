//Tuples
const user:(string | number)[] = ["Faiz",22]

//in tuples the order of the array is also matters
let users: [string,number,boolean] 
users = ["Faiz",131,true]

type User = [number ,string]
const newUser :User = [112, "Example@google.com"]

//enums
//a special type that lets you assign names to a set of related values. It makes your code more readable and helps avoid using plain numbers or strings directly. 
enum Direction {
    Up,
    Down,
    Left,
    Right
  
}
let move: Direction = Direction.Up;
console.log(move); // Output: 0

//You can also assign custom numbers:
enum Status {
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
  
console.log(Status.NotFound); // Output: 404
  

//interface
//An interface in TypeScript is like a blueprint for an object. It defines what properties and methods an object should have but does not provide actual implementations.
interface Person {
    name: string;
    age: number;
}
  
let student: Person = {
    name: "Alice",
    age: 22
};
  
console.log(student.name); // Output: Alice

interface Animal {
    name: string;
    makeSound(): void;
}
  
let dog: Animal = {
    name: "Buddy",
    makeSound() {
      console.log("Woof! Woof!");
    }
};
  
dog.makeSound(); // Output: Woof! Woof!
  

// interface can be extended using extends:
interface Person {
    name: string;
    age: number;
}
// we can add 
interface Person {
    Dob: number;
}
//now all person properties will shown in Employee with addtional salary property
interface Employee extends Person {
    salary: number;
}
  
  

export {}
