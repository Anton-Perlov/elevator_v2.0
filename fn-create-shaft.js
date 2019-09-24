function createShaft(){
    
    
    let elevatorShaft = $("#elevatorShaft")[0];
    $(elevatorShaft).html("<div class='theElevator'></div>").css({
        "min-width": FLOOR_HEIGHT * 0.75 + "px", 
        "max-width": FLOOR_HEIGHT * 0.75 + "px"
    });;
    
    //
    let elevator = $(".theElevator")[0];
    $(elevator).height(FLOOR_HEIGHT - 2).width((FLOOR_HEIGHT * 0.75) - 4);

    // Set elevator to last floor
    elevator.floor = FLOORS;
    elevator.style.top = (FLOORS - 1) + "px";
    
    moveTo(1); // Move lift to first floor
    
}