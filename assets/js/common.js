$(document).ready(function() {
    $("a.abstract").click(function(event) {
        event.preventDefault();
        $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    });

    $(".navbar-nav").find("a").removeClass("waves-effect waves-light");
});
