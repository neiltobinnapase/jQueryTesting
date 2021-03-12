$(document).ready(function(){
    $('#paraHold').text('This is content entered using jQuery on empty <p> element');
    $('#contentContainer').append('<p>This is content entered using JQuery on container div with the append function</p>');

    //setting variable for contentContainer DOM object for easy reference
    let content = $('#contentContainer');
    content.append('<p class="appendedPara">The header below was appended using jQuery reference of h1 element in index.html</p>');
    
    $('#headingConst').appendTo('#contentContainer');

    //Added button click event, when clicked it will prepend the header element back to the beginning of 
    //contentContainer div, hide the button that restores the header, and update the appended text by referencing
    //its added class
    $('#moveHeaderBtn').click(function(){
        $('#headingConst').prependTo('#contentContainer');
        $('#moveHeaderBtn').hide();
        $('.appendedPara').text('The header has moved back to its original position in index.html');
    });

    //Adding paragraph and unformatted list to content div
    //Adding buttons createListBtn and createTableBtn, hiding Table button initially
    content.append('<p class="createListPara">Use the button below to create a List of Names using jQuery</p>');
    content.append('<ul id="list"></ul>');
    content.append('<button id="createListBtn">Create a List</button>');

    let arrlist = ['Item 1','Item 2','Item 3','Item 4'];

    $('ul#list').before('<button id="createTableBtn">Create a Table</button>');
    $('#createTableBtn').hide();

    //Click CreateListButton, go through defined array arrlist to create li
    //elements and append to the unformatted list, hide button, and update paragraph with
    //new text and display Table button
    $('#createListBtn').click(function(){
        $.each(arrlist, function(i, value){
            $('ul#list').append('<li>'+ value +'</li>');
        });
        $('#createListBtn').hide();
        $('.createListPara').text('List has been created, use the button below to create a table');
        $('#createTableBtn').show();
    });    

    //Click Create Table button, creates new array based on unformatted list on DOM
    //that was made from the Create List button function. Creates table and table row elements
    //and appends to content container. Goes through newarr and appends table data elements to
    //newly added table row, detaches unformatted list and hides button. Updates paragraph
    $('#createTableBtn').click(function(){
        let newarr = $('ul#list li').toArray();
        content.append('<table border = "3"><tr id="tableRow"></tr></table>');

        $.each(newarr, function(i, value){
            $('#tableRow').append('<td>'+value.innerHTML+'</td>')
        });

        $('ul#list').detach();
        $('#createTableBtn').hide();
        $('.createListPara').text('List has been removed and table has been created'); 
    });


});

/*Examples of selectors that can be used, should match CSS syntax:
$('p').hide(); -- Element from HTML
$('p#id').hide(); -- Element with ID from HTML
$('p.class').hide(); -- Element with Class from HTML
$('#id').hide(); -- ID from HTML
$('.class').hide(); -- Class from HTML
$('p span').hide(); -- Child element(span) of parent(p) from HTML
$('ul#list li:first').hide(); -- Of selected elements (li items from ul id "list"), obtains first record
    -- can use :first, :last, :even, :odd, :nth-child(Xn)
$(':text').hide(); -- Type from HTML (usually seen with input elements)
$('[href]').hide(); -- href from HTML (seen with a/link elements)
$('a[href="youtube.com"]').hide() -- specific href value for a element from HTML
*/