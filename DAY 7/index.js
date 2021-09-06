const express = require("express"); // imported the express module from the node_modules folder.
const app = express(); // Express passes a function definition (export = e) which we need to call before moving ahead and being able to use express.

app.listen(1111); 
// We launched our local server at port 1111 where express will be listening to the requests: CRUD -> POST, GET, PUT, DELETE


const handleGet = (req, res) => {
  //   console.log(req);
  //   res.send([1]);
  //   res.json();
  //   res.sendStatus(404);
  res.send(
    "Responding to a GET request made by the HTML GET Method. Works for both '/gt' and '/get'."
  ); //wont work if used res.sendStatus() before it. Will have to use res.status().
  //   res.status(200).send("Pipelining- ek function ke baad dusra function");
}; // Separate function to handle response and request.


app.get("/g(e)?t", handleGet);
app.get("/:user/Cars/:color", (req, res) => {
  res.send(req.params);
});


// ?xyz="saksham" -> xyz's value can be found by -> res.query [query parameter, contained in variables after ? and before &]
// /:abc/products -> abc's value can be found by -> res.param [route parameter, contained in the URL]


/*
app.get("/ge+t", handleGet); geeeeeeeet
app.get("/ge*t", handleGet); geRANDOMSHITTEXTDOESNTMATTER
*/


/*
 app.get("/g(e)?t", handleGet); {use colon to handle dynamic input's in the url, eg: localhost:1111/saksham/Cars/black -> localhost:1111/:user/Cars/:color} we will get the value of ':user' and ':color' in request.params
*/


/*
app.post("/post", (req, res) => {
  res.send("Responding to a POST request made by the HTML POST Method");
});

app.put("/PUT", (req, res) => {
  res.send("Responding to an UPDATE request made by the HTML PUT Method");
});

app.delete("/delete", (req, res) => {
  res.send("Responding to a DELETE request made by the HTML DELETE Method");
});
*/


// We can send anything using res.send(string/obj/array/a file)