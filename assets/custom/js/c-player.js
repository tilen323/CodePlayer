function updateOutput() {
    var head = "<html><head><style type='text/css'>",
        body = "</style></head><body>",
        foot = "</body></html>";

    $("#outputPanel").contents().find("html").html(head + $("#cssPanel").val() + body + $("#htmlPanel").val() + foot);
};

$(".c-button").hover(function() {

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).addClass("preview");

    $(this).addClass("hover-button");

}, function() {

    var panelId = $(this).attr("id") + "Panel";

    $("#" + panelId).removeClass("preview");

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

$("#bodyContainer").height($(window).height() - 97);
$(".panels").width(($(window).width() / 2) - 7);

updateOutput();

$(".textarePanel").on("change keyup paste", function() {

    updateOutput();
});

// Mario

$(".mario").hover(function() {

    $(this).addClass("hover-button2");

}, function() {

    $(this).removeClass("hover-button2");
});

$(".mario").click(function() {

    var marioHtml = '<div class="sky"><img class="cloud" src="https://github.com/iamshaunjp/css-animations-playlist/blob/master/mario-examples/img/cloud.png?raw=true"><img class="cloud" src="https://github.com/iamshaunjp/css-animations-playlist/blob/master/mario-examples/img/cloud.png?raw=true"><img class="cloud" src="https://github.com/iamshaunjp/css-animations-playlist/blob/master/mario-examples/img/cloud.png?raw=true"></div><div class="grass"></div><div class="road"><div class="lines"></div><img class="mario" src="https://github.com/iamshaunjp/css-animations-playlist/blob/master/mario-examples/img/mario.png?raw=true"><img class="luigi" src="https://github.com/iamshaunjp/css-animations-playlist/blob/master/mario-examples/img/luigi.png?raw=true"></div>';

    var marioCss = "html, body{height: 100%;width:100%;overflow: hidden;margin: 0;}.grass, .sky, .road{position: relative;}.sky{height: 40%;background: skyblue;}.grass{height: 30%;background: seagreen;}.road{height: 30%;background: dimgrey;box-sizing: border-box;border-top: 10px solid grey;border-bottom: 10px solid grey;width: 100%;}.lines{box-sizing: border-box;border: 5px dashed #fff;height: 0px;width: 100%;position: absolute;top: 45%;}.mario {position: absolute;top: -40px;animation: drive 3s linear infinite both,jump 0.3s ease 0.8s;}.luigi {position: absolute;top: 100px;animation: drive 4s linear infinite both reverse;-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1);}.cloud {position: absolute;}.cloud:nth-child(1) {width: 200px;top: 130px;opacity: 0.5;animation: wind1 80s linear infinite;}.cloud:nth-child(2) {width: 300px;top: 0;animation: wind2 50s linear infinite;}.cloud:nth-child(3) {width: 250px;top: 50px;left: -300px;opacity: 0.8;animation: wind2 60s linear infinite 5s;}@keyframes drive {from{left: -200px}to{left: 100%}}@keyframes wind1 {from{left: -200px}to{left: 100%}}@keyframes wind2 {from{left: -300px}to{left: 100%}}@keyframes jump {0% {top: -40px}50% {top: -100px}100% {top: -40px}}";

    var someHtml = "<h1>Hello World!</h1>"

    var someCss = "h1 { color: green; }"

    $(this).toggleClass("active3");
    $(this).removeClass("hover-button2");

    if ($(this).hasClass("active3")) {
        $("#htmlPanel").html("");
        $("#cssPanel").html("");
        $("#htmlPanel").html(marioHtml);
        $("#cssPanel").html(marioCss);
    } else {
        $("#htmlPanel").html(someHtml);
        $("#cssPanel").html(someCss);
    }

    updateOutput();
});