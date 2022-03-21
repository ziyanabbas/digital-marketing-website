$(document).ready(function(){

    $('ul.navbar-nav li a').click(function(){
        $('ul.navbar-nav li').removeClass('active');
        $(this).parent().addClass('active');
    });

    });