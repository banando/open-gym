// Require resource's model(s).
var User = require("../models/user");

var index = function(req, res, next){

  User.find({}, function(err, record){
    if(err){
      res.send(err);
    }
    res.send(record);
  });
};

var show = function(req, res, next){
  User.findById(req.params.id, function(err, record){
    if (err) res.json({message: 'Could not find user because ' + error});
    res.send(record);
  });
};

var create = function(req, res) {
  User.create(req.body, function(err, record){
    if (err){
      res.send(err);
    };
    res.send(record);
  });
};

var update = function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, record){
    if(err) {
      res.send(err);
    };
    res.send(record);
  });
};

var destroy = function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, record) {
    if(err){
      res.send(err);
    };
    res.send(record.name + " has been deleted!");
  });
}
module.exports = {
  index:    index,
  show:     show,
  create:   create,
  update:   update,
  destroy:  destroy
};
