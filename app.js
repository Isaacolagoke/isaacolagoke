

// /* Script to hide/show menu */


var button = document.querySelector('#togle');
var menu = document.querySelector('.menu');

button.addEventListener('click', function (event) {

    if (menu.style.display == "none") {
        menu.style.display = "block";

    } else {
        menu.style.display = "none";
    }
   
});

