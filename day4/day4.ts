"use strict"
console.log("day4")

//classes
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
  
let person1 = new Person("Alice", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.

class Car {
    public brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  }
  
let myCar = new Car("Toyota");
console.log(myCar.brand); // ✅ Allowed


class Car {
    private brand: string;
  
    constructor(brand: string) {
      this.brand = brand;
    }
  
    showBrand() {
      console.log(`Car brand is ${this.brand}`);
    }
}
  
let myCar = new Car("Toyota");
console.log(myCar.brand); // ❌ Error
myCar.showBrand(); // ✅ Allowed

class Vehicle {
    protected type: string = "Car";
  }
  
  class Bike extends Vehicle {
    showType() {
      console.log(this.type); // ✅ Allowed inside subclass
    }
}
  

class User {
    private _password: string = "default";
  
    get password(): string {
      return "******"; // Hide actual password
    }
  
    set password(newPassword: string) {
      if (newPassword.length < 6) {
        console.log("Password too short!");
      } else {
        this._password = newPassword;
        console.log("Password updated!");
      }
    }
}
  
let user1 = new User();
console.log(user1.password); // Output: ******
user1.password = "123"; // Output: Password too short!
user1.password = "secure123"; // Output: Password updated!

//generics
function identityOne(val: number | boolean): number  | boolean{
    return val // this might be number or boolean we dont know
}
function  identityTwo(val : any): any{
    return val // this might be any value we dont know
}
//generics usage 
function identityThree<Type>(val :Type):Type{
    return val // here when the input is number the output is also be number ,it locks the input with the ouput

}
function identityFour<T>(val :T):T{
    return val //same, but all should be same character
    
}
// re-using
interface Bottle{
    brand: string
    type: number
}
identityFour<Bottle>({ brand: "Coca-Cola", type: 1 });

//generic in interfaces
interface Box<T> {
    content: T;
}
  
let stringBox: Box<string> = { content: "Hello" };
let numberBox: Box<number> = { content: 42 };

//generic in classes
class DataStore<T> {
    private data: T;
    constructor(value: T) {
      this.data = value;
    }
    getData(): T {
      return this.data;
    }
}
  
let stringStore = new DataStore<string>("Hello");
let numberStore = new DataStore<number>(123);
  
//generics in arrays
function loggingIdentity<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}
function loggingIdentityOne<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}

//generics in arrow functions
const identity = <T>(val: T): T => val;

function getSearchProduct<T>(products: T[]):T{
    let myIndex = 3
    return products[myIndex]
}
//normal function to array function using generics
const getModeSearchProdut= <T>(products:T[]):T=>{
    let myIndex = 3
    return products[myIndex]
}
  
  
  
