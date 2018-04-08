"use strict";

var buttonActive = document.querySelector(".button-active");

function makeButtonActive(button) {
    if(button != buttonActive){
        buttonActive.classList.remove("button-active");
        button.classList.add("button-active");
        buttonActive = button;
    }
}

