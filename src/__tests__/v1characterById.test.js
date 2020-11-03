/* eslint-disable no-undef */
require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const R = require('ramda');

const createServer = require('../createServer');
const connectDB = require('../dbInit');

const app = createServer();
const route = (id) => `/v1/characters/${id || 1}`;

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Get character by id', () => {
  test(`GET on '${route()}' returns status 200`, async () => {
    const res = await request(app).get(route());
    expect(res.status).toBe(200);
  });

  test(`GET on '${route()}' returns JSON with UTF-8`, async () => {
    const res = await request(app).get(route());
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  test(`GET on '${route()}' returns Object`, async () => {
    const res = await request(app).get(route());
    expect(R.is(Object, res.body)).toBeTruthy();
  });

  test(`GET on '${route()}' returns Object with correct properties`, async () => {
    const res = await request(app).get(route());
    expect(res.body).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      age: expect.any(String),
      gender: expect.any(String),
      status: expect.any(String),
      personality: expect.any(String),
    });
  });

  test(`GET on '${route()}' returns Object without _id property`, async () => {
    const res = await request(app).get(route());
    expect(res.body._id).toBeUndefined();
  });

  test(`GET on '${route()}' returns Object with id 1`, async () => {
    const res = await request(app).get(route());
    expect(res.body).toMatchObject({
      id: 1,
    });
  });

  test(`GET on '${route(56)}' returns status 404`, async () => {
    const res = await request(app).get(route(56));
    expect(res.status).toBe(404);
  });

  test(`GET on '${route(56)}' returns JSON with Error properties`, async () => {
    const res = await request(app).get(route(56));
    expect(res.body).toMatchObject({
      error: true,
      code: 404,
    });
  });

  test(`GET on '${route('abc')}' returns status 400`, async () => {
    const res = await request(app).get(route('abc'));
    expect(res.status).toBe(400);
  });

  // prettier-ignore
  test(`GET on '${route('abc')}' returns JSON with Error properties`, async () => {
    const res = await request(app).get(route('abc'));
    expect(res.body).toMatchObject({
      error: true,
      code: 400,
    });
  });
});
