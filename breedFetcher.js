const express = require('express');
const request = require("request");
const app = express();
app.listen(4000, () => console.log('listening on port 4000'));
app.use(express.json());

app.get("/breed/:breedRequest", (req, res) => {
const breedInput = req.params.breedRequest
const catbreedSearchUrl = `https://api.thecatapi.com/v1/breeds/search?name=${breedInput}`
  request(catbreedSearchUrl, (error, response, body) => {
    if (error !== null) {
      console.log("error:", error); 
      return
    }
    if (response.statusCode !== 200) {
      console.log("statusCode:", response && response.statusCode); 
      return
    }
    res.send(body);
  
  });
 
});