(function(){
    'use strict';

    if( 1 + 1 === 2) {
        console.log('The expression is true');
    }

    if(true === false) {
        console.log('We will never see this');
    } else {
        console.log('We will always see this');
    }

    var colour = 'red';
    if ( colour === 'blue') {
        console.log('It is blue');
    } else if( colour === 'green') {
        console.log('It is green');
    } else {
        console.log('it is red');
    }

    if (1) {
        console.log('We will definitely see this');
    }

    var array = ['item'];

    if(array.length){
        console.log(array[0]);
    }

    (true) ? console.log('This one') : console.log('Not this one');

}());

