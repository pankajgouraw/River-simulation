// $(document).ready(function(){


function playaudio(){

 $('.AudioContainer').html("<iframe src='audio/welldone.mp3' allow='autoplay' style='display:none' id='iframeAudio' ></iframe>");

};


// instruction text
var ins = "Identify and mark three important cities that fall on the passage of Ganga river";
var ins2 = "Instruction: Drop the blue location pin on the correct place based on the given information.";
var ins3 = "City 1: It is the first place down the mountain that welcome the holy river Ganga.";

// To make responsive  
var new_width = $('.container').width();
$('footer').width(new_width);
$('header').width(new_width);
$(window).resize(function() {
    var new_width = $('.container').width();
    $('footer').width(new_width);
    $('header').width(new_width);
});

console.log("widht :"+new_width);

// Page indexing // Globle variables
var lastQuest = 0;
var index = 1;
var hintCount = 0;
var riverContainer = $('.riverContainer');
var next = $('.next');
var prev = $('.prev');
var next2 = $('#next2');
var prev2 = $('#prev2');
var iInfo = $('.i-information');
var mapImgContainer = $('.mapImgContainer');
var mapImg = $('.mapImg');
var instruction = $('.instruction');
var instruction2 = $('.instruction2');
var instructionp = $('.instruction p');
var pin = $('#pin');
var dropPin = $('#dropPin');
var nextComplete = $('.nextComplete');
var prevComplete = $('.prevComplete');
var wellDone = $('.wellDone');
var cities = $('.cities');
var rightAns = $('.rightAns');
var error = $('.error');
var suggestion = $("#suggestion");
var useHint = $('.useHint');
var Hint1 = $('.Hint1');
var Hint2 = $('.Hint2');
var Hint3 = $('.Hint3');
var Hint4 = $('.Hint4');
var showHint = $('#showHint');
var suggestionInformation = $('.suggestion-information');

var outside = 0;
//drag start
pin.draggable({
    drag: function(event, ui) {
        $(this)
            .addClass("dragMe")
            .draggable({
                disabled: true
            });
        $('.comp').fadeOut();
        console.log("dragging start");
    },
    stop: function(event, ui) {
        // setTimeout(function(){ 
        if (dropPin.hasClass('ui-state-highlight')) {
            console.log("right place");
            suggestion.hide();
            playaudio();


        } else {
            error.fadeIn(1000);
            error.addClass('animated shake');
            setTimeout(function() {
                suggestion.fadeIn(1000);
                suggestionInformation.fadeIn(1000);
                suggestionInformation.addClass('animated heartBeat');
            }, 1000);
            console.log("wrong place");
        }
        // }, 2000);

    }
});

// drop element
dropPin.droppable({
    accept: "#pin",
    drop: function(event, ui) {
        $(this)
            .addClass("ui-state-highlight");
        wellDone.fadeIn().addClass("animated heartBeat");
        setTimeout(function() {
            wellDone.fadeOut().removeClass("animated heartBeat");;
            cities.fadeIn(3000);
            pin.fadeOut(500);
            rightAns.show();
        }, 3000);
        console.log("droped..");

        // $(ui.draggable).clone().appendTo($(this));
    }

});

// next Page
next.click(function() {

   

    if (rightAns.css('display') === 'block') {
        window.location.href = 'index.html';
        return false;
    }

    if (index === 6 && rightAns.css('display') === 'none') {
        nextComplete.show().fadeOut(2000);
        return false;
    }


    // map with river 
    if (index == 0) {
        riverContainer.fadeIn();
        iInfo.fadeOut();
        mapImg.hide();
        mapImgContainer.html('<img src="img/indiaMap2.png" class="mapImg" alt="">');
    }

    //map with river flow and name of cities
    if (index == 1) {
        iInfo.fadeOut();

        mapImgContainer.html('<img src="img/indiaMap3.png" class="mapImg" alt="">');
    }

    //map with river flow and name of cities show the instruction
    if (index == 2) {
        // instructionp.html(document.createTextNode(ins2));

        mapImgContainer.html('<img src="img/indiaMap4.png" class="mapImg" alt="">');
        // instruction.fadeIn(1000);
        instruction.fadeIn(1000);
        instruction.addClass('animated zoomIn');
        pin.fadeIn(2000);

    }

    if (index == 3) {
        instruction.hide();
        instruction2.show();
        instruction2.addClass('animated zoomIn');
        // instructionp.html(document.createTextNode(ins3));
        pin.fadeIn(1000);
        index = 4;
        // console.log("hello <woe></woe>");
    }

    if (index == 4) {
        instruction.hide();

        // instructionp2.html(document.createTextNode(ins3));
    }

    if (index == 5) {
        $('.quest').css({
            'opacity': '1'
        });
        $('.quest').addClass('animated fadeInRight');
        instruction2.fadeOut(1000);


                if(new_width >=720){
              $('.mapImg').animate({
                    "width": "249%",
                    'margin-left': "-442px",
                    'margin-top': "-355px"
                }, 1000);
        }

        if(new_width < 720 && new_width > 564){
             $('.mapImg').animate({
                 "width": "242%",
                    'margin-left': "-408px",
                    'margin-top': "-334px"
           
        }, 1000);

             // dropPin.css({
             //        'height': '19px',
             //        'width': '18px',
             //        'top': '96px',
             //        'left': '43px'
             // });
        }

         if(new_width < 564){
            $('.mapImg').animate({
                 "width": "242%",
            'margin-left': "-239px",
            'margin-top': "-148px"
                   
                }, 1000);

        }



      
    }

    if (index == 6 && pin.hasClass("dragMe")) {
        wellDone.fadeOut();
        // cities.fadeIn();
    }


    if (index == 6 && !pin.hasClass("dragMe")) {
        console.log("check the class available or not");
        nextComplete.fadeIn();
        instruction.fadeOut();
        index = 6;
    } else {
        index++;
    }

    if (pin.css('display') === 'block') {
        pin.addClass('animated jello').css({
            'animation-iteration-count': 2
        });
    } else {

    }


    console.log(index);

});

