(function(){
    'use strict';

    var newObject = {};
    Object.prototype.mySpecialProperty = 'special';
    console.log(newObject.mySpecialProperty);

    var newArray = [1, 2, 3];
    if (!Array.prototype.first) {
        Array.prototype.first = function() { return this[0] };
    }
    console.log(newArray.first());

    newObject.prop1 = 'prop1';
    Object.keys(newObject).forEach(function (item){
        console.log(newObject[item]);
    });

    Object.freeze(newObject);

    if (!Object.isFrozen(newObject)) {
        newObject.prop1 = 'updated prop!';
    }

    var unFrozenObj = {};
    Object.keys(newObject).forEach(function (item){
        unFrozenObj[item] = newObject[item];
    });

    Object.seal(unFrozenObj);
    unFrozenObj.prop1 = 'woohoo';
    console.log(unFrozenObj.prop1);

    if (!Object.isSealed(unFrozenObj)) {
        delete unFrozenObj.prop1;
    }


    var extensible = {};
    console.log(Object.isExtensible(extensible));

    Object.preventExtensions(extensible);
    if(Object.isExtensible(extensible)) {
        extensible.newProperty = 'new';
    }
    console.log(extensible);


    var Person = function (name) {
        this.name = name;
    };

    Person.prototype = {
        greet: function () {
            return this.name;
        }
    }

    var fred = new Person('Fred');
    console.log(fred.greet());

    console.log(fred);

    var bob = Object.create(Person.prototype, {
        name: { writeable: true, value: 'Bob'}
    });


    Object.defineProperty(bob, 'job', {
        value: 'Developer',
        writeable: true,
        configurable: true,
        enumerable: true
    });
    Object.defineProperties(bob, {
        heightInCm: {
            value: 183
        },
        weightInKg: {
            value: 75
        }
    });

    console.log(bob.greet());
    console.log(bob.job);
    console.log(bob.heightInCm);
    console.log(bob);
}());