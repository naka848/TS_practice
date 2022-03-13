"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge("momo", 30);
const mergedObj2 = merge({ name: "Max" }, { age: 30 });
