// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (output: string | number) => void = (output) => {
//   console.log(output);
// };

// printOutput(add(1));



const button = document.querySelector('button');

if(button){
    button.addEventListener('click',event =>{
        console.log(event);
    })
}

const hobbies = ['Sports','Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person ={
    name:'Max',
    age:'30',
}

const copiedPerson = {
    ...person,
}

console.log(copiedPerson);

const add = () => {}