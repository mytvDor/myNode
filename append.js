const fs = require("fs");

const data = "hi \n";

fs.appendFile("hi.txt", data, (err, data) => {
  if (err) console.log(err);

  //   console.log(
  //     fs.readFile("hi.txt", (err, data) => {
  //       if (err) console.log(err);

  //       console.log(data);
  //     })
  //   );

  console.log(data);
});
