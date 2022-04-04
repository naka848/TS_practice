"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        console.log(this.templateElement);
        this.hostElement = document.getElementById("app");
        console.log(this.hostElement);
        const importedNode = document.importNode(this.templateElement.content, true);
        console.log("importedNode");
        console.log(importedNode);
        this.element = importedNode.firstElementChild;
        console.log("this.element");
        console.log(this.element);
        this.attach();
    }
    attach() {
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}
const p = new ProjectInput();
