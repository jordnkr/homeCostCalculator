var navToggle = document.getElementsByClassName('nav-toggle');
var navMenu = document.getElementsByClassName('nav-menu');

for (var i = 0; i < navToggle.length; i++) {
    navToggle[i].addEventListener('click', function() {
        for (var j = 0; j < navMenu.length; j++) {
            navMenu[j].classList.toggle("is-active");
        }
        for (var k = 0; k < navToggle.length; k++) {
            navToggle[k].classList.toggle("is-active");
        }
    }, false);
}
