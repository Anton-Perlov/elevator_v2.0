function createButtons() {
    
    let buttonsBlock = $("#buttons")[0];
    buttonsBlock.innerHTML = "";
    
    // Insert to floor selector box buttons
    for (let i = 0; i < FLOORS; i++) {
        $(buttonsBlock).append("<button type='button' class='btn btn-secondary navigateBtn' value='" + (FLOORS - i) + "'>" + (FLOORS - i) + "</button>");
    }
    
    setActive();
    
    return true;

};

function setActive(){

    // make buttons active
    $('.navigateBtn').on('click touch', function(){
        $('.navigateBtn').removeClass( "btn-success" ).addClass( "btn-secondary" );
        $(this).removeClass( "btn-secondary" ).addClass( "btn-success" );
        moveTo(this.value); // this function in fn-move-to.js file
    });
}