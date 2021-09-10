/*var { Chai, FingerChips } = require("./require_test");
//same class name as export to be used here.
var kilaas_obj = new Chai();
var FC_obj = new FingerChips();

console.log(kilaas_obj.print());
console.log(FC_obj.print());
*/

/*--------------------------------------------PART 2--------------------------------------------*/
// -> Taking inputs from CLI in Node.js

/*
var argv = process.argv.slice(2);
argv.forEach(e =>{
    console.log(e);
})
*/
const fs = require("fs");
const { argv } = require("process");
const yargs = require("yargs");
// console.log(yargs); object of different functions
const argvs = yargs
  .command("writeFile", "Create a file.", {
    fileName: {
      description: "This option creates a file if it does not already exist.",
      alias: "n",
      type: "string",
    },
    content: {
      description: "This option adds content to the file.",
      alias: "c",
      type: "string",
    },
  })
  .command("removeFile", "Delete a file", {
    fileName: {
      description: "This option deletes the file.",
      alias: "n",
      type: "string",
    },
  })
  // .option("mkdir", {
  //   description: "Create a directory.",
  // })
  .help().argv;

// if (argvs.mkdir) {
//   fs.mkdirSync(argvs.mkdir);
// }
// if (argvs.n) {
//   fs.writeFileSync(argvs.n, argvs.c);
// }
// if (argvs.R) {
//   fs.unlinkSync(argvs.R);
// }

if (argvs._.includes("writeFile")) {
  if (argvs.fileName && argvs.content) {
    fs.writeFileSync(argvs.n, argvs.c);
  }
} else if (argvs._.includes("removeFile")) {
  if (argvs.n) {
    fs.unlinkSync(argvs.n);
  }
}

console.log(argvs);
