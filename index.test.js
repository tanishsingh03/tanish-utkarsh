const index=require('./index');
const request = require('supertest');

describe('POST /sum', () => {
  test('should return the sum of two numbers', async () => {
    let res = await request(index).post('/sum').send({ a: 2, b: 3 });
  });
  expext(res.body.result).toBe(5);




});
it('should handle string inputs', async () => {
  let res = await request(index).post('/sum').send({ a: '4', b: '6' });
  expect(res.body.result).toBe(10);
});it('should handle missing parameters', async () => {
  let res = await request(index).post('/sum').send({ a: 2 });
  expect(res.body.result).toBeNaN();
});     
it('should handle negative numbers', async () => {
  let res = await request(index).post('/sum').send({ a: -2, b: -3 });
  expect(res.body.result).toBe(-5);
}); 