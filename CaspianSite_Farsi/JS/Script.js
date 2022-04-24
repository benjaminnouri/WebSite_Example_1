
$(document).ready(function () {

    //var offset_li_one_y = $("headr").offset().top;

    var offset_li_two_y = $("#about").offset().top;
    var offset_li_three_y = $("#OurServices").offset().top;
    var offset_li_four_y = $('#gallery').offset().top;
    var offset_li_five_y = $('#amazing-team').offset().top;
    var offset_li_six_y = $('#ContactUS').offset().top;


    $(".li_one").click(function () {

        $(".li_two").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_five").removeClass("active");
        $(".li_six").removeClass("active");
        $(this).addClass("active");
    });

    $(".li_two").click(function () {

        $(".li_one").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_five").removeClass("active");
        $(".li_six").removeClass("active");
        $(this).addClass("active");

    });

    $(".li_three").click(function () {

        $(".li_one").removeClass("active");
        $(".li_two").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_five").removeClass("active");
        $(".li_six").removeClass("active");
        $(this).addClass("active");
    });

    $(".li_four").click(function () {

        $(".li_one").removeClass("active");
        $(".li_two").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_five").removeClass("active");
        $(".li_six").removeClass("active");
        $(this).addClass("active");
    });
    $(".li_five").click(function () {

        $(".li_one").removeClass("active");
        $(".li_two").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_six").removeClass("active");
        $(this).addClass("active");
    });
    $(".li_six").click(function () {

        $(".li_one").removeClass("active");
        $(".li_two").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_five").removeClass("active");
        $(this).addClass("active");
    });
    // When do scroll change navbar
    $(document).scroll(function () {

        if ($(document).scrollTop() < offset_li_two_y) {
          
            $(".li_two").removeClass("active");
            $(".li_three").removeClass("active");
            $(".li_four").removeClass("active");
            $(".li_five").removeClass("active");
            $(".li_six").removeClass("active");
            $(".li_one").addClass("active");
        }
    });
    $(document).scroll(function () {

        if ($(document).scrollTop() >= offset_li_two_y && $(document).scrollTop() < offset_li_three_y) {
          
            $(".li_one").removeClass("active");
            $(".li_three").removeClass("active");
            $(".li_four").removeClass("active");
            $(".li_five").removeClass("active");
            $(".li_six").removeClass("active");
            $(".li_two").addClass("active");

        }
    });
    $(document).scroll(function () {

        if ($(document).scrollTop() >= offset_li_three_y && $(document).scrollTop() < offset_li_four_y) {
         
            $(".li_one").removeClass("active");
            $(".li_two").removeClass("active");
            $(".li_four").removeClass("active");
            $(".li_five").removeClass("active");
            $(".li_six").removeClass("active");
            $(".li_three").addClass("active");
        }
    });
    $(document).scroll(function () {

        if ($(document).scrollTop() >= offset_li_four_y && $(document).scrollTop() < offset_li_five_y) {
    
            $(".li_one").removeClass("active");
            $(".li_two").removeClass("active");
            $(".li_three").removeClass("active");
            $(".li_five").removeClass("active");
            $(".li_six").removeClass("active");
            $(".li_four").addClass("active");
        }
    });

    $(document).scroll(function () {

        if ($(document).scrollTop() >= offset_li_five_y && $(document).scrollTop() < offset_li_six_y -25) {
        $(".li_one").removeClass("active");
        $(".li_two").removeClass("active");
        $(".li_three").removeClass("active");
        $(".li_four").removeClass("active");
        $(".li_six").removeClass("active");
        $(".li_five").addClass("active");

        }
    });

    $(document).scroll(function () {

        if ($(document).scrollTop() >= offset_li_six_y - 60) {
            $(".li_one").removeClass("active");
            $(".li_two").removeClass("active");
            $(".li_three").removeClass("active");
            $(".li_four").removeClass("active");
            $(".li_five").removeClass("active");
            $(".li_six").addClass("active");

        }
    });
});




