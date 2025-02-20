let greetings:string = "Hello Faizan";

let mynum = 6;
//mynum.toUpperCase() -->this is not possible because ts doesnot allow this
greetings.toUpperCase();
greetings.toLowerCase();

console.log(greetings);

//number
let userId: number = 334455
// let  userId = 334455 both above statement r same it just ts detects we r giving number
// : number not always required to mention 


//boolean
let isLoggedIn : boolean = false

//Any keyword -> that you can use whenever you don’t want a particular value to cause typechecking errors.
let hero; // we dont know what we want to assign
function getHero(){
    return "Thor"
}
hero = getHero()

//when to use any?
// when we dont know what to assign 
let data: any;  
data = "Hello";  
data = 42;  
data = true;  // No error, as `any` allows all types

//when no to use any?
let value: any = "hello";
console.log(value.toFixed(2)); // No error in TypeScript, but runtime error!

// if not any use unknown keyword
// Use any only when absolutely necessary, like for quick fixes or unknown data. Otherwise, prefer specific types or unknown for safer code


// functions
//incorrect way 
function addTwo1(num){
    num.toUpperCase()
    //the statement shouldnt allowed to do (happend beause its automatically assigned to any)
    // addtwo("5") still it works this should not be done
    
    // to tackle this we should assign (num: number)
    return num+2
}
//correct way
function addTwo(num:number){
    return num+2
}
addTwo(5)

function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("Faizan")
function signUp(name:string,email:string,isPaid:boolean){

}
signUp("Faizan","xyz@gmail.com",true)

//to pass default values in input
let loginUser = (name:string,email:string,isPaid:boolean = false)=>{

}
loginUser("Faizan","xya@gmail.com")

function addTwo2(num:number) : number{
   // return num+2
   return "hello" // we should return number this is wrong, so : number is written outside the function
}
let myval = addTwo(5)

function getValue(myVal:number){
    // in this function we have both bool and string return 
    //
    if(myVal > 5){
        return true 
    }
    return "200 Ok"
}

const getHello = (s: string):string =>{
    return "True"
}

const heros = ["thor","spiderman","Ironman"]
//const heros = [1,2,3]
heros.map((hero):string =>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);
    // we defined void we cant return in this function
    //return 1 (this gives error)

}
function handleError(err:string):never{
    throw new Error(err)
    //The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
}


//objects
const user = {
    name:"Faizan",
    email:"xyz@gmail.com",
    isActive: true
}
function createUser({name:string,isPaid:boolean}){

}
createUser({name:"Faizan",isPaid:false})

function createcourse():{name:string,price:number}{
    return {name:"Angularjs",price:399}

}


//Alias
type User = {
    name:string;
    email:string;
    isActive:boolean
}
function CreateUser(user:User):User{
    return {name:"",email:"",isActive:true}
}
CreateUser({name:"Faizan",email:"xyz@gmail.com",isActive:true})



export {}
