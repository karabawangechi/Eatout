const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

const register = (req, res) => {
  let user=new User({
    name:req.body.name,
     email:req.body.email,
     phone:req.body.phone,
     password:req.body.password
  })
  // Save the user to the database
  user
    .save()
    .then((user) => {
      res.json({
        message: 'User added successfully.',
      });
    })
    .catch((error) => {
      res.json({
        message: 'An error occurred while saving the user.',
      });
    });
};

module.exports = {
  register,
};
