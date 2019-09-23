"use strict";

let FLOORS = 12;
let USERS_COUNT = 5;
const FLOOR_HEIGHT = 50;
const MOOVE_SPEED = 5;
const USER_MOOVE_SPEED = 15;
const CHANCE = 50;

$(document).ready(function(){
    
    reInit();

    // Set floor selector default value and make it changeable. 
    let floorsSelector = $("#floors-number-input")[0];
    $(floorsSelector).val(FLOORS).on("change", function(){ 
        FLOORS = $(floorsSelector).val();
        reInit();
    });

    $('[data-toggle="tooltip"]').tooltip();
});
    
function reInit(){

    createFloors();
    createShaft();
    createButtons();
    createUsers();
    userMove();
}