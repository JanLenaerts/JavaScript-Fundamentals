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


    array.forEach(function(value,index) {
        console.log('Item at index' + index + 'has the value ' + value);
    });

    console.log(array.every(function(value) {
        return typeof value === 'string';
    }))

    array.push(1);

    console.log(array.some(function(value) {
        return typeof value === 'number';
    }));

    console.log(['a', 1, 'b', 2, 'c', 3].filter(function (value) {
        return typeof value !=='number';
    }));

    array.splice(4,1);

    console.log(array.map(function (value) {
        return value.toUpperCase();
    }));

    console.log([1, 2, 3].reduce(function (total, value) {
        return total += value;
    }));

    console.log([1, 2, 3].reduce(function (total, value) {
        return total += value;
    },4));

    console.log([1, 2, 3].reduceRight(function (total, value) {
        return total += value;
    }));

    var arr = ["1", "2", "3", "4", "5"];

    var total1 = arr.reduce(function(prev, cur) {
        return prev + cur;
    });

     var total2 = arr.reduceRight(function(prev, cur) {
        return prev + cur;
    });

    console.log(total1); // => 12345
    console.log(total2);

}());
