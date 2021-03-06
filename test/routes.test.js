import request from 'supertest';
import app from '../start.js';

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200);
  });
});

describe('GET /request', () => {
  it('should render properly with valid parameters', async () => {
    await request(app)
      .get('/request')
      .query({ title: 'localhost' })
      .expect(200);
  });

  it('should error without a valid parameter', async () => {
    await request(app).get('/request').expect(500);
  });
});

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404);
    await request(app).get('/notfound').expect(404);
  });
});