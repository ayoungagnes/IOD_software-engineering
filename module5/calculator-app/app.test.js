const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {

    let num1 = Math.floor(Math.random() * 1_000_000);
    let num2 = Math.floor(Math.random() * 1_000_000);

    test('Get method of Calculator API', () => {
        return request(app)

    .get(`/calculator/add?num1=${num1}&num2=${num2}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then((response) => {
            expect(response.body).toEqual({ result: num1 + num2 });
        });
    });
});

