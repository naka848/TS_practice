"use strict";
let userInput;
let userName;
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
const result = generateError('エラーが発生しました', 500);
console.log(result);
