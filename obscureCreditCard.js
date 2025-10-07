// credit card function
function obscureCreditCard(cardNumber) {
    // if (cardNumber.length > 16 || cardNumber.length < 12 && typeof cardNumber !== 'number') { // invalid length - only between 12 and 16
    //     return 'Invalid Credit Card';
    // } else { // valid length - obscure all but last four digits
    //     const strCardNumber = cardNumber.toString();
    //     const lastFourDigits = strCardNumber.slice(-4);
    //     const obscuredSection = '*'.repeat(strCardNumber.length - 4);
    //     return obscuredSection + lastFourDigits;
    // }
    if (typeof cardNumber !== 'number') { // invalid type - must be number
        return 'Invalid credit card, must be numbers';
    }

    const strCardNumber = cardNumber.toString(); // convert number to string for length check and slicing

    if (strCardNumber.length > 16 || strCardNumber.length < 12) { // invalid length - only between 12 and 16
        return 'Invalid credit card, must be between 12 and 16 digits';
    } else { // valid length - obscure all but last four digits
        const lastFourDigits = strCardNumber.slice(-4); // ex: 123456789012 -> 9012 - get last four digits
        const obscuredSection = '*'.repeat(strCardNumber.length - 4); // ex: 123456789012 -> ******** - create string of asterisks for all but last four digits
        return obscuredSection + lastFourDigits; // ******** + 9012 -> ********9012
    }
}

module.exports = { obscureCreditCard };