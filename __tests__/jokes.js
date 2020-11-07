// const request = require('supertest');
// const db = require('../database/dbConfig');
// const server = require('../api/server');

// let token;

// beforeAll(async (done) => {
//   await request(server)
//       .post('/api/auth/login')
//       .send({
//         username: 'Aaron',
//         password: 'Secret',
//       })
//       .end((err, response) => {
//         token = response.body.token;
//         done();
//       });
//   })

//   afterAll(async () => {
//       await db.destroy();
//   })

//   describe('Testing the jokes', () => {
//       it('sets off error', async () => {
//           const res = await request(server).get('/api/jokes').set('Authorization', `Bearer ${token}`)
//           expect(res.statusCode).toBe(200);
//       })
//   })