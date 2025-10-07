const { obscureCreditCard } = require('./obscureCreditCard.js');

console.log(obscureCreditCard(1234567812345678)); // output: ************5678
console.log(obscureCreditCard(9876543210987654)); // output: ************7654
console.log(obscureCreditCard(123)); // output: Invalid credit card, must be between 12 and 16 digits
console.log(obscureCreditCard('12345678901234567')); // output: Invalid credit card, must be numbers
console.log(obscureCreditCard(123456789012)); // output: ********9012