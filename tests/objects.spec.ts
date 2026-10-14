import { expect, test } from '@playwright/test';

test.describe('GET - Objects API by ID', () => {
    test('should return status code 200', async ({ request }) => {
        const response = await request.get('/objects/1');
        expect(response.status()).toBe(200);
    });
})

