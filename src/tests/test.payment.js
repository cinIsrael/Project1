const request = require("supertest");
const app = require("../app");

describe("Payment Gateway API", () => {
    it("should initiate a payment", async () => {
        const response = await request(app)
            .post("/api/v1/payments")
            .send({ name: "John Doe", email: "john@example.com", amount: 100 });

        expect(response.statusCode).toBe(201);
        expect(response.body.status).toBe("success");
    });

    it("should retrieve a payment", async () => {
        const response = await request(app)
            .post("/api/v1/payments")
            .send({ name: "Jane Doe", email: "jane@example.com", amount: 150 });

        const paymentId = response.body.payment.id;

        const getResponse = await request(app).get(`/api/v1/payments/${paymentId}`);

        expect(getResponse.statusCode).toBe(200);
        expect(getResponse.body.payment.customer_name).toBe("Jane Doe");
    });

    it("should return 404 for non-existing payment", async () => {
        const response = await request(app).get("/api/v1/payments/unknown-id");
        expect(response.statusCode).toBe(404);
    });
});
