var mongoose = require('./config/database');

var User = require('./models/user');

var users = [
  { // 0
    handle: "DunkLord",
    name:   "Bob Neverdunk",
    email:  "Bob@dunk.com"
  },
  { // 1
    handle: "MoneyMarge",
    name:   "Margaret Kalanchoe",
    email:  "marge@marge.com"
  }
];

var courts = [
  {
    name:     "Valley Plaza Rec Center",
    location: "North Hollywood",
    indoor:   2,
    outdoor:  2,
    hours:    "12-2 on Monday and Wednesday",
    yelpId:   "12085402380"
  },
  {
    name:     "Fernangeles",
    location: "Arleta, CA",
    indoor:   0,
    outdoor:  1.5
  }
];

User.remove({}, function(err) {
  if (err) console.log(err);
  User.create(users, function(err, users) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + users.length  + " users.");
    }
  });
  Court.remove({}, function(err) {
    if (err) console.log(err);
    Court.create(courts, function(err, court) {
      if (err) {
        console.log(err);
      } else {
        console.log("Database seeded with " + courts.length + ' courts.');
        mongoose.disconnect();
      }
    });
  });
});

