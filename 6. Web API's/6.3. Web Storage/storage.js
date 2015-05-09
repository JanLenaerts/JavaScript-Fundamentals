(function() {

    'use strict';

    console.log(window.sessionStorage);

    window.sessionStorage.setItem('testItem',true);

    window.sessionStorage.setItem('testItem2',['test1', 'test2']);
    window.sessionStorage.setItem('testItem3', JSON.stringify({ prop1: 'oopes'}));

    console.log(JSON.parse(window.sessionStorage.getItem('testItem3')));

    function readStorageKeys() {
        var x, length;
        for (x = 0, length = window.sessionStorage.length; x < length; x+= 1) {
            console.log(window.sessionStorage.key([x]))
        }
    }

    readStorageKeys();

    window.sessionStorage.removeItem('testItem3');
    window.sessionStorage.clear();


}());
