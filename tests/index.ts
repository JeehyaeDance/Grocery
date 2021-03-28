const request = require('supertest');
const app = require("../src/index")

describe("GET /status", () => {
  it("responds with a message 'Hello from Bananas!'", () => {
    request(app)
      .get('/status')
      .expect(200)
  })
})