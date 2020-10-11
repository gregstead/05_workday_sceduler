// Cache DOM elements
var timeblockEl = $('#timeblockEl');


// Get timestamp format from moment
var timeStamp = moment().format('dddd MMMM Do');
// Attach it to the #currentDay element
$('#currentDay').text(timeStamp);

var $row = $('<div>');
$row.attr('class','row justify-content-center mx-5');

for (i=0 ; i < 10; i++) {

    var $col1 =  $('<div>');
    $col1.attr('class','col col-2 h-100 bg-dark');
    $col1.text('' + i + 'am');

    var $col2 =  $('<div>');
    $col2.attr('class','col col-8 h-100');
    $col2.text('Hello')

    var $col3 =  $('<div>');
    $col3.attr('class','col col-2 h-100 themed-grid-col');
    $col3.append('<button>').attr('class','btn').text('press me');

    $row.append($col1, $col2, $col3);

//     <div class="row">
//     <div class="col-1">poop
//     </div>
//     <div class="col-10">pooooop
//     </div>
//     <div class="col-1">poop
//     </div>
// </div>

}

$('#timeblockEl').append($row);