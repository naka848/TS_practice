// // ジェネリック型 'Array<T>' には 1 個の型引数が必要です
// const names: Array<string> = [];

// // const promise: Promise<unknown>
// // 定数promiseは、特定の型「Promise」を持っている
// // 理由:Promiseは最終的にはなにかによってresolveされるため
// // const promise: Promise<string>
// const promise:Promise<string> = new Promise((resoleve, reject) => {
//   setTimeout(() => {
//     resoleve('mo');
//   }, 2000);
// });

// promise.then(data=>{
//   data.split('');
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// エラー:型 'number' の引数を型 'object' のパラメーターに割り当てることはできません
const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, 30);

// 結果：{name: 'Max', hobbies: Array(1)}
console.log(mergedObj);

interface Lengthy {
  length: number;
}


function countAndDescribe<T extends Lengthy>(element: T):[T,string]{
  let descriptionText = '値がありません。'
  if(element.length > 0){
    descriptionText = '値は' + element.length + '個です。';
  }
  return [element,descriptionText]
}

// console.log(countAndDescribe({length:3}))
console.log(countAndDescribe([]))
