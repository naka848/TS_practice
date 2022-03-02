let userInput: unknown;
let userName: string;

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string,code: number){
    throw{ message:message, errorCode:code} ;
}

generateError('エラーが発生しました',500);