const cp = require("child_process");

const child = cp.spawn("cmd.exe", ["/c", "dir"]);

child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
});

child.on("close", (code) => {
    console.log(`process exited with code: ${code}`);
});
