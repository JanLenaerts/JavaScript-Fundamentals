(function(){
    'use strict';

    var xhr = new XMLHttpRequest();
    //xhr.onload = function () {
    //    console.log(JSON.parse(xhr.responseText));
    //};
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.withCredentials = true;
    console.log(xhr);


    xhr.open('GET', 'data.json');
    xhr.send();



}());