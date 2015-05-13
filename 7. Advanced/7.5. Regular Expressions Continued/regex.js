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

    //var url = /^[http]|[https]:/;
    //console.log(url.test('https://www.google.be'));

    var url2 = /^http(?:s?):/;
    console.log(url2.test('https://www.google.be'));

    var camelCased = 'CamelCaseString';
    console.log(camelCased.replace(/([A-Z])/, '_$1').toLowerCase());
    console.log(camelCased.replace(/([A-Z])/g, '_$1').toLowerCase());

    var script = /java(?=script)/i;
    console.log(script.test('Javascript'));
    console.log(!script.test('JavaScript'));

    var lettersAndNumbers = /\d/g;
    console.log('a5b4c3d3e1'.match(lettersAndNumbers));

}());