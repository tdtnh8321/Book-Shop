const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderDetailSchema = new Schema({
  idBook: {
    type: Schema.Types.ObjectId,
    ref: "Books",
  },
  idOrder: {
    type: Schema.Types.ObjectId,
    ref: "Orders",
  },
  amount: {
    type: Number,
  },
  price: { type: Number },
  totalPrice: { type: Number },
});
module.exports = mongoose.model("OrderDetails", OrderDetailSchema);
