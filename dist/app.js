"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 50;
        this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('ないよ～ん');
        }
    }
}
let user1;
user1 = new Person('mi');
user1.greet("hello");
console.log(user1);
