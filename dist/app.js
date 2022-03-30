"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log('ログ出力中...');
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('コンストラクタ呼ばれたよ～');
    }
<<<<<<< HEAD
};
Person = __decorate([
    Logger
], Person);
=======
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
<<<<<<< HEAD
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    name: 'Max',
    age: '30',
};
const copiedPerson = Object.assign({}, person);
const add = () => { };
=======
>>>>>>> 33ac1b824f170d551356ad8fe4e63e361abdadb9
>>>>>>> c7319f4a2766d3ab850336db13a7fac76b2863d0
