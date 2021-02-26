const mongoose = require("mongoose");
const Category = require("../models/category.model");

module.exports = {
  getCategories: (req, res, next) => {
    Category.find({})
      .then(function (categories) {
        res.send(categories);
      })
      .catch((err) => console.error(err));
  },

  postCategory: (req, res, next) => {
    const newCategory = new Category({
      category: req.body.category,
    });
    newCategory.save(function (err) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: newCategory,
        });
      }
    });
  },

  deleteCategory: (req, res, next) => {
    Category.findOneAndRemove({ _id: req.params.cID })
      .then(function (category) {
        res.send(category);
      })
      .catch((err) => console.error(err));
  },

  postImage: (req, res, next) => {
    const newImage = {
      shape: req.body.shape,
      url: req.body.url,
    };
    Category.updateOne(
      { _id: req.params.cID },
      { $push: { shapes: newImage } },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send({
            data: newImage,
          });
        }
      }
    );
  },
};
