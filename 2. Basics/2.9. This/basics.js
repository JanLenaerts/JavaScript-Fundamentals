(function (){

    'use strict';
    console.log(this);
    var object = {
        property: 'I belong to this',
        method: function() {
            return this.property;
        }
    };
    console.log(object.method());

    function Person(name){
        this.name = name;
    }

    var bob = new Person('Bob');
    console.log(bob.name);



})();
