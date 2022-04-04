class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  // ここでテンプレートや表示先の要素を取得
  constructor() {
    // ! …nullではないことを保証する
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    console.log(this.templateElement);

    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    console.log(this.hostElement);

    // const importedNode: 戻り値 DocumentFragment
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    console.log("importedNode");
    console.log(importedNode);

    this.element = importedNode.firstElementChild as HTMLFormElement;
    console.log("this.element");
    console.log(this.element);
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const p = new ProjectInput();
