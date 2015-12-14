var mongoose = require('mongoose');
// Use different database URIs based on whether an env var exists.
var dbUri = process.env.MONGOLAB_URI;


mongoose.connect(dbUri);
mongoose.connection.on('connected', function() {
  console.log("we're up and running at "+ dbUri);
});

module.exports = mongoose;
