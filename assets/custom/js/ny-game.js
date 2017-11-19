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

// Add squares to the board
function addSquares(numOfSquares) {
    var square = '';
    for (i = 1; i <= numOfSquares; i++) {
        square += '<div class="square"><div id=ny-cell-' + i + ' class="ny-cell ny-pink"></div></div>';
    }
    $('.ny-game-box').append(square);
};
addSquares(660);

// Button colors
var lmbColor = 'ny-white';
var rmbColor = 'ny-pink';

// Change color of square
// - when you drag your mouse
$(".square").mouseover(function(){
    if(!isDown) {
        return false;
    } else if(isDown == 'rmb') {
        $('div', this).attr('class', 'ny-cell').addClass(rmbColor);
    } else if (isDown == 'lmb') {
        $('div', this).attr('class', 'ny-cell').addClass(lmbColor);
    }
});
// - when you click your mouse
$(".square").on("mousedown",function(e){
    if( e.button == 2 ) {
      $('div', this).attr('class', 'ny-cell').addClass(rmbColor);
    } else {
      $('div', this).attr('class', 'ny-cell').addClass(lmbColor);
    }
});
// - start from scratch
$('.ny-refresh').click(function() {
    $('.square div').attr('class', 'ny-cell').addClass('ny-pink');
});