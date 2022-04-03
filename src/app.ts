class ProjectInput {
  templateElement:HTMLTemplateElement;
  hostElement;
  // ここでテンプレートや表示先の要素を取得
  constructor() {
    this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
    console.log(this.templateElement);
    this.hostElement = document.getElementById("app")!;
    console.log(this.hostElement);
  }
}

const p = new ProjectInput();
