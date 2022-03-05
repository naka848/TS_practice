// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(1));

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}



const person = {
  firstName: "Max",
  age: "30",
};

const {firstName:userName,age} = person;

console.log(userName);









// const copiedPerson = {
//   ...person,
// };

// console.log(copiedPerson);

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);

// console.log(addedNumbers);




// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);

// console.log(activeHobbies);

// const [hobby1,hobby2,...remainingHobbies] = hobbies;
// console.log(hobby1,hobby2);

