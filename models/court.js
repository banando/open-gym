var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var courtSchema = new mongoose.schema({
  name:     String,
  location: String,
  indoor:   Number,
  outdoor:  Number,
  hours:    String,
  lights:   Boolean,
  yelpId:   String
});

var Court = mongoose.model('Court', courtSchema);

module.exports = Court;
