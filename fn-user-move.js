function userMove(){

    $(".user").each(function(userId, user){
        walk(user); // make each user active
    });

}

function walk(user){
    
    let newPosition = getNewPosition(user); // calculate new destination

    user.position = newPosition.position; // save current destination for calculating timnig in next move
    
    if(!user.waitLift){ // if user dont wait lift
        $(user).animate(
            {left: newPosition.position + "px"}, newPosition.timing, "linear", // walk
            function(){ // when user got the destination
                if(newPosition.wantChangeFloor){ // if user decided to change floor
                    user.wantMoveToFloor = newPosition.wantMoveToFloor;
                    user.wantChangeFloor = true;
                    user.waitLift = true;
                    $(user).find(".popover").html(user.wantMoveToFloor).show(); // show decided floor
                } else {
                    walk(user); // walk again
                }
            }
        );
    }
}

function getNewPosition(userObject){ // calculate
    let retVal = [];
    let maxLeft = parseInt($("#floors").outerWidth() - 32 ,10); // get maximum position
    
    retVal.position = Math.floor(Math.random() * maxLeft); // generate new position
    
    if(changeFloorDecision()){
        retVal.position = 0;
        retVal.wantChangeFloor = true;
        retVal.wantMoveToFloor = getNewFloor(userObject.currentFloor);
    }

    retVal.timing = Math.abs(userObject.position - retVal.position) * USER_MOOVE_SPEED; // calculate the timing of move
    
    return retVal;
}

function changeFloorDecision(){
    if(Math.floor(Math.random() * CHANCE) ==1 ){
        return true;
    };
    return false;
}

function getNewFloor(currentFloor){
    let newFloor = Math.floor(Math.random() * FLOORS) + 1;
    if(FLOORS>1 && newFloor==currentFloor) {
        newFloor = getNewFloor(currentFloor);
    }
    return newFloor;
}
