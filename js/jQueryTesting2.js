let fadeToggleCheck = true;
let flippingFun, colorFun;

var babybaby = new Audio("songs/babybaby.mp3");
babybaby.volume = .35;
babybaby.loop = true;

$(document).ready(function(){
    $('#partyPara').hide();

    $('#btnFadeTog').click(function(){
        $('#sunset').fadeToggle(1500, function(){
            if(fadeToggleCheck){
                $('#btnFadeTog').text('Make it Reappear');
                $('#sunsetPara').text('Oh no, what happened to the sunset? :(');
                fadeToggleCheck = false;
            }
            else{
                $('#btnFadeTog').text('Make it Disappear');
                $('#sunsetPara').text('Oh good, the sunset is back :)');
                fadeToggleCheck = true;
            }

        });
    });

    $('#btnParty').click(function(){
        $('#kirby').attr('src','images/kirby2.png');
        $('#partyContainer').css('background-color','pink');
        $('#partyPara').show();
        babybaby.play();
        animateKirby();
        animatePara();
        flipKirby();
    });

    $('#btnStop').click(function(){
        $('#partyContainer').css('background-color','skyblue');
        $('#partyPara').hide();
        babybaby.pause();
        babybaby.currentTime = 0;
        stopKirby();
    });
});

function animateKirby(){
    var kirbyContainer = $('#kirbyContainer');
    kirbyContainer.animate({left:200},2750).animate({left:-200},2750, animateKirby);
}

function animatePara(){
    var partyPara = $('#partyPara');
    partyPara.animate({left:120, top:-100},500)
    .animate({left:0, top:-180},500)
    .animate({left:-120, top:-100},500)
    .animate({left:0, top: 0},500, animatePara);
}

function flipKirby(){
    var kirby = $('#kirby');
    flippingFun = setInterval(function(){kirby.toggleClass('flipped')}, 500);
}

function stopKirby(){
    var kirbyContainer = $('#kirbyContainer');
    var kirby = $('#kirby');
    kirby.attr('src','images/kirby1.png');
    kirby.removeClass('flipped');
    kirbyContainer.stop(true);
    kirbyContainer.css('left','0');
    clearInterval(flippingFun);
    $('#partyPara').stop(true);
    $('#partyPara').css('left','0');
    $('#partyPara').css('top','0');
}