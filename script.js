// Cache DOM elements
var timeblockEl = $('#timeblockEl');


// Get timest amp format from moment
var timeStamp = moment();
// Attach it to the #currentDay element
$('#currentDay').text(timeStamp.format('dddd MMMM Do'));

var TIMES = function() {

    return ['06','07','08','09','10','11','12','13','14','15','16','17','18','19','20'];
};

for (i=0 ; i < TIMES().length; i++) {

    var TIMESindex = TIMES()[i];
    var bgColor = '';

    // create a time object for each hour
    var timeIndexObject = moment(timeStamp.format('YYYY-MM-DD') + ' ' + TIMESindex);

    //// Alternate background color

    // if it is now, bg-danger
    if (timeIndexObject.isSame(timeStamp, 'hour')) {
        bgColor = 'bg-danger';
    } 
    // if it is before now, bg-dark
    else if (timeIndexObject.isBefore(timeStamp)){
        bgColor = 'bg-dark text-white-50';
    }
    // otherwise, bg-success
    else {
        bgColor = 'bg-success text-white'
    }


    // Make a new row div (bootstrap)
    var $row = $('<div>');
    $row.attr('class','row height-75 mt-2');

    //// Make 3 column divs (bootstrap)
    // Hour col
    var $col1 =  $('<div>');
    $col1.attr('class','col col-2' + " text-dark bg-light border-light border-top border-bottom");
    $col1.text(TIMESindex);

    // Event col
    var $col2 =  $('<div>');
    $col2.attr('class','col col-8 ' + bgColor);
    $col2.text('Hello')

    // Button col
    var $col3 =  $('<div>');
    $col3.attr('class','col col-2');
    var $addEventBtn = $('<button>')
    $addEventBtn.attr('class','btn btn-info w-100 h-100').html('<i class="far fa-calendar-plus"></i>');
    $col3.append($addEventBtn);

    // append columns to row
    $row.append($col1, $col2, $col3);

    // append row to timeblockEl
    $('#timeblockEl').append($row);

}