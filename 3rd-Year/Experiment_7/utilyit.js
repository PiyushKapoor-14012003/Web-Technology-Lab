#!/usr/bin/env node

const crypto = require('crypto');

function generateRandomPassword(length) {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*|';

    if (length < 8) {
        throw new Error('Password length must be at least 8 characters');
    }

    const allChars = lowerCase + upperCase + numbers + specialChars;
    let password = '';
    
    // Ensure at least one character from each required set
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters from all sets
    for (let i = 4; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}

function calculateFactorial(n) {
    if (n < 0) return -1;
    if (n === 0) return 1;
    return n * calculateFactorial(n - 1);
}

function convertToUppercase(text) {
    return text.toUpperCase();
}

const args = process.argv.slice(2);
const command = args[0];

switch (command) {
    case 'generate-password':
        const length = parseInt(args[1], 10) || 8;
        console.log(generateRandomPassword(length));
        break;
    case 'factorial':
        const number = parseInt(args[1], 10);
        console.log(calculateFactorial(number));
        break;
    case 'uppercase':
        const text = args.slice(1).join(' ');
        console.log(convertToUppercase(text));
        break;
    default:
        console.log('Unknown command');
        console.log('Usage:');
        console.log('  generate-password [length]');
        console.log('  factorial <number>');
        console.log('  uppercase <text>');
        break;
}