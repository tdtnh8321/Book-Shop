const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ImportDetailSchema = new Schema({
  idOrder: {
    type: Schema.Types.ObjectId,
    ref: "Imports",
  },
  idBook: {
    type: Schema.Types.ObjectId,
    ref: "Books",
  },
  amount: {
    type: Number,
  },
  price: {
    type: Number,
  },
  totalPrice: {
    type: Number,
  },
});
module.exports = mongoose.model("ImportDetails", ImportDetailSchema);
