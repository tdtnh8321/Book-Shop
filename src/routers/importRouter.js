const router = require("express").Router();
const importController = require("../app/controllers/importController");

//1
router.get("/", importController.getAllImport);

//2
router.get("/:id", importController.getImportDetail);

//3
router.post("/create", importController.createImport);

module.exports = router;
