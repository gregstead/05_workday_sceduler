// Cache DOM elements
var timeblockEl = $('#timeblockEl');


// Get timest amp format from moment
var timeStamp = moment();
// Attach it to the #currentDay element
$('#currentDay').text(timeStamp.format('dddd MMMM Do'));

// Hard coded array to iterate through
var TIMES = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

for (i = 0; i < TIMES.length; i++) {

    var TIMESindex = TIMES[i];
    var bgColor = '';

    // create a moment.js object for each hour
    var timeIndexObject = moment(timeStamp.format('YYYY-MM-DD') + ' ' + TIMESindex);

    //// Alternate background color

    // if it is now, bg-danger (red)
    if (timeIndexObject.isSame(timeStamp, 'hour')) {
        bgColor = 'bg-danger';
    }
    // ... if it is before now, bg-dark
    else if (timeIndexObject.isBefore(timeStamp)) {
        bgColor = 'bg-dark text-white-50';
    }
    // ... otherwise, bg-success (green)
    else {
        bgColor = 'bg-success text-white'
    }

    // Make a new row div (bootstrap)
    var $row = $('<div>');
    $row.attr('class', 'row height-75 mt-2');

    //// Make 3 column divs (bootstrap)
    // Hour column
    var $col1 = $('<div>');
    $col1.attr('class', 'col col-2' + " text-dark bg-light border-light border-top border-bottom");
    $col1.text(TIMESindex);

    // Event column
    // create column
    var $col2 = $('<div>');
    // create input
    var $input = $('<input>');
    // Set style class elements for column
    $col2.attr('class', 'col col-8 ' + bgColor);
    // Initially hide text area
    $input.attr('type', 'hidden');
    // Append input to column and start click function...
    $col2.append($input).on('click', function (event) {
        // ... Set the input element as a jquery object
        var $targetInput = $($(event.target).children()[0]);
        // ... if input is hidden
        if($targetInput.attr('type') == 'hidden'){
            // ... show it 
            $targetInput.attr('type','text')
        } else {
            // ... else hide it
            $targetInput.attr('type', 'hidden');
        };
    });


    // Button col
    // Create column div with Bootstrap style classes
    var $col3 = $('<div>');
    $col3.attr('class', 'col col-2');
    // Create button with Bootstrap style classes and Fontawesome icon
    var $addEventBtn = $('<button>')
    $addEventBtn.attr('class', 'btn btn-info w-100 h-100')
        .html('<i class="far fa-calendar-plus"></i>')
        .click(function(event) {
            console.log($(':input'));
        });


    // Add button to column
    $col3.append($addEventBtn);

    // append button to row
    $row.append($col1, $col2, $col3);

    // append row to timeblockEl
    $('#timeblockEl').append($row);

}