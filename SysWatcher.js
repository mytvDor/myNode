const fs = require("fs");

//VVVVVVVVIMP

fs.watch("hi.txt", (eventType, filename) => {
  console.log(`File ${filename} changed. Event type: ${eventType}`);
});

// Watch for changes in a directory
fs.watch("dirName", (eventType, filename) => {
  console.log(
    `File ${filename} in directory changed. Event type: ${eventType}`
  );
});

// Watch for changes in a file

//SYNC
// const fs = require('fs');

// const filePath = 'hi.txt';
// const directoryPath = 'dirName';

// // Synchronously watch for changes in a file
// function watchFileSync(filePath) {
//   try {
//     const stats = fs.statSync(filePath);
//     const lastModifiedTime = stats.mtimeMs;

//     while (true) {
//       const newStats = fs.statSync(filePath);
//       const newModifiedTime = newStats.mtimeMs;

//       if (newModifiedTime !== lastModifiedTime) {
//         console.log(`File ${filePath} has been modified.`);
//         lastModifiedTime = newModifiedTime;
//       }
//     }
//   } catch (err) {
//     console.error('Error watching file:', err);
//   }
// }

// // Synchronously watch for changes in a directory
// function watchDirectorySync(directoryPath) {
//   try {
//     const files = fs.readdirSync(directoryPath);

//     while (true) {
//       const newFiles = fs.readdirSync(directoryPath);

//       if (newFiles.length !== files.length) {
//         console.log(`Directory ${directoryPath} has been modified.`);
//         files = newFiles;
//       }
//     }
//   } catch (err) {
//     console.error('Error watching directory:', err);
//   }
// }

// // Example usage
// watchFileSync(filePath);
// watchDirectorySync(directoryPath);
