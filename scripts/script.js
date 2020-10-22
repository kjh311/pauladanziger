



$( document ).ready(function() {
    
      $(".collapse-button").click(function(){
        event.stopPropagation();
      });

      // $("body").click(function(){
      //   $('.navbar-collapse').hide();
      // });

      // $(".navbar-toggler").click(function(){
      //   $(".navbar-toggler").removeClass('dropdown-collapsed');
      // });

      $(".dropdown-collapsed").click(function(){
        $(".collapse1").hide();
        $(".collapse2").hide();
        $(".collapse3").hide();
        $(".collapse4").hide();
        $(".collapse5").hide();
        $(".collapse6").hide();
        $(".collapse7").hide();
        $(".collapse8").hide();
        $('.navbar-collapse').slideToggle();
      });

  $(".collapse-button-1").click(function(){
      $(".collapse1").slideToggle();
      $(".collapse2").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });

  $(".collapse-button-2").click(function(){
      $(".collapse2").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });

    $(".collapse-button-3").click(function(){
      $(".collapse3").slideToggle();
      $(".collapse1").hide();
      $(".collapse2").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });

    $(".collapse-button-4").click(function(){
      $(".collapse4").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse2").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });
    $(".collapse-button-5").click(function(){
      $(".collapse5").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse2").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });
    $(".collapse-button-6").click(function(){
      $(".collapse6").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse2").hide();
      $(".collapse7").hide();
      $(".collapse8").hide();
  });
    $(".collapse-button-7").click(function(){
      $(".collapse7").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse2").hide();
      $(".collapse8").hide();
  });
    $(".collapse-button-8").click(function(){
      $(".collapse8").slideToggle();
      $(".collapse1").hide();
      $(".collapse3").hide();
      $(".collapse4").hide();
      $(".collapse5").hide();
      $(".collapse6").hide();
      $(".collapse7").hide();
      $(".collapse2").hide();
  });



});