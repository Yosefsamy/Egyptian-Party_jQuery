                                    "use strict"

//* Document is Ready *//
$(function(){
    $(".sk-circle").slideUp(300,function(){
        $("#loadingScreen").fadeOut(300,function(){
            $("#loadingScreen").remove()
            $("body").css({overflow:'auto'})
        });
    });

})


//^ Make Scroll Smooth ^//

//* Any Anchor has attribute href start with '#'
$("a[href^='#']").click(function(event){
    let aHref=$(event.target).attr('href')
    let sectionOffset=$(aHref).offset().top
    // console.log(sectionOffset);
    $("html,body").animate({'scrollTop':sectionOffset} , 1900)

})

                            //^ ----- Home Section ----- ^//

let sidebar=$("#leftMenu");
let open =$("#openIcon")
let width= sidebar.innerWidth();

sidebar.css({'left': -width})
open.css({'left' :20});

//~ SlideBar ~/

open.click(function(){
    sidebar.animate({'left' :0},430);
    open.animate({'left' :width+20},430);
})

$("#closeBtn").click(function(){

    sidebar.animate({'left': -width},430)
    open.animate({'left' :20},430);
})

                         //^ ----- Home Section ----- ^//


                         //^ ----- Duration Section ----- ^//

$("#duration h3").click(function(eventInfo){
    //* A variable that holds <p> *//
    let target = $(eventInfo.target).next();
    console.log(target);
    $("#duration p").not(target).slideUp(500);
    $(target).slideToggle(500);
})

                         //^ ----- Duration Section ----- ^//


                         //^ ----- Details Section ----- ^//

let differTime;
let countDown=new Date("2024-1-1").getTime();
// ! == getTime() method returns the number of milliseconds since January 1, 1970 ! == //

//& Declare calcCountDown() Function &//
function calcCountDown(){

    //* Time Now *//
    let now=new Date().getTime();

    // * Difference Between the future date and now * //
    differTime=countDown-now;

    // * Time calculations for days, hours, minutes and seconds * //
    let days = Math.floor(differTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((differTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((differTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((differTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days + " D";
    document.getElementById("hours").innerHTML = hours + " h";
    document.getElementById("minutes").innerHTML = minutes + " m";
    document.getElementById("seconds").innerHTML = seconds + " s";
}

//& Declare setInterval &//
setInterval(function(){

    //* If If the count down is over
    if (differTime < 0) {
        clearInterval();
        $(".row").css({'display':'none'})
        $("#finish").css({'display':'block'})

      }
      else{
        calcCountDown();
      }

},1000)

                         //^ ----- Details Section ----- ^//


                         //^ ----- Contact Section ----- ^//

let textArea = document.querySelector("#contact textarea");
let element = document.querySelector("#contact #change")
let maxLength = document.querySelector("#contact textarea").maxLength;
// console.log(maxLength);
textArea.addEventListener("input",function(){
    // console.log(textArea.value.length);
    let currentLength = textArea.value.length;
    element.innerHTML = maxLength - currentLength;
})

                        //^ ----- Contact Section ----- ^//



