var object = {
    property1: true,
    property2: 'hello'
};

var string = 'hello';
var stringOject = new String('An object string');
stringOject.valueOf();

object.property; //true
object.property1 = false;
object.property1; //false

object['property2']; // hello
object['property2'] = 'goodbye';
object['property2']; // goodbye

function getThingByColour(colour) {
    var things = {
        red: 'a red thing',
        green: 'a green thing',
        blue: 'a green blue',
    };
    return things[colour] || 'Sorry, no things of that colour exists.';
};

object.property3 = 'test';