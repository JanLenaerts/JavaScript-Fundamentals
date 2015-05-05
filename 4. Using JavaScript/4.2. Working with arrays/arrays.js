(function() {
    'use strict';

    var array = ['one', 'two', 'three'];

    console.log(array.length);

    array.push('four');
    console.log(array);

    array.unshift('zero');
    console.log(array);

    console.log(array.pop());
    console.log(array.shift());

    array.splice(0,2,"a","b","c");
    console.log(array);

    console.log(array.reverse());

    console.log(array.sort());

    console.log(['a','b','C'].sort());
    console.log([3,20,10000].sort(function(a,b) {
        if (a < b){
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    }));

    console.log(array.join(''));

    console.log(array.indexOf('b'));

    console.log(array.slice(1));




}());
