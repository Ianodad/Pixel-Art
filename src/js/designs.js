// Select color input

// Select size input
var row, column, color;
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $('#sizePicker').on('click', function(event) {
        event.preventDefault();
        row = $('#inputWeight').val();
        column = $('#inputHeight').val();
        makeGrid(column, row);
        // console.log(row + " " + column);
    });
});

function makeGrid(height, weight) {
    $('tr').remove();

    // Your code goes here!

    for (var x = 1; x <= height; x++) {
        $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
        for (var y = 1; y <= weight; y++) {
            $('#table' + x).append('<td></td>');
        }
    }

    // pick color from picker

    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}