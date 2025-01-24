const { processPayment, findPayment } = require("../services/paymentService");

exports.initiatePayment = async (req, res) => {
    const { name, email, amount } = req.body;

    if (!name || !email || !amount) {
        return res.status(400).json({ status: "error", message: "Name, email, and amount are required" });
    }

    try {
        const payment = await processPayment(name, email, amount); // Ensure async call

        res.status(201).json({
            status: "success",
            message: "Payment initiated successfully",
            payment,
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: "An error occurred during payment processing" });
    }
};

exports.getPaymentStatus = (req, res) => {
    const payment = findPayment(req.params.id);

    if (!payment) {
        return res.status(404).json({ status: "error", message: "Payment not found" });
    }

    res.status(200).json({
        status: "success",
        message: "Payment details retrieved successfully",
        payment,
    });
};
