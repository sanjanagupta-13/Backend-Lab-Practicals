const os=require('os');

const cpucore=os.cpus();
console.log("Number of CPU cores =",cpucore.length);

for(i=0;i<cpucore.length;i++){
        console.log(cpucore[i].model);
}

const net=os.networkInterfaces();
console.log("net=",net);
