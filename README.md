# 🗂 Overview to **Obscure Credit Card**
[![My Skills](https://skillicons.dev/icons?i=js,nodejs,jest)](https://skillicons.dev)
### Repo made to write unit tests using TDD with **Jest**.

Install **Jest** to run unit tests. 

- `npm install --save-dev jest`

### Current tests.

<img width="498" height="194" alt="Image" src="https://github.com/user-attachments/assets/77b647cb-2057-42d4-abae-a522f4d284dd" />


```js
describe('Obscure Credit Card', () => { // last four digits
    test('obscures all but last four digits of credit card number', () => {
        expect(obscureCreditCard(1234567812345678)).toBe('************5678');
    });
});

describe('Invalid Inputs', () => { // invalid inputs
    test('rejects too short (<12)', () => { // invalid length - too short
        expect(obscureCreditCard(123)).toBe('Invalid credit card, must be between 12 and 16 digits');
    });

    test('rejects too long (>16)', () => { // invalid length - too long
        expect(obscureCreditCard(12345678901234567)).toBe('Invalid credit card, must be between 12 and 16 digits');
    });

    test('rejects non-number input', () => { // invalid type - not a number
        expect(obscureCreditCard('123456789012')).toBe('Invalid credit card, must be numbers');
    });
});
```