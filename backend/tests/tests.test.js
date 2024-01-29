const request = require("supertest");
const { app } = require("../index");

describe("post new inquiry to database", () => {
  it("should add an inquiry successfully return status 200", async () => {
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

describe("get all inquiries from the database", () => {
  it("should return all inquiries in the database and return status 200", async () => {
    const response = await request(app).get("/inquiry/all");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("inquires");
  });
});

describe("check if user exists in database", () => {
  const userData = {
    email: "emadhmady0@gmail.com",
    password: "12345678",
  };
  it("should return status 200 if user exists with same email and password", async () => {
    const response = await request(app).post("/user/login").send(userData);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });
  it("should return status 400 if any field is missing", async () => {
    const response = await request(app).post("/user/login").send({});
    expect(response.status).toBe(400);
  });
  it("should return status 400 if email or password are incorrect", async () => {
    const response = await request(app).post("/user/login").send({
      email: "emadhmady0@gmail.com",
      password: "emad1234",
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ message: "Invalid email/password" });
  });
});

describe("post a new user to database", () => {
  it("should return status 400 if any field is missing", async () => {
    const response = await request(app).post("/user/register").send({});
    expect(response.status).toBe(400);
  });

  it("should return status 400 if a user with the same email exists in database", async () => {
    const response = await request(app).post("/user/register").send({
      email: "emadhmady0@gmail.com",
      password: "12345678",
      first_name: "emad",
      last_name: "hmady",
      user_type: 1,
    });
    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      message: "User with this email already exists",
    });
  });

  it("should return status 200 if user is added successfully", async () => {
    const response = await request(app).post("/user/register").send({
      email: "joe111@gmail.com",
      password: "12345678",
      first_name: "joe",
      last_name: "joe",
      user_type: 1,
    });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Registered Successfully" });
  });
});
