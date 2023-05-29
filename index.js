const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = 4000;

server.listen(4000, () => {
  console.log(`Server running on port ${port}`);
});
