(function() {

    'use strict';

    var subHeading = document.getElementsByTagName('h2')[0];
    console.log(subHeading);

    //subHeading.addEventListener('click', function() {
    //    console.log("clicked h2");
    //});

    var header = document.getElementsByTagName('header')[0];
    console.log(header);

    header.addEventListener('click', function(e) {
        console.log('The ' + e.target.nodeName + ' was clicked');
        e.stopPropagation();
    });

    document.addEventListener('click', function() {
        console.log('Something was clicked');
    });

    var anchor = document.createElement('a');
    anchor.textContent = 'google';
    anchor.setAttribute('href','http://www.google.be');
    document.body.appendChild(anchor);

    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Anchor was clicked');
        e.stopPropagation();
    });

    function mouseenterHandler() {
        console.log('The mouse is in the header');
    }

    header.addEventListener('mouseenter', mouseenterHandler);
    header.removeEventListener('mouseenter', mouseenterHandler);




}());
