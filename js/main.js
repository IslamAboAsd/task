jQuery(document).ready(function(){

    "use strict";


    $(".close").on("click", function(){ $(this).parent().parent().addClass('hidden')});

    $(".big").on("click", function(){ $(this).parent().parent().parent().toggleClass('bigger').siblings().toggleClass('hidden') });
});