const request = require("supertest");
const { app } = require("../index");

describe("post", () => {
  it("should add an inquiry successfully with a status code 200", async () => {
    const response = await request(app).post("/inquiry").send({
      email: "test@example.com",
      first_name: "John",
      last_name: "Doe",
      phone_number: "123456789122",
      inquiry_text: "Some inquiry text",
    });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Inquiry added successfully" });
  });

  it("should return 500 if any field length is less than the minlength or greater than the maxlength", async () => {
    const response = await request(app).post("/inquiry").send({
      email: "test@example.com",
      first_name: "John",
      last_name: "Doe",
      phone_number: "123456789",
      inquiry_text: "Some inquiry text",
    });

    expect(response.status).toBe(500);
  });

  it("should return 400 if any field is missing", async () => {
    const response = await request(app).post("/inquiry").send({});

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "All fields are required" });
  });
});
