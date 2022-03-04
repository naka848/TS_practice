// function add(a:number,b:number){
//     let result = a + b;
//     return result;
// }

// const add = (a: number, b: number) => {
//   return a + b;
// };

// 変数に関数を代入？
const add = (a: number, b: number) => a + b;

// console.log(add(2, 5));

// const printOutput = (output: string | number)=>{
//     console.log(output);
// }

const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(2, 5));
