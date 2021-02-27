const mongoose = require("mongoose");
const User = require("../models/user.model");

module.exports = {
  getUsers: (req, res, next) => {
    User.find({})
      .populate("category")
      .then(function (users) {
        res.send(users);
      })
      .catch((err) => console.error(err));
  },

  getAUser: (req, res, next) => {
    const user = User.findOne(
      {
        _id: req.params.uID,
      },
      (err, user) => {
        if (err) res.send(err);
        else res.send(user);
      }
    );
  },
  
  createUser: (req, res, next) => {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      category: req.body.category,
    });

    newUser.save(function (err) {
      if (err) {
        res.send({
          success: false,
          message: "Failed",
        });
      } else {
        res.send({
          success: true,
          message: "Success",
          user: newUser,
        });
      }
    });
  },

  editAUserName: (req, res, next) => {
    User.findByIdAndUpdate(
      { _id: req.params.uID },
      {
        name: req.body.name,
      }
    )
      .then(function () {
        User.findOne({ _id: req.params.uID }).then(function (name) {
          res.send(name);
        });
      })
      .catch((err) => console.error(err));
  },

  editAUserEmail: (req, res, next) => {
    User.findByIdAndUpdate(
      { _id: req.params.uID },
      {
        email: req.body.email,
      }
    )
      .then(function () {
        User.findOne({ _id: req.params.uID }).then(function (email) {
          res.send(email);
        });
      })
      .catch((err) => console.error(err));
  },

  editAUserPassword: (req, res, next) => {
    User.findByIdAndUpdate(
      { _id: req.params.uID },
      {
        password: req.body.password,
      }
    )
      .then(function () {
        User.findOne({ _id: req.params.uID }).then(function (password) {
          res.send(password);
        });
      })
      .catch((err) => console.error(err));
  },

  editAUserCategory: (req, res, next) => {
    User.findByIdAndUpdate(
      { _id: req.params.uID },
      {
        category: req.body.category,
      }
    )
      .then(function () {
        User.findOne({ _id: req.params.uID }).then(function (category) {
          res.send(category);
        });
      })
      .catch((err) => console.error(err));
  },

  deleteUser: (req, res, next) => {
    User.findOneAndRemove({ _id: req.params.uID })
      .then(function (user) {
        res.send(user);
      })
      .catch((err) => console.error(err));
  },
};
