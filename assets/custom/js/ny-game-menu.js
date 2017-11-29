var count = 0;
var numOfNyImages = parseInt($('#ny-menu-image--box').children().length);
var menuImageName = '';
var menuImageString = '';
var numOfSquares = 400;

function addSquares(squareNumber) {
    var square = '';
    for (i = 1; i <= squareNumber; i++) {
        square += '<div class="ny-square"><div id="ny-cell-' + i + '" class="ny-cell ny-p">ny-p</div></div>';
    }
    $('.ny-game-box').append(square);
};
addSquares(numOfSquares);
function buildImageFromArray(imgArray) {
    for (i = 0; i < imgArray.length; i++) {
        $('#ny-cell-' + (i + 1)).attr('class', 'ny-cell').addClass(imgArray[i]).html(imgArray[i]);
    }
}

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

function myCount() {
    if (count > (numOfNyImages - 1)) {
        count = 0;
    }

    menuImageName = $('#ny-menu-image--box div:nth-child('+ (count + 1) + ') input').val();
    menuImageString = $('#ny-menu-image--box div:nth-child('+ (count + 1) + ') textarea').val();
    buildImageFromArray(stringArrayToClass(menuImageString));
    $('.ny-menu-display-name').html(menuImageName);
    count ++;

}

setInterval(myCount,5000);