$(document).ready(function() {
    $(".nav-toggle").on("click", function() {
        $(".nav-menu").toggleClass("is-active");
        $(".nav-toggle").toggleClass("is-active");
    });
});
