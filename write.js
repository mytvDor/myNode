const fs = require("fs");

const content = "hi i am sumit";

fs.writeFile("file.txt", content, (err) => {
  if (err) console.log(err);
});

try {
  fs.writeFileSync("file.txt", content, "utf8");

  //   console.log("hi");
} catch (err) {
  console.log(err);
}
