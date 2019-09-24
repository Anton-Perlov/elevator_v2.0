function createUsers(){
    let floors = $("#floors")[0];
    
    for (let i = 0; i < USERS_COUNT; i++) {
        let picId = Math.floor(Math.random() * users.length); // random image
        $(floors).append("<div class='user' userId=" + i + "'><div class='popover'></div><img src='images/" + users[picId] + "' /></div>"); // add user
    }
    $(".user").css({top:calcTopFloor(1),left: 0}); // put users to first floor
    
    $(".user").each(function(userId, user){
        user.position = 0;
        user.currentFloor = 1;
        user.wantMoveToFloor = 1;
        user.wantChangeFloor = false;
        user.inLift = false;
        user.waitLift = false;
    });

}

function calcTopFloor(floor){
    // Calculate top position of user on floor
    return (FLOORS - floor) * (FLOOR_HEIGHT+1) + (FLOOR_HEIGHT - 32);
}

// List of images
let users = [
    "user_alien.png",
    "user_bart.png",
    "user_batman.png",
    "user_c3po.png",
    "user_clown.png",
    "user_cowboy.png",
    "user_crabs.png",
    "user_darth_vader.png",
    "user_dracula.png",
    "user_freddy.png",
    "user_halk.png",
    "user_ironman.png",
    "user_lisa.png",
    "user_mexican.png",
    "user_nude_female.png",
    "user_patrick.png",
    "user_plankton.png",
    "user_spiderman.png",
    "user_sponge_bob.png",
    "user_superman.png",
    "user_yoda.png"
];