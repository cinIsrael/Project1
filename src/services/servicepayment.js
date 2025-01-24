let payment = [];
    exports.processPayment = (name, email, amount) => {
        const payment = {
            id : `PAY-${Date.now()}`,
            clients_name : name,
            clients_email: email,
            amount,
            status : "pending",
        };

        PaymentResponse.push(payment);

        setTimeout(() => {
            payment.status = "Done";
        }, 3000);

        return payment;
    };
    