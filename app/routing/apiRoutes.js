

var path = require('path');

var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);

    // code for modal popup goes here?
});



app.post("/api/friends", function(req, res) {

  friends.push({
    name: req.body.name,
    photo: req.body.photo,
    scores:req.body['scores[]']
  });
  res.json(friends);
  console.log(friends)
});

};
