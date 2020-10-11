// Cache DOM elements
var timeblockEl = $('#timeblockEl');


// Get timestamp format from moment
var timeStamp = moment().format('dddd MMMM Do');
// Attach it to the #currentDay element
$('#currentDay').text(timeStamp);

var TIMES = [ '6am','7am','8am','9am','10am', '11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm'];

for (i=0 ; i < TIMES.length; i++) {

    var bgColor;

    // Alternate background color
    if (i%2 == 0) {
        bgColor = 'bg-light text-dark'
    } else {
        bgColor = 'bg-secondary text-light'
    }

    // Make a new row div (bootstrap)
    var $row = $('<div>');
    $row.attr('class','row height-75 mt-2 rounded-right ' + bgColor);

    // Make 3 column divs (bootstrap)
    var $col1 =  $('<div>');
    $col1.attr('class','col col-2' + " text-dark bg-light  border-light border-top border-bottom");
    $col1.text(TIMES[i]);

    var $col2 =  $('<div>');
    $col2.attr('class','col col-8 border-top border-bottom');
    $col2.text('Hello')

    var $col3 =  $('<div>');
    $col3.attr('class','col col-2 border-top border-bottom border-right rounded-right rounded-lg');
    var $addEventBtn = $('<button>')
    $addEventBtn.attr('class','btn-info').text('B');
    $col3.append($addEventBtn);

    // append columns to row
    $row.append($col1, $col2, $col3);

    // append row to timeblockEl
    $('#timeblockEl').append($row);

}