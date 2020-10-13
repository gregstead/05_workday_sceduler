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

    // **** Alternate background color *****

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
    var $row = $('<div>').attr('class', 'row height-75 mt-1');

    // Make an input group 
    var $inputGroup= $('<div>').attr('class', 'input-group');
    // Hour identifier
    var $inputPrepend = $('<div>').attr('class', 'col col-2 text-dark bg-light border-dark border-top').text(timeIndexObject.format('h a'));
    // Input field
    var $inputText = $('<input>').attr('class', 'form-control h-100 ' + bgColor);
    // Button
    var $inputAppend = $('<div>').attr('class','input-group-append').append(
            $('<button>').attr('class','btn btn-info').attr('type','submit').attr('id','button-addon2').html('<i class="far fa-calendar-plus"></i>')
        );

    $inputGroup.prepend($inputPrepend).append($inputText, $inputAppend).on('click', function (event) {
        // If button is clicked, log the input value
        if (event.target.matches('button')) {
            console.log($($(event.target).parent().siblings()[1]).val());
            // Push the value to local storage
        } else if (event.target.matches('i')) {
            console.log($($(event.target).parent().parent().siblings()[1]).val());
        }
    });

    // append row to timeblockEl
    $('#timeblockEl').append($row.append($inputGroup));

}