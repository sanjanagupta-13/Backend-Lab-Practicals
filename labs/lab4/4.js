const path=require('path');

const check1=path.isAbsolute("./labs/lab4/4.js");
const check2=path.isAbsolute("c:/npm-lab1/labs/lab4/4.js");

console.log("check1 =",check1);
console.log("check2 =",check2);