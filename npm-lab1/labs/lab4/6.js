const os=require('os');

const name=os.type();
const version=os.version();
const plateform=os.platform();
const architecture=os.arch();

console.log("name=",name);
console.log("version=",version);
console.log("plateform=",plateform);
console.log("architecture=",architecture);