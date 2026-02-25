const os=require('os');

const totalmemory=os.totalmem();
const freememory=os.freemem();

const tmemory=totalmemory/(1024 * 1024 * 1024);// gb
const fmemory=freememory/(1024 * 1024 * 1024);

console.log("totalmemory=",tmemory);
console.log("freememory=",fmemory);
