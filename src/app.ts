function Logger(constructor:Function){
  console.log('ログ出力中...')
}

@Logger
class Person {
  name = 'Max';

  constructor(){
    console.log('コンストラクタ呼ばれたよ～') 
  }
}

// const person1 = new Person();
// console.log(person1)