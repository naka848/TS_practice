"use strict";
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'yota',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     // なんらかのマスター情報を設定する
//     role: [2, 'author'],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "yota",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0,'admin','user'];
// console.log(person);
if (person.role === 5) {
    console.log("管理者ユーザー");
}
let favoriteActivities;
favoriteActivities = ['Sports', 4, true];
