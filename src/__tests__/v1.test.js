/* eslint-disable no-undef */
const request = require('supertest');

const createServer = require('../createServer');

const app = createServer();

test('GET on "/v1/" returns status 200', async () => {
  const res = await request(app).get('/v1/');
  expect(res.status).toBe(200);
});

test('GET on "/v1/" returns JSON with UTF-8', async () => {
  const res = await request(app).get('/v1/');
  expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
});

test('GET on undefined route returns status 404', async () => {
  const res = await request(app).get('/undefined/');
  expect(res.status).toBe(404);
});
