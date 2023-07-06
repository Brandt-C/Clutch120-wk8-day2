"use strict";
console.log('Clutch!');
const employee = {
    id: 1,
    eName: 'Brandt'
};
const emp2 = {
    id: 4,
    eName: 'Bill'
};
function kilosToPounds(weight) {
    if (typeof weight === 'string') {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
}
console.log(kilosToPounds(10));
console.log(kilosToPounds('10'));
console.log(kilosToPounds('10kg'));
console.log(kilosToPounds('kg10'));
const poundsToKilos = (weight) => {
    if (typeof weight === 'string') {
        return parseInt(weight) / 2.2;
    }
    else {
        return weight / 2.2;
    }
};
let quanitity;
quanitity = 25;
let sizes;
sizes = 'small';
let shirt = 'medium';
let speed = '';
let ride = {
    speed: speed ? `${speed}` : 30
};
let ride2 = {
    speed2: speed !== null && speed !== void 0 ? speed : 30
};
console.log(ride);
console.log(ride2);
class Cohort {
    constructor(name, num) {
        this.printInfo = () => {
            return `${this.name} ${this.num}`;
        };
        this.name = name,
            this.num = num;
    }
}
const clutch = new Cohort('Clutch', 120);
console.log(clutch.printInfo());
console.log(typeof clutch);
console.log(typeof emp2);
console.log(clutch instanceof Cohort);
class Cohort2 {
    constructor(name, num) {
        this.printInfo = () => {
            return `${this.name} ${this.num * 100}`;
        };
        this.name = name,
            this.num = num;
    }
}
const thief = new Cohort2('Thieves', 120);
console.log(thief.printInfo());
class Chort3 {
    constructor(name, num) {
        this.name = name;
        this.num = num;
        this.printInfo = () => {
            return `${this.name} ${this.num * 100}`;
        };
    }
}
const pads = new Chort3('Padawans', 137);
console.log(pads.printInfo());
