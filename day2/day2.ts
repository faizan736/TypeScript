type User = {
    readonly id : string // with readonly keyword  we cannot change the value of the id
    name:string
    email:string
    isActive :boolean
    credCardDetails?:number // ? is used when the data is optional 
}
let myUser : User = {
    id:"12345",
    name:"Faizan",
    email :"xyz@gmail.com", 
    isActive:false
}

myUser.email = "abc@gmail.com" //this is allowed
myUser.id = "12344" // this is cannot be done because this is under readonly property


type cardNumber = {
    cardnumber:string
}
type cardDate = {
    cardDate:string
}
// instead of writing the two types we can mix both of them 
type cardDetails = cardNumber & cardDate &{
    cvv:number
}


//Arrays
const superHeros:string[] = []
const superHero:Array<string> = [] //another menthod of defining string
const superNumbers:number[] = []
const superNumber:Array<number> = [] //another menthod of defining number

superHeros.push("Ironman")
superNumbers.push(9999)

const newModels : number[][] = [
    [255,255,255],
    [0,0,0]
    // we cannot add string in this 
]

//Union
//In TypeScript, a union allows a variable to hold multiple types of values. You define a union using the | (pipe) symbol
let value: string | number; 

value = "Hello"; // ✅ Allowed
value = 42;      // ✅ Allowed
value = true;    // ❌ Error: boolean is not allowed


type Users = {
    name : string
    id : number
}
type Admin = {
    username : string
    id : number
}

let newModel : Users | Admin = {
    name :"Faizan",
    id:334
}
// newModel can be admin aswell as Users
newModel = {
    username:"SFB",
    id :445
}

function getDbId(id:number | string){
    console.log(`DB is is ${id}`)
}
getDbId(3)
getDbId("3")
function getDbId(id:number | string){
     // id.toLowerCase() ->this we can get a error
     //instead
     if(typeof id === "string"){
        id.toLowerCase()
     }
     
}

const data1: number[] = [1,2,3]
const data2: string[] = ["hi","hello","bye"]
const data3: (number | string)[] = [1,2,"hello","bye"]

let pi:3.14 = 3.14
//now pi will always be 3.14
 
