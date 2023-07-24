const express = require("express");
const router = express.Router();
const passport = require("passport");
const multer = require("multer"); // multer for parsing multipart form data (files)
const fse = require("fs-extra");

//Import controllers
const {
    addMintProduct,
    getMintProducts,
    getMintProductById,
  } = require("../controllers/mintProducts");

  router.post(
    "/",
    passport.authenticate("jwt-admin", { session: false }),
    addMintProduct
  );

  router.get("/", getMintProducts);

  router.get("/:itemNo", getMintProductById);

module.exports = router;

