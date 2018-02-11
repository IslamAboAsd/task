jQuery(document).ready(function(){

    "use strict";


    $(".close").on("click", function(){ $(this).parent().parent().addClass('hidden')});
    $(".big").on("click", function(){ $(this).parent().parent().parent().toggleClass('bigger').siblings().toggleClass('hidden') });
   
    $('.cus').click(function () {

        $('aside').toggleClass('hidden-aside');
        $('.veiw').toggleClass('add-width');
        $('.myNav').toggleClass('add-width-nav');

       
    })
});