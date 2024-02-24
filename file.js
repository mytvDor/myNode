const fs = require("fs");

// fs.writeFileSync("./test.txt", " o"); //sync..  BLOCKING REQ...call
// fs.writeFile("./test.txt", "hw", (err) => {}); // async.. NON BLOCKING... call always expect 1 callback
// const result = fs.readFileSync("./test.txt", "utf-8");  //sync.. call

// fs.readFile("./test.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });   // async.. call always expect 1 callback

// fs.appendFileSync("./test.txt", `${Date.now()}hey \n`);

// console.log(fs.statSync("./test.txt"));                  <= ******VVVVVIMP
//NOTE ALL fs.  ALL METHODS AND WORKING
