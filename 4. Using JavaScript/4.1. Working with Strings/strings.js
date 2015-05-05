(function() {
    'use strict';

    var testString = 'test string';
    console.log(testString.length);

    console.log(testString.split(' '));
    console.log(testString.indexOf('t',1));
    console.log(testString.lastIndexOf('t'));

    console.log(testString.toUpperCase());
    console.log(testString.toLowerCase());

    console.log(testString.substring(5)); //string

    console.log(testString.substring(0,4)); //test

    console.log(testString.slice(5));
    console.log(testString.slice(0,5));
    console.log(testString.slice(-6));
    console.log(testString.slice(2,-2));

    console.log('     test    '.trim());

}());
