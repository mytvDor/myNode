const fs = require("fs");

// Rename a file asynchronously
fs.rename("oldFile.txt", "newFile.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File renamed successfully!");
});

//sync
// const oldFilePath = "oldFile.txt";
// const newFilePath = "newFile.txt";

// try {
//   // Rename the file synchronously
//   fs.renameSync(newFilePath, oldFilePath);
//   console.log("File renamed successfully!");
// } catch (err) {
//   console.error("Error renaming file:", err);
// }
