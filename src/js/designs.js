////////////
//BACK END//
////////////

// grid function that takes in two agruments height and width
function makeGrid(height, width) {
    $('tr').remove(); // refresh the Dom if there was current tables

    // Your code goes here!

    //use nested loop to generate a grid
    for (var x = 1; x <= height; x++) {
        $('#pixelCanvas').append('<tr id=table' + x + '></tr>');
        for (var y = 1; y <= width; y++) {
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
// function to geneate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
////////////////
// FRONT END //
///////////////
var row, column, color;
// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $('#sizePicker').on('click', function(event) {
        event.preventDefault();
        row = $('#inputWidth').val(); // get values of width sets values to row variable
        column = $('#inputHeight').val(); // get values of height sets value to height variable
        makeGrid(column, row); // pass the variable into the makegrid function
        // console.log(row + " " + column);

    });
    $(".start").click(function() {
        $(".main").show();
        $(".start").hide();
    });
});