class Display{
  template:HTMLTemplateElement;
  app:HTMLDivElement;
  temp:HTMLTemplateElement;

  constructor(){
    this.template = document.getElementById('project-input') as HTMLTemplateElement;
    this.app = document.getElementById('app') as HTMLDivElement;
    this.temp = this.template.firstChild as HTMLTemplateElement;
  }

  function assign() {
    
  }

}