// previous button

prev.click(function() {
goBack();

});



function goBack() {

     if (rightAns.css('display') === 'block') {
        window.location.href = 'index.html';
        return false;
    }

    if (suggestion.css('display') === 'none') {
        console.log('it hide');
    } else {
        index = 6;
    }

    $('hintBox').hide();

    if (cities.css('display') === 'block') {
        prevComplete.show().fadeOut(2000);
        return false;
    }

    // back to blank map
    if (index == 1) {
        // riverContainer.fadeOut();
        iInfo.fadeIn();
        // mapImgContainer.html('<img src="img/indiaMap.png" class="mapImg" alt="">');

    }

    // map with river 
    if (index == 2) {
        iInfo.fadeIn();
        mapImgContainer.html('<img src="img/indiaMap2.png" class="mapImg" alt="">');
    }

    //map with river flow and name of cities 
    if (index == 3) {
        mapImgContainer.html('<img src="img/indiaMap3.png" class="mapImg" alt="">');
        instruction.fadeOut();
        // instructionp.html(document.createTextNode(ins));
        pin.hide();

    }

    //map with river flow and name of cities 
    if (index == 4) {
        pin.fadeOut(1000);
        // instruction.addClass('hello');
        // instructionp.html(document.createTextNode(ins));
    }

    if (index == 5) {
        $('.quest').css({'opacity':0}).removeClass("animated fadeInRight");
        index = 4;
        instruction2.fadeOut(1000);
        instruction.fadeIn(1000);
        // console.log("index <5></5>");
        // instructionp.html(document.createTextNode(ins2));
    }

    if (index == 6) {
        useHint.fadeOut()
        // instruction.fadeIn();
        if (suggestion.css('display') === 'none') {
            console.log('index 6 it hide');
            $('.mapImg').animate({
                "width": "100%",
                'margin-left': "0px",
                'margin-top': "0px"
            }, 1000);
        } else {
            instruction.hide();
        }
        rightAns.fadeOut(1000);
        error.fadeOut();

        if (hintCount >= 0) {
            // suggestion.fadeOut();
             suggestionInformation.hide();
        }



        // $('.cities li').css({
        //     'background': '',
        //     'color': '#000'
        // });


        dropPin.removeClass('ui-state-highlight');

        // dropPin.css({
        //     "box-shadow": "none",
        //     "border": "none"
        // });

    }

    if (index == 6 && !pin.hasClass("dragMe")) {
        // instruction.fadeIn();
        if (suggestion.css('display') === 'none') {
            instruction2.fadeIn();
        } else {
            instruction2.hide();
        }
        pin.removeClass('dragMe');
        pin.removeAttr("style");
        pin.css({
            'display': 'inline'
        });

        console.log("remove the class drag me");

        pin.draggable("destroy");
        //drag start
        pin.draggable({
            drag: function(event, ui) {
                $(this)
                    .addClass("dragMe")
                    .draggable({
                        disabled: true
                    });
                $('.comp').fadeOut();
                console.log("dragging start fromm else condition");
            },
            stop: function(event, ui) {
                // setTimeout(function(){ 
                if (dropPin.hasClass('ui-state-highlight')) {
                    suggestion.hide();
playaudio();

                    console.log("right place");
                } else {

                    console.log("wrong place");
                    error.fadeIn(1000);
                    error.addClass('animated shake');
                    if (lastQuest == 0) {
                        setTimeout(function() {
                            suggestion.fadeIn(1000);
                            suggestionInformation.fadeIn(1000);
                            suggestionInformation.addClass('animated heartBeat');
                        }, 1000);
                    }
                }
                // }, 2000);

            }
        });

    }
    // else{

    //     console.log("index!=6 "); 
    // } 

    if (index == 6 && pin.hasClass("dragMe")) {
        // instruction2.fadeIn();
        rightAns.hide();
        pin.removeClass('dragMe');
        pin.removeAttr("style");
        pin.css({
            'display': 'inline'
        });

        console.log("remove the class drag me");

        pin.draggable("destroy");
        //drag start
        pin.draggable({
            drag: function(event, ui) {
                $(this)
                    .addClass("dragMe")
                    .draggable({
                        disabled: true
                    });
                $('.comp').fadeOut();
                console.log("dragging start fromm else condition");
            },
            stop: function(event, ui) {
                if (dropPin.hasClass('ui-state-highlight')) {
                    console.log("right place");
playaudio();

                    // suggestion.hide();

                } else {
                    // console.log("wrong place");
                    error.addClass('animated shake');
                    error.fadeIn(1000);
                    if (lastQuest == 0) {
                        setTimeout(function() {
                            suggestion.fadeIn(1000);
                            suggestionInformation.fadeIn(1000);
                            suggestionInformation.addClass('animated heartBeat');
                        }, 1000);
                    }

                    if (lastQuest == 1) {
                        setTimeout(function() {
                            error.fadeOut(1000);
                            pin.fadeOut(1000);
                            cities.fadeIn(4000);
                            rightAns.fadeIn(2000);
                            // rightAns.fadeIn(2000);
                            // dropPin.css({
                            //      "box-shadow": "0px 0px 9px #000",
                            //      "border": "2px solid #03A9F4"
                            //  });
                        }, 2000);
                    }


                }

            }
        });



    }


    if (index > 1) {
        index--;
    } else {
        index = 1;
    }

    if (suggestion.css('display') === 'none') {
        console.log('it hide');
    } else {
        instruction.hide();
    }

    console.log("Index :" + index);
    console.log("hint count:" + hintCount);
}

