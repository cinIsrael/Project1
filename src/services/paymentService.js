let payments = [];

exports.processPayment = (name, email, amount) => {
    const payment = {
        id: `PAY-${Date.now()}`,
        customer_name: name,
        customer_email: email,
        amount,
        status: "pending",
    };

    payments.push(payment);

    setTimeout(() => {
        payment.status = "completed";
    }, 3000);

    return payment;
};

exports.findPayment = (id) => {
    return payments.find((p) => p.id === id);
};
