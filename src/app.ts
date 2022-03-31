function Decochan() {
  return function(constructor: Function){
    console.log("mama");
    console.log(constructor);
  }

}

@Decochan()
class Deco {
  name = "Max";
  constructor() {
    console.log("mimi");
  }
}
