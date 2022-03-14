"use strict";


/*window.onload = function() {
    alert("The page has finished loading!");
}*/

/*$(document).ready(function () {
    alert( 'The DOM has finished loading!' );
});*/

// ID Selectors
// Remember to use the selectors.. spent 10 min wondering why ('title-2') didnt work when it should have been ('#title-2')
/*$(document).ready(function () {
    var contents = $('#title').html();
    alert(contents);
    var contents = $('#title-2').html();
    alert(contents);
});*/

// Class Selectors
/*$('.codeup').css('border', '1px solid red');*/

// Element Selectors
/*
$('li').css('font-size', '20px');
$('h1, p, li').css('color', 'red');
$(document).ready(function () {
    var contents = $('title').html();
    alert(contents);
})*/

// Moust Event Exercise
$('#title').click(function () {
    $(this).css('background-color', '#F00');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(function () {
    $(this).css('color', '#F00');
});