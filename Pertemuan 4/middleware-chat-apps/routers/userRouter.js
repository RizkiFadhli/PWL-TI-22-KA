const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

router.post("/create", UsersController.createData);
router.get("/fetch-all", UsersController.getAll);
router.get("/", UsersController.index);
router.get("/:id", UsersController.getByID);
router.delete("/delete/:id", UsersController.deleteData);

module.exports = router;
