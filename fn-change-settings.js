
function changeSettings(){
    // Set floor selector default value and make it changeable. 
    let floorsSelector = $("#floors-number-input")[0];
    $(floorsSelector).val(FLOORS);

    // Set tenant selector default value and make it changeable. 
    let tenantSelector = $("#tenant-number-input")[0];
    $(tenantSelector).val(USERS_COUNT);

    $("#functionsForm").submit(function() { // on submit form, return false
        recalc();
        return false;
    });

    $("#ApplyChanges").on("click", function(){ 
        recalc();
    });


    function recalc(){

        if($(floorsSelector).val()>24) { $(floorsSelector).val(24) }; // Max value is 24
        if($(floorsSelector).val()<1) { $(floorsSelector).val(1) }; // Min value is 1
        FLOORS = $(floorsSelector).val();

        if($(tenantSelector).val()>10) { $(tenantSelector).val(10) }; // Max value is 10
        if($(tenantSelector).val()<1) { $(tenantSelector).val(1) }; // Min value is 1
        USERS_COUNT = $(tenantSelector).val();
        
        reInit();
    }
};

