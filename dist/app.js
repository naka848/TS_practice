"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        console.log(this.templateElement);
        this.hostElement = document.getElementById("app");
        console.log(this.hostElement);
    }
}
const p = new ProjectInput();
