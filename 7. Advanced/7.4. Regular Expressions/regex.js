(function() {
    'use strict';

    var pattern = /@/;
    console.log(pattern.test('me@somewhere.com'));

    var letters = /^[A-Z]+$/;
    console.log(letters.test('alpha'));
    console.log(letters.test('ALPHA'));

    var numbers = /^[0-9]+$/;
    console.log(numbers.test(2323));

    var alphaNumeric = /^[a-zA-Z0-9]+$/;
    console.log(alphaNumeric.test('232343ABaz'));

    var numberFormat = /^[0-9]{3}-[0-9]{3,6}-[0-9]{3}$/;
    console.log(numberFormat.test('123-123456-123'));
    console.log(numberFormat.test('123-123-123'));

    var numberFormat2 = /^[0-9]{3}\*[0-9]{3,6}\*[0-9]{3}$/;
    console.log(numberFormat2.test('123*2324*232'));

    var numberFormat3 = /^\d{3}\*\d{3,6}\*\d{3}$/;
    console.log(numberFormat3.test('233*23432*232'));

    var noSpecialCharacters = /^\w+$/;
    console.log(noSpecialCharacters.test('abc233'));



}());