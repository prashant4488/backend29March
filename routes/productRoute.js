const express = require("express");
const {
    addProduct,
    getAllProducts,
    getProductByCategory,
    updateProduct,
} = require("../controller/ProductController");
const { authorize } = require("../controller/userController");
const upload = require("../utils/fileUpload");
const router = express.Router();

router.post("/addproduct", upload.single("product_image"),authorize, addProduct);
router.get("/getallproducts", getAllProducts);
router.get("/productdetail/:id", getProductByCategory);
router.put("/updateproduct/:id", updateProduct);

// product detail
// delete product

module.exports = router;
