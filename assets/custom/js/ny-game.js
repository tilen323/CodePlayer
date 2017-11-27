// Prevent default right click
$(document).contextmenu(function() {
    return false;
});

// Track status of mouse button
var isDown = false;
$(document).mousedown(function(e) {
    if( e.button == 2 ) {
        isDown = 'rmb';
    } else {
        isDown = 'lmb';
    }
})
.mouseup(function() {
    isDown = false;
});

// Ny Game Images
var imageStar = ['ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p'];

// Add squares to the board
function addSquares(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square"><div id=ny-cell-' + i + ' class="ny-cell ny-p">ny-p</div></div>';
    }
    $('.ny-game-box').append(square);
};

var numOfSquares = 400;
addSquares(numOfSquares);

// Button colors
var lmbColor = 'ny-w';
var rmbColor = 'ny-p';

// Returns string for result screen from score
var nyScoreString = '';
function resultString(gameScore) {
    gameScore = parseInt(gameScore);
    if (gameScore < 70) {
        nyScoreString = 'bad';
    } else if (gameScore < 75) {
        nyScoreString = 'good';
    } else if (gameScore < 85) {
        nyScoreString = 'very good';
    } else if (gameScore < 95) {
        nyScoreString = 'great';
    } else if (gameScore < 100) {
        nyScoreString = 'near perfect';
    } else {
        nyScoreString = 'perfect';
    }
    return nyScoreString;
}

// Change color of lmb and rmb
// Change color of left mouse button
$('.ny-color-btn').click(function() {
    var pickedColor = $(this).html();
    lmbColor = pickedColor;
    $('.ny-lmb').attr('class', 'ny-menu-item ny-lmb').addClass(pickedColor);
});

// Change color of left and right mouse button
/*$(".ny-color-btn").on("mousedown",function(e){
    var pickedColor = $(this).html();
    if( e.button == 2 ) {
      rmbColor = pickedColor;
      $('.ny-rmb').attr('class', 'ny-menu-item ny-rmb').addClass(pickedColor);
    } else {
      lmbColor = pickedColor;
      $('.ny-lmb').attr('class', 'ny-menu-item ny-lmb').addClass(pickedColor);
    }
});*/

// Change color of square
// - when you drag your mouse
$(".ny-square").mouseover(function(){
    if(!isDown) {
        return false;
    } else if(isDown == 'rmb') {
        $('div', this).attr('class', 'ny-cell').addClass(rmbColor).html(rmbColor);
    } else if (isDown == 'lmb') {
        $('div', this).attr('class', 'ny-cell').addClass(lmbColor).html(lmbColor);
    }
});
// - when you click your mouse
$(".ny-square").on("mousedown",function(e){
    if( e.button == 2 ) {
      $('div', this).attr('class', 'ny-cell').addClass(rmbColor).html(rmbColor);
    } else {
      $('div', this).attr('class', 'ny-cell').addClass(lmbColor).html(lmbColor);
    }
});
// - start from scratch
$('.ny-refresh').click(function() {
    $('.ny-square div').attr('class', 'ny-cell ny-p').html('ny-p');
});

// Store image in an array
var nyImageArray = [];
var nyImageArrayHtml = [];
$('.ny-store').click(function() {
    nyImageArray = [];
    nyImageArrayHtml = [];
    for (i = 0; i < numOfSquares; i++) {
        var cellColor = $('#ny-cell-' + (i + 1)).html();
        nyImageArray.push(cellColor);
        nyImageArrayHtml.push("'" + cellColor + "', ");
    }
    $('.ny-temp-wrap').removeClass('ny-hidden');
    $('#ny-temp-array-text').html(nyImageArrayHtml);
});

// Temp close button
$('#ny-temp-close').click(function() {
    $('.ny-temp-wrap').addClass('ny-hidden');
});


// Build image from array
function buildImageFromArray(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-cell-' + (i + 1)).attr('class', 'ny-cell').addClass(imgArray[i]).html(imgArray[i]);
    }
}
$('.ny-build').click(function() {
    buildImageFromArray(nyImageArray);
});

// Compare two arrays - return percentage
var nyGameScore = 100;
function compareArrays(arrayOne, arrayTwo) {
    nyGameScore = 100;
    var numOfErrors = [];
    for (i = 0; i < numOfSquares; i++) {
        if (arrayOne[i] != arrayTwo[i]) {
            numOfErrors.push(arrayTwo[i]);
        }
    }
    nyGameScore -= (numOfErrors.length * 0.25);
    return nyGameScore;
}

// Game timer
var watchSec = 5;
var playSec = 59;

function startNyGame(watchDuration) {
    var timer, counter = watchDuration;
    $('#ny-timer').delay(counter * 1000 + 1000).fadeOut('fast');
    timer = setInterval(function() {
        $("#ny-timer").html(--counter);
        if (counter == 0) {
            clearInterval(timer);
            $("#ny-timer").html('start');
        };
    }, 1000);
    $('.ny-square div').delay(1000 * watchSec).queue(function() {
        $(this).attr('class', 'ny-cell ny-p').html('ny-p');
        $(this).dequeue();
    });
}

function startNyGamePlay(playDuration) {
    var timer, counter = playDuration;
    $('#ny-timer').delay(counter * 1000 + 1000).fadeOut();
    timer = setInterval(function() {
        $("#ny-timer").html(--counter);
        if (counter == 0) {
            clearInterval(timer);
            $("#ny-timer").html('end');
        };
    }, 1000);
}

// Start game
$('.ny-start-game').click(function() {
    var array1 = imageStar;
    var array2 = [];
    $('#ny-timer').html(watchSec).show();
    buildImageFromArray(array1);
    startNyGame(watchSec);
    $('#ny-timer').queue(function() {
        $(this).html(playSec).show();
        startNyGamePlay(playSec);
        $(this).dequeue();
    });
    $('.ny-result-wrap').delay((watchSec + playSec + 2) * 1000).queue(function() {
        for (i = 0; i < numOfSquares; i++) {
            var cellColor = $('#ny-cell-' + (i + 1)).html();
            array2.push(cellColor);
        }
        var finalScore = compareArrays(array1, array2);
        var finalScoreString = resultString(finalScore);
        $('.ny-result--score').html(finalScore + '%');
        $('.ny-result--text').html(finalScoreString);

        $(this).removeClass('ny-hidden');
        $(this).dequeue();
    });
});

// Close results
$('.ny-result-close').click(function() {
    $('.ny-result-wrap').addClass('ny-hidden');
});

