const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  it('should list all users', async () => {
    const res = await request(app)
      .get('/worko/user')
      .auth('admin', 'secret');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('users');
  });

  // More tests for other endpoints...
});

