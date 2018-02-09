jQuery(document).ready(function(){

    "use strict";

$("").click( function () {
    $(this).toggleClass('active');
    $(this).siblings().removeClass("active");
    
    return false;
});
$(".close").on("click", function(){
    $(this).parent().parent().addClass('hidden')
})
});