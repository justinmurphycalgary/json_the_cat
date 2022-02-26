const express = require("express");
const request = require("request");
//instantiate the server object
const app = express();
//open the server
app.listen(5000, () => console.log("listening on port 5000"));
//make sure we can use json data
app.use(express.json());

//create webserver listener
app.get("/breed/:breedRequest", (req, res) => {
  //get the breed name
  const breedInput = req.params.breedRequest;
  //create the outgoing api request
  const catbreedSearchUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breedInput}`;
  //perform the request
  request(catbreedSearchUrl, (error, response, body) => {
    //check for errors
    if (error !== null) {
      console.log("error:", error);
      return;
    }
    if (response.statusCode !== 200) {
      console.log("statusCode:", response && response.statusCode);
      return;
    }
    //testing clo code
    console.log("type of :>> ", typeof JSON.parse(body));
    //output out api code to the browser
    res.send(JSON.parse(body));
  });
});
