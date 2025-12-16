const path=require('path');

const dirname =path.dirname("./labs/lab4/1.js");
const basename=path.basename("./labs/lab4/1.js");
const extensionname=path.extname("./labs/lab4/1.js");
const resolve=path.resolve("./labs/lab4/1.js");

console.log("dirname =",dirname);
console.log("basename =",basename);
console.log("extensionname =",extensionname);
console.log("resolve =",resolve);
