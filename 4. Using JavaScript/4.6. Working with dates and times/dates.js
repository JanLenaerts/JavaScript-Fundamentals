(function() {

    'use strict';

    var now = new Date();
    console.log(now);
    console.log(typeof Date());

    var partyTime = new Date(9466784799000);
    console.log(partyTime);

    var dob = new Date('September 9 1978');
    console.log(dob);

    var notADate = new Date('whoops');
    console.log(notADate);

    var specialDate = new Date(2014, 12, 31);
    console.log(specialDate);

    console.log(specialDate.getDate());
    console.log(specialDate.getMonth());
    console.log(specialDate.getFullYear());

    console.log(specialDate.getUTCDate());
    console.log(specialDate.getUTCMonth());
    console.log(specialDate.getUTCFullYear());

    console.log(specialDate.getDay());
    console.log(specialDate.getUTCDay());

    console.log(specialDate.toString());
    console.log(specialDate.toUTCString());
    console.log(specialDate.toDateString());
    console.log(specialDate.toTimeString());
    console.log(specialDate.toISOString());
    console.log(specialDate.toLocaleString());
}());
