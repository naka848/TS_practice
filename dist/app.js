"use strict";
const e1 = {
    name: "Max",
    privileges: ["creare-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
const result = add('Hello', 'TypeScript');
console.log(result.split(''));
