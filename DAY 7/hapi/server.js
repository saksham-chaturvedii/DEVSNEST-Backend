var obj = {
  port: "1123",
  routes: [
    {
      method: "GET",
      path: "/",
      handler: function (request, h) {
        return "Hello World!";
      },
    },
    {
      method: "post",
      path: "/yo",
      handler: function (request, h) {
        return "Hello World!";
      },
    },
  ],
};
module.exports = obj;
