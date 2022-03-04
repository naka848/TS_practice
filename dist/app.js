"use strict";
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => {
        console.log(event);
    });
}
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    name: 'Max',
    age: '30',
};
const copiedPerson = Object.assign({}, person);
console.log(copiedPerson);
const add = () => { };
