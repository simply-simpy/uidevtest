$('.resize').click(function(){
    $('.resize').toggle();
    $(this).parent().nextAll('p').toggleClass('larger');
   })