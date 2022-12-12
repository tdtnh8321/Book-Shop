const importModel = require("../models/importModel");
const importDetailModel = require("../models/importDetailModel");
const bookModel = require("../models/bookModel");

const ImportController = {
  //1. Lấy tất cả các phiếu nhập
  getAllImport: async (req, res) => {
    try {
      await importModel
        .find()
        .populate("idAdmin")
        .then((data) => {
          return res.status(200).json(data);
        });
    } catch (error) {
      return res.status(500).json({ msg: "getAllImport " + error });
    }
  },
  //2.Lấy chi tiết phiếu nhập
  getImportDetail: async (req, res) => {
    try {
      await importDetailModel
        .find({ idImport: req.params.id })
        .populate("idBook")
        .then((data) => {
          return res.status(200).json(data);
        });
    } catch (error) {
      return res.status(500).json({ msg: "getImportDetail " + error });
    }
  },
  //3. Thêm phiếu nhập+chi tiết phiếu nhập
  createImport: async (req, res) => {
    try {
      const { total, idAdmin, items } = req.body;
      const d = new Date();

      const newImport = new importModel();
      newImport.total = total;
      newImport.date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
      newImport.idAdmin = idAdmin;

      newImport.save((err, rs) => {
        if (err) {
          return res.status(403).json({ msg: "Tạo phiếu nhập lỗi" });
        } else {
          const idImport = rs._id;

          items.forEach((item) => {
            const newItem = new importDetailModel();
            newItem.idImport = idImport;
            newItem.idBook = item.idBook;
            newItem.amount = item.amount;
            newItem.price = item.price;
            newItem.total = item.total;

            bookModel.findById(item.idBook).then((data) => {
              data.qty += item.amount;
              data.save();
            });
            newItem.save((err, rs) => {
              if (err) {
                return res
                  .status(403)
                  .json({ msg: "Thêm chi tiết đơn hàng lỗi!" });
              }
            });
          });
        }
      });
      return res.status(200).json({ msg: "Nhập hàng hoàn tất" });
    } catch (error) {
      return res.status(500).json({ msg: "createImport " + error });
    }
  },
};
module.exports = ImportController;
