(function() {

    'use strict';

    var myObject = {
        testProperty: "test"
    };

    console.log(myObject.constructor);

    console.log(myObject.hasOwnProperty('constructor'));
    console.log(myObject.hasOwnProperty('testProperty'));

    console.log(myObject.propertyIsEnumerable('constructor'));
    console.log(myObject.propertyIsEnumerable('testProperty'));

    console.log(myObject.toString())
    console.log(['test', 'something'].toString());

    console.log(Object.prototype.toString.call([]));

}());
