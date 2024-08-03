// const express = require("express");
const express = require("express");

const app = express();
const port = 4017; // fix this to use config.... soon.



// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
const server = app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
