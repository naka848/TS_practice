type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type EleventedEmploee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const e1: EleventedEmploee = {
  name: "Max",
  privileges: ["creare-server"],
  startDate: new Date(),
};

console.log(e1);

type Combinable = string | number;
type Numeric = number | boolean;

// Universalはnumber型になる
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
}

function printEmployeeInformation(e: UnknownEmployee) {
  console.log(e.name);
  if ("privileges" in e) {
    console.log("Privileges: " + e.privileges);
  }
  if ("startDate" in e) {
    console.log("startDate: " + e.startDate);
  }
}

const eee: UnknownEmployee = {
  name: "Moomin",
  privileges: ["my"],
  // startDate:new Date(),
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

  loadCargo(amount: number) {
    console.log("荷物を載せていきます..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle) {
  v.drive();
  if (v instanceof Truck) {
    v.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  // 'bird'という文字列だけを許容するstringの型を設定
  // ※'bird'は実際の値ではなく、literal型
  // （インターフェースは値を持つことができない）
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  console.log(animal);
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("移動速度: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });

// 型推論:const paragraph: HTMLParagraphElement | null
// const paragraph = document.querySelector("p");

// 型推論:const paragraph: HTMLElement | null
// const paragraph = document.getElementById('message-output')

// 型推論:const paragraph: HTMLElement | null
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );

// const userInputElement = document.getElementById( "user-input" )! as HTMLInputElement;

// const userInputElement = document.getElementById( "user-input" )! as HTMLInputElement;

const userInputElement = document.getElementById( "user-input" );

if(userInputElement){
  (userInputElement as HTMLInputElement).value = "こんにちは";
}

// valueプロパティはすべてのHTMLタグには存在しないのでエラーになる
// 「HTMLElement」は特定のHTMLタグにしかないプロパティはサポートしない
// userInputElement.value = "こんにちは";

// const m = document.getElementById('choice');
// console.log(m)

// paragraph?.textContent = new Date();
