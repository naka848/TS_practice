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

// function merge<T, U>(objA: T, objB: U): T & U
// →この関数は交差型を返すと推論する
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// const mergedObj: {name: string;} & {age: number;};

const mergedObj = merge<string, number>("momo", 30);
const mergedObj2 = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
