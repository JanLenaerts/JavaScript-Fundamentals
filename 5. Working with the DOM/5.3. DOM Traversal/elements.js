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

    var heading = document.getElementsByTagName('header')[0];
    console.log(heading.childNodes.length);

    var x,length;
    for (x = 0, length = heading.childNodes.length; x < length; x += 1) {
        if (heading.childNodes[x].nodeType === 1) {
            console.log('I am a ' + heading.childNodes[x].tagName);
        }
    }
    console.log(heading.children.length);

    console.log(heading.childNodes[0].nodeName);
    console.log(heading.childNodes[1].nodeName);

    console.log(subHeading.parentNode.nodeName);
    console.log(heading.firstChild.nodeName);
    console.log(heading.firstChild.nextSibling.nodeName);
    console.log(heading.lastChild.previousSibling.nodeName);

}());
