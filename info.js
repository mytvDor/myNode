const fs = require("fs");

fs.stat("file.txt", (err, stats) => {
  console.log(stats);

  if (err) {
    console.log(err);
  }
});

//sync
try {
  const hi = fs.statSync("hi.txt");
  console.log(hi);
} catch (e) {
  console.log(e);
}
