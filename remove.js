const fs = require("fs");

// Delete a file asynchronously
fs.unlink("delete.txt", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File deleted successfully!");
});

//sync
const filePath = "fileToDelete.txt";

try {
  // Remove the file synchronously
  fs.unlinkSync(filePath);
  console.log("File deleted successfully!");
} catch (err) {
  console.error("Error deleting file:", err);
}
