const url="https://www.w3schools.com/page?name=Sanjana&age=20";
const relativepath="5.js";
const urlobject=new URL(relativepath,url);
console.log(urlobject.href);
console.log(urlobject);
