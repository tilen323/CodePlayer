function updateOutput() {
    var head = "<html><head><style type='text/css'>",
        body = "</style></head><body>",
        foot = "</body></html>";

    $("#outputPanel").contents().find("html").html(head + $("#cssPanel").val() + body + $("#htmlPanel").val() + foot);
};

$(".c-button").hover(function() {

    $(this).addClass("hover-button");

}, function() {

    $(this).removeClass("hover-button");

});

$(".c-button").click(function() {

    $(this).toggleClass("active");
    $(this).removeClass("hover-button");

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).toggleClass("hidden");

    var numOfActivePanels = 3 - $(".hidden").length;
    $(".panels").width(($(window).width() / numOfActivePanels) - 7);
});

$("#bodyContainer").height($(window).height() - 98);
$(".panels").width(($(window).width() / 2) - 7);

updateOutput();

$(".textarePanel").on("change keyup paste", function() {

    updateOutput();
});