"use strict";
class Rectangle {
    constructor(sideA, sideB) {
        this.name = 'rectangle';
        this.getArea = () => this.sideA * this.sideB;
        this.sideA = sideA;
        this.sideB = sideB;
    }
}
const rectangle = new Rectangle(5, 8);
const result = rectangle.getArea();
console.log(rectangle.name + 'の面積: ' + result);
