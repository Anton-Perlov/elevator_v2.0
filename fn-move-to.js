
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



    if(elevator.floor != floor && !elevator.move){ // If lift not in move and needed floor is not current lift floor

        elevator.move = true; // Set the elevator in move state
        elevator.floor = floor; // Set lift current position

        elevator.style.transitionDuration = moveTimeSeconds + "s"; // Set time for transition
        elevator.style.top = moveToPx + "px"; // Set Top position for transition
        
        // Focus screen into Lift if it out of screen
        if( ( currentScrollPosition > (currentLiftPosition + FLOOR_HEIGHT) ) || ( (windowHeight + currentScrollPosition) < currentLiftPosition ) ){
            if(focusCheckBox.checked){
                $('html, body').animate({scrollTop: moveFromPx}, 1000); // focus on lift
            }
            // moveTimeMilSeconds = (moveTimeMilSeconds > 1000 ? moveTimeMilSeconds - 1000 : moveTimeMilSeconds); // reduce folow time
        }
        if(folowCheckBox.checked){
            $('html, body').animate({scrollTop: moveToPx}, moveTimeMilSeconds); // Move screen focus to the end moving position
        }

    }else{
        $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" ); // Set all buttons in wait mode
    }

    // When elevator finish moving
    $(elevator).one("transitionend webkitTransitionEnd oTransitionEnd",function(){
        elevator.move = false; // Remove move state
        $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" ); // Set all buttons in wait mode
    });

}