// prev function end

// cities
$('.cities li').click(function() {
    let x = $(this);
    x.css({
        'color': '#fff',
        'background': 'red'
    });
    if (x.hasClass('Active')) {
        x.css({
            'color': '#fff',
            'background': 'green'
        });
        cities.fadeOut(2000);

        rightAns.fadeIn(1000);
        $('.rightAns p').fadeIn(1500);
        $('.rightAns .p2').fadeOut(100);

        // pin.hide(1500);
        // dropPin.css({
        //     "box-shadow": "0px 0px 9px #000",
        //     "border": "2px solid #03A9F4"
        // });
    }
});


//suggestioin
$('#suggestion').click(function() {
    error.hide();
    useHint.fadeIn(1000);
    useHint.addClass('animated bounceIn');
    suggestionInformation.hide();

});

$('.Hintfunction').click(function() {

    $('.hintBox').hide();
});

showHint.click(function() {
    $('.hintBox').hide();

    if (hintCount == 0) {
        useHint.fadeOut();
        Hint1.fadeIn(1000);
        $('.suggImg').hide();
        $('.suggImg2').show();
    }


    if (hintCount == 1) {
        useHint.fadeOut();
        Hint2.fadeIn(1000);
        $('.suggImg').hide();
        $('.suggImg1').show();
    }


    if (hintCount == 2) {
        useHint.fadeOut();
        Hint3.fadeIn(1000);
        $('.suggImg').hide();
        $('.suggImglast').show();
    }



    hintCount++;
    var count = 3 - hintCount;

    if (hintCount == 3) {

        mapImgContainer.html('<img src="img/mapwithdots.png" class="mapImg" alt="">');
       
        if(new_width < 991 && new_width >564){
             $('.mapImg').css({
                    "width": "242%",
                    'margin-left': "-408px",
                    'margin-top': "-334px"
        });
        }
        if(new_width < 564 ){
             $('.mapImg').css({
            "width": "242%",
            'margin-left': "-239px",
            'margin-top': "-148px"
        });

        }

        if(new_width >991){
           $('.mapImg').css({
            "width": "249%",
            'margin-left': "-442px",
            'margin-top': "-355px"
        });  
        }

    }

    $('#remainHint').html(count);

    console.log("show hint:" + hintCount);
    console.log("count:" + count);
});




// last option

$('.lastOption').click(function() {
    // console.log("last option");
    // suggestion.hide();
    $('.suggImg').hide();
    $('.suggImglast').show();
    lastQuest++;
    console.log(lastQuest);
});


// hover on information
$('#information').hover(function() {
    iInfo.show();
}, function() {
    iInfo.hide();
});
// });


setTimeout(function(){
   iInfo.fadeOut(1000);
},6000);


$('.mapImgContainer').click(function(){
    if(error.css('display')=='block' || useHint.css('display')=='block'){
      goBack();
    }else{
        // alert("nothing to do with this");
    }



});