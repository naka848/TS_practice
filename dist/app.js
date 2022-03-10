"use strict";
const e1 = {
    name: "Max",
    privileges: ["creare-server"],
    startDate: new Date(),
};
console.log(e1);
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
        return a + b;
    }
}
function printEmployeeInformation(e) {
    console.log(e.name);
    if ("privileges" in e) {
        console.log("Privileges: " + e.privileges);
    }
    if ("startDate" in e) {
        console.log("startDate: " + e.startDate);
    }
}
const eee = {
    name: "Moomin",
    privileges: ["my"],
};
printEmployeeInformation(eee);
class Car {
    drive() {
        console.log("運転中...");
    }
}
class Truck {
    drive() {
        console.log("トラック運転中...");
    }
    loadCargo(amount) {
        console.log("荷物を載せていきます..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(v) {
    v.drive();
    if (v instanceof Truck) {
        v.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
