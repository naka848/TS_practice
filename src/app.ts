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

<<<<<<< HEAD
// const person1 = new Person();
// console.log(person1)
=======
// console.log(countAndDescribe({length:3}))
console.log(countAndDescribe([]));

<<<<<<< HEAD
// console.log(activeHobbies);
=======
// obj[key]
// オブジェクトのプロパティに[]でアクセス
// JavaScriptの通常の構文
>>>>>>> 33ac1b824f170d551356ad8fe4e63e361abdadb9

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

// 2つ目の引数「name」は、1つ目の引数のオブジェクトにプロパティとして存在しないのでエラー
const result = extractAndConvert({name:'Max'}, "name");
console.log(result);

class DataStorage{
  private data = [];

  addItem(item){
    this.data.push(item);
  }

<<<<<<< HEAD
// console.log(copiedPerson);
=======
  removeItem(item){
    // splice(配列を変更する先頭の位置, 取り除く古い要素の個数)
    this.data.splice(this.data.indexOf(item),1)
  }
>>>>>>> 33ac1b824f170d551356ad8fe4e63e361abdadb9

  getItems(){
    // 他のやり方では呼び出せない？もしくは適切でない？
    return [...this.data];
  }
}
>>>>>>> c7319f4a2766d3ab850336db13a7fac76b2863d0
