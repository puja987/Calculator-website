var sitImage = document.querySelector('img');
sitImage.onclock = function () {
    'use strict';
    var myImages = sitImage.getAttribute('src');
    if (myImages === ' images/sit.jpg') {
        sitImage.setAttribute('src', 'images/sit.jpg');
    } else {
        sitImage.setAttribute('src', 'images/sit.jpg');
    }
};
