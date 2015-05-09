(function() {

    'use strict';

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, onPositionFailed,  {
            timeout:10000
        });

        var watch = navigator.geolocation.watchPosition(onPositionChanged, onPositionFailed);

        navigator.geolocation.clearWatch();
    }

    function onPositionReceived(position) {
        console.log(position);
    }

    function onPositionFailed(positionError) {
        console.log(positionError);
    }

    function onPositionChanged(position) {
        console.log('New position is ' + position.coords.latitude + ', ' + position.coords.longitude);
    }




}());
