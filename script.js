

// Get timestamp format from moment
var timeStamp = moment();
// Attach it to the #currentDay element
$('#currentDay').text(timeStamp.format('dddd MMMM Do'));

// Local storage 
var localStorageObj;

if (localStorage.getItem(timeStamp.format('YYYY-MM-d'))) {
    localStorageObj = JSON.parse(localStorage.getItem(timeStamp.format('YYYY-MM-d')));
} else {
    localStorageObj = {};
}


// Button click handler
$(document).on('click', function (event) {
    // Delegate to buttons => if(button), else if (fontAwesome icon)
    if (event.target.matches('button')) {
        // Assign the text value of the hour column to a variable
        var hourText = $($(event.target).parent().siblings()[0]).text();
        // Assign the input value to a variable
        var userInputText = $($(event.target).parent().siblings()[1]).val();;
        // Store the input text in local storage object
        localStorageObj[[hourText]] = userInputText;
        // Stringify object and 
        localStorage.setItem(timeStamp.format('YYYY-MM-d'), JSON.stringify(localStorageObj));

    } else if (event.target.matches('i')) {
        console.log("helloo");
        // $($(event.target).parent().parent().siblings()[1]).val();
    };
});


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
        bgColor = ' present';
    }
    // ... if it is before now, bg-dark
    else if (timeIndexObject.isBefore(timeStamp)) {
        bgColor = ' past';
    }
    // ... otherwise, bg-success (green)
    else {
        bgColor = ' future';
    }

    // Make a new row div (bootstrap)
    var $row = $('<div>').attr('class', 'row time-block');

    // Make an input group 
    var $inputGroup = $('<div>').attr('class', 'input-group');
    // Hour identifier
    var $inputPrepend = $('<div>').attr('class', 'col col-2 hour').text(timeIndexObject.format('h a'));
    // Input field
    var $inputText = $('<textarea>').attr('class', 'form-control h-100' + bgColor);
    // Button
    var $inputAppend = $('<div>').attr('class', 'input-group-append').append(
        $('<button>').attr('class', 'saveBtn').attr('type', 'submit').attr('id', 'button-addon2').html('<i class="far fa-calendar-plus"></i>')
    );

    // 
    $inputGroup.prepend($inputPrepend).append($inputText, $inputAppend)

    // append row to timeblockEl
    $('#timeblockEl').append($row.append($inputGroup));
};
