// BACK END //

function makeGrid(height, width) {
    $('tr').remove();
    // Your code goes here!
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr');
        for (var j = 1; j <= width; j++) {
            $('#table' + i).append("<td></td>");
        }
    }

}

// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $('#sizePicker').submit(function(event) {
        event.preventDefault();
        row = $('#inputWeight').val();
        column = $('#inputHeight').val();
        makeGrid(column, row);
        console.log(row, column);
    });
});