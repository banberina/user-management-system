const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  category: { type: String, default: "user" },
  shapes: [
    {
      shape: { type: String, default: null },
      url: { type: String, default: null },
    },
  ],
});

CategorySchema.plugin(AutoIncrement, {
  id: "category_id",
  inc_field: "id",
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
