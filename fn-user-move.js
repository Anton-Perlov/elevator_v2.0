function userMove(){

    let user = $(".user");

    for(let userId = 0 ; userId < user.length ; userId++){
        
        user[userId].position = 0;
        user[userId].wantChangeFloor = false;

        move();

        function move(){
            let newPosition = getNewPosition(user[userId].position);
            user[userId].position = newPosition.position;
            
            $(user[userId]).animate(
                {left: newPosition.position + "px"}, newPosition.timing, "linear", move
            );
        }
    }

}

function getNewPosition(currentPosition){
    let retVal = [];
    let maxLeft = parseInt($("#floors").outerWidth() - 32 ,10); // get maximum position

    retVal.position = Math.floor(Math.random() * maxLeft); // generate new position
    retVal.timing = Math.abs(currentPosition - retVal.position) * USER_MOOVE_SPEED; // calculate the timing of move
    
    return retVal;
}