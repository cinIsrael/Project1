const express = require("express");
const { initiatePayment, getPaymentStatus} = require ("../controllers/paymentControllers");

const router = express.Router();

router.post("/" , initiatePayment);
router.get ("/:id", getPaymentStatus);

module.exports = router;