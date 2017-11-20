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
        square += '<div class="ny-square"><div id=ny-cell-' + i + ' class="ny-cell ny-pink"></div></div>';
    }
    $('.ny-game-box').append(square);
};
addSquares(660);

// Button colors
var lmbColor = 'ny-white';
var rmbColor = 'ny-pink';

// Change color of lmb and rmb
$(".ny-color-btn").on("mousedown",function(e){
    var pickedColor = $(this).html();
    if( e.button == 2 ) {
      rmbColor = pickedColor;
      $('.ny-rmb').attr('class', 'ny-menu-item ny-rmb').addClass(pickedColor);
    } else {
      lmbColor = pickedColor;
      $('.ny-lmb').attr('class', 'ny-menu-item ny-lmb').addClass(pickedColor);
    }
});

// Change color of square
// - when you drag your mouse
$(".ny-square").mouseover(function(){
    if(!isDown) {
        return false;
    } else if(isDown == 'rmb') {
        $('div', this).attr('class', 'ny-cell').addClass(rmbColor);
    } else if (isDown == 'lmb') {
        $('div', this).attr('class', 'ny-cell').addClass(lmbColor);
    }
});
// - when you click your mouse
$(".ny-square").on("mousedown",function(e){
    if( e.button == 2 ) {
      $('div', this).attr('class', 'ny-cell').addClass(rmbColor);
    } else {
      $('div', this).attr('class', 'ny-cell').addClass(lmbColor);
    }
});
// - start from scratch
$('.ny-refresh').click(function() {
    $('.ny-square div').attr('class', 'ny-cell').addClass('ny-pink');
});