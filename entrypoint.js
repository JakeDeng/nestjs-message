const {exec,spawn} = require("child_process");
console.log("dummy entrypoint process")

const run = spawn("npm",["run", "start:dev"]);

run.stdout.on("data", data =>{
    console.log(data.toString());
})

run.stderr.on("data", data => {
    console.log(data.toString());
});
