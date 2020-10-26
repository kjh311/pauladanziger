



$( document ).ready(function() {
    
      $(".collapse-button").click(function(){
        event.stopPropagation();
      });

      // $("body").click(function(){
      //   $('.navbar-collapse').slideUp();
      // });

      // $(".navbar-toggler").click(function(){
      //   $(".navbar-toggler").removeClass('dropdown-collapsed');
      // });
      // $('.navbar-toggler').click(function(){
      //   $('.navbar-collapse').slideToggle();
      // });


// alert('works');


      $(".dropdown-collapsed").click(function(){
        $(".collapse1").slideUp();
        $(".collapse2").slideUp();
        $(".collapse3").slideUp();
        $(".collapse4").slideUp();
        $(".collapse5").slideUp();
        $(".collapse6").slideUp();
        $(".collapse7").slideUp();
        $(".collapse8").slideUp();
        $('.navbar-collapse').removeClass('show');
      });

      $(".all-books").click(function(){
        $(".collapse1").slideUp();
        $(".collapse2").slideUp();
        $(".collapse3").slideUp();
        $(".collapse4").slideUp();
        $(".collapse5").slideUp();
        $(".collapse6").slideUp();
        $(".collapse7").slideUp();
        $(".collapse8").slideUp();
        $('.navbar-collapse').removeClass('show');
      });

  $(".collapse-button-1").click(function(){
      $(".collapse1").slideToggle();
      $(".collapse2").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });

  $(".collapse-button-2").click(function(){
      $(".collapse2").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });

    $(".collapse-button-3").click(function(){
      $(".collapse3").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse2").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });

    $(".collapse-button-4").click(function(){
      $(".collapse4").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse2").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });
    $(".collapse-button-5").click(function(){
      $(".collapse5").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse2").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });
    $(".collapse-button-6").click(function(){
      $(".collapse6").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse2").slideUp();
      $(".collapse7").slideUp();
      $(".collapse8").slideUp();
  });
    $(".collapse-button-7").click(function(){
      $(".collapse7").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse2").slideUp();
      $(".collapse8").slideUp();
  });
    $(".collapse-button-8").click(function(){
      $(".collapse8").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse2").slideUp();
  });
        $(".all-books").click(function(){
      $(".collapse9").slideToggle();
      $(".collapse1").slideUp();
      $(".collapse2").slideUp();
      $(".collapse3").slideUp();
      $(".collapse4").slideUp();
      $(".collapse5").slideUp();
      $(".collapse6").slideUp();
      $(".collapse7").slideUp();
      $(".collapse2").slideUp();
  });



});