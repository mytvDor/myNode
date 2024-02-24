const fs = require("fs");

fs.readFile("hi.txt", "utf8", (err, data) => {
  console.log(data);
  if (err) {
    console.log(err);
  }
});

try {
  console.log(fs.readFileSync("hi.txt", "utf8"));
} catch (e) {
  console.log(e);
}
