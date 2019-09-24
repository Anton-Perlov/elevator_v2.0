"use strict";

let FLOORS = 12;
let USERS_COUNT = 5;
const FLOOR_HEIGHT = 50;
const MOOVE_SPEED = 5;
const USER_MOOVE_SPEED = 15;
const CHANCE = 15;

$(document).ready(function(){
    
    reInit();
    changeSettings();
    
    $('[data-toggle="tooltip"]').tooltip();
    
});
    
function reInit(){

    createFloors();
    createShaft();
    createButtons();
    createUsers();
    userMove();

}