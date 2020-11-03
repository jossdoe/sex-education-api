/* eslint-disable no-undef */
require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const R = require('ramda');

const createServer = require('../createServer');
const connectDB = require('../dbInit');

const app = createServer();
const route = '/v1/episodes';

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Get all episodes', () => {
  test(`GET on '${route}' returns status 200`, async () => {
    const res = await request(app).get(route);
    expect(res.status).toBe(200);
  });

  test(`GET on '${route}' returns JSON with UTF-8`, async () => {
    const res = await request(app).get(route);
    expect(res.headers['content-type']).toBe('application/json; charset=utf-8');
  });

  test(`GET on '${route}' returns Array`, async () => {
    const res = await request(app).get(route);
    expect(R.is(Array, res.body)).toBeTruthy();
  });

  test(`GET on '${route}' returns Array of Objects`, async () => {
    const res = await request(app).get(route);
    expect(R.is(Object, res.body[0])).toBeTruthy();
  });

  test(`GET on '${route}' returns Objects with correct properties`, async () => {
    const res = await request(app).get(route);
    expect(res.body[0]).toMatchObject({
      id: expect.any(Number),
      episode: expect.any(String),
      name: expect.any(String),
      synopsis: expect.any(String),
      airdate: expect.any(String),
      season: expect.any(String),
      characters: expect.any(Array),
    });
  });

  test(`GET on '${route}' returns Objects without _id property`, async () => {
    const res = await request(app).get(route);
    expect(res.body[0]._id).toBeUndefined();
  });

  test(`GET on '${route}' starts with Episode 1 of Season 1`, async () => {
    const res = await request(app).get(route);
    expect(res.body[0]).toMatchObject({
      episode: 'Episode 1',
      season: '1',
    });
  });
});
