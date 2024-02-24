const fs = require("fs");

// async
fs.mkdir("dirName", (err) => {
  console.log("dir created");
  if (err) console.log(err);
});

fs.readdir("dirName", (err, files) => {
  console.log(files);

  if (err) {
    console.log(err);
  }
});

//sync

try {
  fs.mkdirSync("dirName");
} catch (e) {
  console.log(e);
}

try {
  const files = fs.readdirSync("dirName");

  files.forEach((element) => {
    console.log(element);
  });
} catch (e) {
  console.log(e);
}
