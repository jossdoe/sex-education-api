/* eslint-disable no-undef */
const createServer = require('../createServer');
const request = require('supertest');

const app = createServer();

test('Root route has status 200 on GET', async () => {
  const res = await request(app.listen()).get('/v1/');
  expect(res.status).toBe(200);
});

test('Root route returns JSON', async () => {
  const res = await request(app.listen()).get('/v1/');
  expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
});
