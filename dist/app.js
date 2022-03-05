"use strict";
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        console.log(event);
    });
}
const person = {
    firstName: "Max",
    age: "30",
};
const { firstName: userName, age } = person;
console.log(userName);
