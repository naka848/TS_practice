function Logger() {
  // 匿名の関数を定義
  // この関数の中に、デコレータで実行したい処理をかく
  return function (constructor: Function) {
    console.log("ログ出力中...");
    console.log(constructor);
  };
}

// デコレータの実行の際は、関数として実行する
// →（）をつける！
@Logger()
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);
