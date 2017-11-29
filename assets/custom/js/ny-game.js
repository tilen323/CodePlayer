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
var imageStar = ['ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
  'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
   'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
    'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p',
     'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
      'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
       'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
        'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-y',
         'ny-y', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y',
          'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p',
           'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y',
            'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y',
             'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
              'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-y', 'ny-y', 'ny-g',
               'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y',
                'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y',
                  'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y',
                   'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                    'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-y', 'ny-y',
                     'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y',
                     'ny-y', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p',
                      'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                       'ny-p', 'ny-g', 'ny-g', 'ny-y', 'ny-y', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g', 'ny-g',
                        'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-g',
                         'ny-g', 'ny-g', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                          'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                           'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p',
                            'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p', 'ny-p'];

// Add squares to the board
function addSquares(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square"><div id="ny-cell-' + i + '" class="ny-cell ny-p">ny-p</div></div>';
    }
    $('.ny-game-box').append(square);
};

// Add small squares to the board
function addSmallSquares1(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square ny-small-square"><div id="ny-small-cell-a' + i + '" class="ny-p"></div></div>';
    }
    $('.ny-compare-box-1').append(square);
};
function addSmallSquares2(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square ny-small-square"><div id="ny-small-cell-b' + i + '" class="ny-p"></div></div>';
    }
    $('.ny-compare-box-2').append(square);
};

var numOfSquares = 400;
addSquares(numOfSquares);
addSmallSquares1(numOfSquares);
addSmallSquares2(numOfSquares);

// Button colors
var lmbColor = 'ny-w';
var rmbColor = 'ny-p';

// Returns string for result screen from score
var nyScoreString = '';
function resultString(gameScore) {
    gameScore = parseInt(gameScore);
    if (gameScore < 70) {
        nyScoreString = 'Ugh. You need a ride home.';
    } else if (gameScore < 75) {
        nyScoreString = 'Not bad ... for a client.';
    } else if (gameScore < 85) {
        nyScoreString = 'Nice one! You deserve another drink.';
    } else if (gameScore < 95) {
        nyScoreString = 'Too good to be true.';
    } else if (gameScore < 100) {
        nyScoreString = 'Wow! Do you work at Gigo?';
    } else {
        nyScoreString = 'You must be Miha. Miha Klinar.';
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
var nyImageArrayHtml = '';
$('.ny-store').click(function() {
    nyImageArray = [];
    nyImageArrayHtml = '';
    $('.ny-save-btn').show();
    $('.ny-cancel-btn').html('CANCEL');
    $('#ny-error').html('');
    for (i = 0; i < numOfSquares; i++) {
        var cellColor = $('#ny-cell-' + (i + 1)).html();
        nyImageArray.push(cellColor);
        if (cellColor == 'ny-w') {
            nyImageArrayHtml += 'a';
        } else if (cellColor == 'ny-g') {
            nyImageArrayHtml += 'b';
        } else if (cellColor == 'ny-p') {
            nyImageArrayHtml += 'c';
        } else if (cellColor == 'ny-lp') {
            nyImageArrayHtml += 'd';
        } else if (cellColor == 'ny-y') {
            nyImageArrayHtml += 'e';
        } else if (cellColor == 'ny-ly') {
            nyImageArrayHtml += 'f';
        } else if (cellColor == 'ny-b') {
            nyImageArrayHtml += 'g';
        } else if (cellColor == 'ny-lb') {
            nyImageArrayHtml += 'h';
        } else if (cellColor == 'ny-gr') {
            nyImageArrayHtml += 'i';
        } else if (cellColor == 'ny-r') {
            nyImageArrayHtml += 'j';
        } else if (cellColor == 'ny-pr') {
            nyImageArrayHtml += 'k';
        }
    }
    $('.ny-save-wrap').removeClass('ny-hidden');
    $('#ny-save-array').val(nyImageArrayHtml);
});

// Save screen close
$('.ny-cancel-btn').click(function() {
    $('.ny-save-wrap').addClass('ny-hidden');
    $('#ny-name').val('');
});


// Build image from array
function buildImageFromArray(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-cell-' + (i + 1)).attr('class', 'ny-cell').addClass(imgArray[i]).html(imgArray[i]);
    }
}
// Build small image 1 from array
function buildSmallImage1(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-small-cell-a' + (i + 1)).attr('class', imgArray[i]);
    }
}
// Build small image 2 from array
function buildSmallImage2(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-small-cell-b' + (i + 1)).attr('class', imgArray[i]);
    }
}
$('.ny-build').click(function() {
    buildImageFromArray(nyImageArray);
});

