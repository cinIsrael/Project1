const axios = require("axios"); // Import axios
let payments = [];

exports.processPayment = async (name, email, amount) => {
    // Here, we'll simulate calling the payment gateway's API (e.g., PayPal) with axios

    const payment = {
        id: `PAY-${Date.now()}`,
        customer_name: name,
        customer_email: email,
        amount,
        status: "pending",
    };

    // Simulate calling the payment gateway's API
    try {
        const response = await axios.post("https://api.sandbox.paypal.com/v1/payments/payment", {
            // Mock request payload for PayPal
            intent: "sale",
            payer: {
                payment_method: "paypal",
            },
            transactions: [{
                amount: {
                    total: amount.toString(),
                    currency: "USD",
                },
                description: `Payment for ${name}`,
            }],
            redirect_urls: {
                return_url: "https://your-return-url.com",
                cancel_url: "https://your-cancel-url.com",
            },
        }, {
            headers: {
                "Authorization": "Bearer YOUR_ACCESS_TOKEN", // Replace with your actual PayPal access token
            },
        });

        if (response.data && response.data.state === "approved") {
            payment.status = "completed"; // Update the payment status to completed
        }
    } catch (error) {
        console.error("Payment gateway error:", error);
        payment.status = "failed"; // Mark as failed in case of error
    }

    payments.push(payment);
    return payment;
};

exports.findPayment = (id) => {
    return payments.find((p) => p.id === id);
};
