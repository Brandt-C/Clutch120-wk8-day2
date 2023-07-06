// testing
console.log('Clutch!')
// Type Aliases: Creating our own Type

const employee : {
    id : number,
    eName : string
} = {
    id : 1,
    eName : 'Brandt'
}
// python- snake_case, JS= camelCase TS PascaleCase --> a note on casing
type Employee = {
    id : number,
    eName : string
};
const emp2: Employee = {
    id : 4,
    eName: 'Bill'
};


// Union Types: Can allow a variable to be one of many types (number | string)
function kilosToPounds(weight: number | string):number {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2
    } else {
        return weight * 2.2
    }
}
console.log(kilosToPounds(10));
console.log(kilosToPounds('10'))
console.log(kilosToPounds('10kg'))
console.log(kilosToPounds('kg10'))



// TypeScript Arrow Function
const poundsToKilos = (weight:number | string):number => {
    if (typeof weight === 'string') {
        return parseInt(weight) / 2.2
    } else {
        return weight / 2.2
    }
}


// Literal Types (exact)
// let quantity: 100 = 67 --> can only be the exact value

// = this is *generally* is assignment            ==  this is *generally* (JS) equality of value but NOT type
//    === this is *generally* type AND value equality

let quanitity: (25 | 50 | 75 | 100);
quanitity = 25;
// quanitity = 65

let sizes: ('small'| 'medium' | 'large');
sizes = 'small';
// sizes = 'XXL'

// notice Pascale-case here!
type Size = ('small'| 'medium' | 'large');
let shirt: Size = 'medium';


// Nullish Coalescing Operator (??): We can fallback to a default value when dealing with null/undefined objects
let speed : number | null | string = ''
// falsey values-->  false, null, undefined, 0, [], ''

let ride = {
    speed : speed ? `${speed}` : 30
}
let ride2 = {
    speed2 : speed ?? 30
}
console.log(ride)
console.log(ride2)



// Type Assertions: specify a different type than the one inferred by the compiler.
// NOTE: There isn't any type conversion happening under the hood.
// const myInput2 = document.getElementById('myInput2');
// myInput2.value 

// const myInput = document.getElementById('myInput') as HTMLInputElement
// myInput.value 



// The "unknown" type: We have to narrow down to a specific type before performing any operations
// It is preferred to use "unknown" over "any" bc it forces us to do some type checking

// const render = (document: any) => {}  --> don't do this, instead:


// const render = (document: unknown) => {
//     document.printInfo();
//     document.getDeets()
// }


// Creating Classes
class Cohort {
    name: string;
    num : number;
    constructor(name: string, num: number){
        this.name = name,
        this.num = num
    }
    printInfo = ():string => {
        return `${this.name} ${this.num}`
    }
}
const clutch = new Cohort('Clutch', 120)
console.log(clutch.printInfo())

// typeof vs instanceof
console.log(typeof clutch)
console.log(typeof emp2)
console.log(clutch instanceof Cohort)
// console.log(emp2 instanceof Employee)


// private properties and accessing them
class Cohort2 {
    name: string;
    private num : number;
    constructor(name: string, num: number){
        this.name = name,
        this.num = num
    }
    printInfo = ():string => {
        return `${this.name} ${this.num *100}`
    }
}
const thief = new Cohort2('Thieves', 120)
console.log(thief.printInfo())
// thief.num = 573984


// Building a class with parameter properties: Preferred way
class Chort3 {
    constructor(public name:string, public num:number){}
    printInfo = ():string => {
        return `${this.name} ${this.num *100}`
    }
}
const pads = new Chort3('Padawans', 137);
console.log(pads.printInfo());

class Cohort4 extends Chort3 {
    constructor(public name: string, public num: number, public classSize: number){
        super(name, num)
    }
    printInfo = (): string => {
        return `${this.name} ${this.num} has ${this.classSize} students`
    }
}
let next = new Cohort4('Clutch', 131, 13);
console.log(next.printInfo())


// Interfaces vs Types vs Classes
/* They both establish a shape of an object and can be used interchangeably BUT 
Its more conventional to implement Interfaces with Classes AND
Interfaces can also inherit from other Interfaces & Types, while Types cannot.
*/

// interface MUST be an object
interface Student {
    name : string;
    age : number;
    info(): string;
}

class ClutchStudent implements Student {
    name: string;
    age: number;
    aLevel: string;
    constructor(name:string, age: number, aLevel: string){
        this.name = name
        this.age = age
        this.aLevel = aLevel
    }
    info(): string {
        return `${this.name} is a Clutch student w/ awesomeness level of: ${this.aLevel}`
    }
}
let x = new ClutchStudent('Kaytlin', 23, 'Pretty Awesome!');
console.log(x.info());

const nextThief: Student = {
    name: 'Emelia Rodriguez',
    age : 21,
    info() {
        return `${this.name} is a Thieves student!`
    }
}
console.log(nextThief.info())
console.log(typeof nextThief)

