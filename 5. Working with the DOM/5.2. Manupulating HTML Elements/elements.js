(function() {

    'use strict';

    console.log(document.getElementById('mainHeading'));
    console.log(document.getElementsByClassName('heading'));
    console.log(document.getElementsByTagName('header'));

    var mainHeading = document.getElementById('mainHeading');
    var subHeading = document.getElementsByClassName('heading')[1];

    console.log(mainHeading.id);
    console.log(subHeading.id);

    mainHeading.id = 'firstHeading';
    console.log(mainHeading.id);
    console.log(document.getElementById('firstHeading'));

    console.log(subHeading.className);
    subHeading.classList.add('special');
    subHeading.classList.remove('special');
    console.log(subHeading.classList.contains('special'));

    console.log(mainHeading.tagName);
    console.log(mainHeading.nodeType);
    console.log(mainHeading.childNodes[0].nodeType);
    mainHeading.innerHTML = '<span>'+ mainHeading.innerHTML + '</span>';
    mainHeading.outerHTML = '<p>' + mainHeading.innerHTML + '</p>';

    subHeading.textContent = 'I love Envato';
    subHeading.setAttribute('contentEditable',true);

    subHeading.removeAttribute('contentEditable');
    console.log(subHeading.hasAttribute('contentEditable'));


}());
