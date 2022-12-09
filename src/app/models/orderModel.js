const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  total: {
    type: Number,
  },
  date: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    //0: đã hủy
    //1: đang xử lý -> nhấn duyệt
    //2: đã xử lý -> nhấn giao hàng
    //3: đang giao -> khách hàng nhấn nút xác nhận
    //4: hoàn thành
    type: Number,
  },
});
module.exports = mongoose.model("Orders", orderSchema);
