const request = require('supertest');
const app = require('../app');

describe('Testando endpoint /', () => {
  it('Deve retornar Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World!');
  });
});
