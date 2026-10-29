import { expect, test } from '@playwright/test';

test.describe('GET - Objects API by ID', () => {
    test('should have id, name, data properties', async ({ request }) => {
        const response = await request.get('/objects');
        expect(response.status()).toBe(200);

        const data = await response.json();
        expect(Array.isArray(data)).toBe(true);

        for (const object of data) {
            expect(object).toHaveProperty('id');
            expect(object).toHaveProperty('name');
            expect(object).toHaveProperty('data');
        }
    });
    test('should return status code 200', async ({ request }) => {
        const response = await request.get('/objects/1');
        expect(response.status()).toBe(200);
    });
});

test.describe('POST - Create Object API', () => {
    test('should create with status code 200', async ({ request }) => {
        const response = await request.post('/objects', {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                name: 'Test 1',
                data: {
                    'hobby': 'basketball'
                }
            }
        }
        );
        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body).toHaveProperty('id');
        console.log(body)
    })
})


