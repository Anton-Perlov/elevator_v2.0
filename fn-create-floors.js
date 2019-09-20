function createFloors(){
    let floors = $("#floors")[0];
    $(floors).html("");


    for (let i = 0; i < FLOORS; i++) {
        $(floors).append("<div class='row floor' floor=" + (FLOORS - i) + "'>" + (FLOORS - i) + "</div>");
    }

    $(".floor").height(FLOOR_HEIGHT);
}