// Build image from string
function stringArrayToClass(imageString) {
    var stringArray = Array.from(imageString);
    var classArray = [];
    for (i = 0; i < numOfSquares; i++) {
        if (stringArray[i] == 'a') {
            classArray.push('ny-w');
        } else if (stringArray[i] == 'b') {
            classArray.push('ny-g');
        } else if (stringArray[i] == 'c') {
            classArray.push('ny-p');
        } else if (stringArray[i] == 'd') {
            classArray.push('ny-lp');
        } else if (stringArray[i] == 'e') {
            classArray.push('ny-y');
        } else if (stringArray[i] == 'f') {
            classArray.push('ny-ly');
        } else if (stringArray[i] == 'g') {
            classArray.push('ny-b');
        } else if (stringArray[i] == 'h') {
            classArray.push('ny-lb');
        } else if (stringArray[i] == 'i') {
            classArray.push('ny-gr');
        } else if (stringArray[i] == 'j') {
            classArray.push('ny-r');
        } else if (stringArray[i] == 'k') {
            classArray.push('ny-pr');
        }
    }
    return classArray;
}

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
var watchSec = 1;
var playSec = 1;

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
var numOfNyImagesGame = parseInt($('#ny-game-image--box').children().length);

// Start game
$('.ny-start-game').click(function() {
    var randomNumber = Math.floor((Math.random() * numOfNyImagesGame) + 1);
    var array1 = stringArrayToClass($('#ny-game-image--box textarea:nth-child(' + randomNumber + ')').val());
    var array2 = [];
    $('.ny-start-wrap').addClass('ny-hidden');
    $('#ny-timer').html(watchSec).show();
    $(this).addClass('ny-avoid-clicks');
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
        $('#ny-hidden-score').val(finalScore);
        $('.ny-result--score').html(finalScore + '%');
        $('.ny-result--text').html(finalScoreString);
        $('.ny-start-game').removeClass('ny-avoid-clicks');
        buildSmallImage1(array1);
        buildSmallImage2(array2);
        $(this).removeClass('ny-hidden');
        $(this).dequeue();
    });
});

// hide submit score button after click
$('.ny-submit-score').click(function() {
    $(this).hide();
});

// Close results
$('.ny-result-close').click(function() {
    $('.ny-result-wrap').addClass('ny-hidden');
    $('.ny-start-wrap').removeClass('ny-hidden');
    $('.ny-square div').attr('class', 'ny-cell ny-p').html('ny-p');
    $('.ny-submit-score').removeClass('ny-avoid-clicks');
    $('.ny-submit-score').show();
    $("#ny-score-error").html('');
});

// Save image to the database
function ajaxSaveImage() {
    var nyInput = $("#ny-name").val();
    var nyInputImage = $("#ny-save-array").val();
    $.ajax({
        type: "POST",
        url: "/ny-game-editor",
        data: JSON.stringify({
            "name": nyInput,
            "image": nyInputImage
        }),
        dataType: "json"
    })
        .done(function(jsonResponse) {
            $("#ny-error").html(jsonResponse.message);
            $('.ny-cancel-btn').html('CLOSE');
            $('.ny-save-btn').hide();
        });
}

// Save score to the database
function ajaxSaveScore() {
    var nyNameScore = $("#ny-name-score").val();
    var nyInputScore = $("#ny-hidden-score").val();
    $.ajax({
        type: "POST",
        url: "/ny-game",
        data: JSON.stringify({
            "name": nyNameScore,
            "score": nyInputScore
        }),
        dataType: "json"
    })
        .done(function(jsonResponse) {
            $("#ny-score-error").html(jsonResponse.message);
            $('.ny-submit-score').addClass('ny-avoid-clicks');
        });
}

$('.ny-test1').click(function() {
    buildImageFromArray(stringArrayToClass(image1));
});