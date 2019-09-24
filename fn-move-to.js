
function moveTo(floor){
    
    let elevator = $(".theElevator")[0];
    let focusCheckBox = $("#focus")[0];
    let folowCheckBox = $("#folow")[0];

    let moveTime = Math.abs(elevator.floor - floor);
    let moveTimeSeconds = (moveTime/MOOVE_SPEED);
    let moveTimeMilSeconds = (moveTime/MOOVE_SPEED) * 1000;
    let moveToPx = (FLOORS * FLOOR_HEIGHT) - (FLOOR_HEIGHT * floor) + (FLOORS - floor) ;
    let moveFromPx = (FLOORS * FLOOR_HEIGHT) - (FLOOR_HEIGHT * elevator.floor) + (FLOORS - elevator.floor);

    let currentScrollPosition = $( window ).scrollTop();
    let currentLiftPosition = $( elevator ).offset().top;
    let windowHeight = $( window ).height();

    let usersInLift = [];


    if(elevator.floor != floor && !elevator.move){ // If lift not in move and needed floor is not current lift floor

        // --------------------------------------------------------------------------------------------------------------------------------------------

        usersInLift = getUsers(elevator.floor); // Get users who ready to move

        elevator.move = true; // Set the elevator in move state
        elevator.floor = floor; // Set lift current position

        $(elevator).css({"transitionDuration": moveTimeSeconds + "s","top" : moveToPx + "px"}); // move lift
        $(usersInLift).css({"transitionDuration": moveTimeSeconds + "s","top": calcTopFloor(floor) + "px"}); // move users in lift

        // --------------------------------------------------------------------------------------------------------------------------------------------
        // Focus screen into Lift if it out of screen
        //
        if( ( currentScrollPosition > (currentLiftPosition + FLOOR_HEIGHT) ) || ( (windowHeight + currentScrollPosition) < currentLiftPosition ) ){
            if(focusCheckBox.checked){
                $('html, body').animate({scrollTop: moveFromPx}, 1000); // focus on lift
            }
            // moveTimeMilSeconds = (moveTimeMilSeconds > 1000 ? moveTimeMilSeconds - 1000 : moveTimeMilSeconds); // reduce folow time
        }
        if(folowCheckBox.checked){
            $('html, body').animate({scrollTop: moveToPx}, moveTimeMilSeconds); // Move screen focus to the end moving position
        }
        //
        // --------------------------------------------------------------------------------------------------------------------------------------------

    }else{
        $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" ); // Set all buttons in wait mode
    }

    // When elevator finish moving
    $(elevator).one("transitionend webkitTransitionEnd oTransitionEnd",function(){
        elevator.move = false; // Remove move state
        
        $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" ); // Set all buttons in wait mode
        
        $.each(usersInLift, function(userId, user){
            user.currentFloor = elevator.floor;
            if(user.wantMoveToFloor == elevator.floor){ // when user on his floor
                $(user).find(".popover").hide(); // hide popover
                user.wantChangeFloor = false; // remove flags
                user.waitLift = false;
                $(user).animate({"left": "0px"}, 500,"linear", function(){ // walk out from lift
                    walk(user); // resume user wlaking
                });
            }
        });

        usersInLift = getUsers(elevator.floor); // check again who ready to move
        $.each(usersInLift, function(userId, user){
            if(user.wantChangeFloor && user.currentFloor == elevator.floor){
                $(user).animate({"left": "-34px"}, 500,"linear"); // come in lift
            }
        });

    });

}

// this function collects users who want to move
function getUsers(elevatorCurrentFloor){
    let usersInLift = [];
    $(".user").each(function(userId, user){
        if(user.currentFloor == elevatorCurrentFloor && user.waitLift){
            usersInLift.push(user);
        }
    });
    return usersInLift;
}

