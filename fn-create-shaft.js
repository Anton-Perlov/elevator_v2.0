function createShaft(){
    
    
    let elevatorShaft = $("#elevatorShaft")[0];
    $(elevatorShaft).html("<div class='theElevator'></div>").css({
        "min-width": FLOOR_HEIGHT * 0.75 + "px", 
        "max-width": FLOOR_HEIGHT * 0.75 + "px"
    });;
    
    //
    let elevator = $(".theElevator")[0];
    $(elevator).height(FLOOR_HEIGHT - 2).width((FLOOR_HEIGHT * 0.75) - 4);

    // Set elevator to 1-st floor
    elevator.floor = 1;
    elevator.style.top = (FLOORS * FLOOR_HEIGHT) - (FLOOR_HEIGHT * 1) + (FLOORS - 1) + "px";
    
    elevator.move = false;

}