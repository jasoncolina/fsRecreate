//Variable declarations
var h1 = document.querySelector("#story h1");
var h4 = document.querySelector(".jumbotron:first-of-type h1")
var logoLarge = document.querySelector(".navbar-brand img:first-child");
var logoSmall = document.querySelector(".navbar-brand img:last-child");
var quotes = document.querySelector("#quotes");
var width = $(window).width();


$( document ).ready(function() {
    logoToggle(width);
    storyToggle(width);
    headerToggle(width);
    $(window).resize(function(){
        var newWidth = $(window).width();
        logoToggle(newWidth);
        storyToggle(newWidth);
        headerToggle(newWidth);
    });
});

// Toggles the logo after certain breakpoints
function logoToggle(width){
    if(width >= 768){
        logoSmall.classList.add("notVisible");
        logoLarge.classList.remove("notVisible");
    }
    else{
        logoSmall.classList.remove("notVisible");
        logoLarge.classList.add("notVisible");
    }
}

//Toggles the visibility at certain breakpoints
function storyToggle(width){
    if(width >= 992){
        h1.classList.add("h1");
        h1.classList.remove("h2");
        quotes.classList.remove("notVisible")
    }
    else{
        h1.classList.add("h2");
        h1.classList.remove("h1");
        quotes.classList.add("notVisible")
    }
}

//Toggles h4 and h2 on jumbotron h1
function headerToggle(width){
    if(width <= 576){
        h4.classList.remove("h2");
        h4.classList.add("h4");
    }
    else{
        h4.classList.remove("h4");
        h4.classList.add("h2");
    }
}


