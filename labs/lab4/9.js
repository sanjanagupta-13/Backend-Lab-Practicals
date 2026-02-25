const os=require('os');

const second=os.uptime();
console.log("second=",second);

const hour=second/3600;
console.log("hours=",hours);
