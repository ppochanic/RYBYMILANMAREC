(function($){

$(".app a").on("click", function(event)
{
    event.preventDefault();
    var href = $(this).attr("href");
    $(".app").load(href + " main");
}
);

const d = new Date();
document.getElementById("den").innerHTML = d.getDate();

const b = new Date();
document.getElementById("mesiac").innerHTML = b.getMonth() + 1;

const r = new Date();
document.getElementById("rok").innerHTML = r.getFullYear();




})(jQuery);