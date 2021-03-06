/* eslint-disable no-undef */
const request = require('supertest');
const R = require('ramda');

const createServer = require('../createServer');

const app = createServer();
const route = '/v1/';

describe('Root endpoint & undefined routes', () => {
  test(`GET on ${route} returns status 200`, async () => {
    const res = await request(app).get(route);
    expect(res.status).toBe(200);
  });

  test(`GET on ${route} returns JSON with UTF-8`, async () => {
    const res = await request(app).get(route);
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  test(`GET on '${route}' returns Object`, async () => {
    const res = await request(app).get(route);
    expect(R.is(Object, res.body)).toBeTruthy();
  });

  test(`GET on '${route}' returns Objects with correct properties`, async () => {
    const res = await request(app).get(route);
    expect(res.body).toMatchObject({
      characters: expect.any(String),
      episodes: expect.any(String),
    });
  });

  test('GET on undefined route returns status 404', async () => {
    const res = await request(app).get('/undefined/');
    expect(res.status).toBe(404);
  });

  test('GET on undefined route returns Error data in Object', async () => {
    const res = await request(app).get('/undefined/');
    expect(res.body).toMatchObject({
      error: true,
      code: 404,
    });
  });
});
