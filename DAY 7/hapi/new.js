// "use strict";
var obj = require("./server.js");
const Hapi = require("@hapi/hapi");
console.log(obj);
const init = async () => {
  const server = Hapi.server({
    port: obj.port,
    host: "localhost",
  });

  obj.routes.forEach((param) => {
    server.route(param);
  });

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
