// jest testing for credit card function
const { obscureCreditCard } = require('./obscureCreditCard.js');

describe('Obscure Credit Card', () => { // last four digits
    test('obscures all but last four digits of credit card number', () => {
        expect(obscureCreditCard(1234567812345678)).toBe('************5678');
    });

    test('rejects too short (<12)', () => { // invalid length - too short
        expect(obscureCreditCard(123)).toBe('Invalid Credit Card');
    });

    test('rejects too long (>16)', () => { // invalid length - too long
        expect(obscureCreditCard(12345678901234567)).toBe('Invalid Credit Card');
    });

    test('rejects non-number input', () => { // invalid type - not a number
        expect(obscureCreditCard('123456789012')).toBe('Invalid Credit Card');
    });
});