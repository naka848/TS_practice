// ファンクション型の復習
// 戻り値はnumber型
// type AddFn = (a:number,b:number) => number;
interface AddFn {
  // 匿名メソッドのようなもの
  (a:number,b:number):number
}

// 新しい関数を格納するための変数を宣言
let add : AddFn;

add = (n1,n2) =>{
  return n1 + n2;
}

interface Named{
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 50;

  constructor(n: string) {
    // if(n){
      this.name = n;
    // }
    // return;
  }

  greet(phrase: string): void {
    if(this.name){
      console.log(phrase  + ' ' + this.name);
    }else{
      console.log('ないよ～ん')
    }
  }
}

let user1: Greetable;

user1 = new Person('mi');

user1.greet("hello");

console.log(user1)
