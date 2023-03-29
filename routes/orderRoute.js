const express = require("express");
const {
    placeOrder,
    getAllOrders,
    getOrderDetails,
    deleteOrder,
    getOrderOfUser,
    updateOrder,
} = require("../controller/orderController");
const router = express.Router();

router.post("/placeholder", placeOrder);
router.get("/getallorders", getAllOrders);
router.get("/getorderdetail/:orderId", getOrderDetails);
router.get("/userorders/:userId", getOrderOfUser);
router.put("/updateorder/:orderId", updateOrder);
router.delete("/deleteorder/:orderId",deleteOrder)
router.get("/getorderid/:orderId",getOrderOfUser)
module.exports = router;
