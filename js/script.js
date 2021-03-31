$(function() {
    $(".toggle-flow2-1").each(function() {
        $(this).on("click", function() {
            $(this).toggleClass("active");
            $("+.toggle-flow2-2", this).slideToggle(300);
            return false;
        });
    });
});

$(function() {
    $(".question2-1").each(function() {
        $(this).on("click", function() {
            $(this).toggleClass("on");
            $("+.question2-2", this).slideToggle(300);
            return false;
        });
    });
});