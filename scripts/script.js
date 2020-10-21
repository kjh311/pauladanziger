// (function($) { // Begin jQuery
//   $(function() { // DOM ready
//     // If a link has a dropdown, add sub menu toggle.
//     $('nav ul li a:not(:only-child)').click(function(e) {
//       $(this).siblings('.nav-dropdown').toggle();
//       // Close one dropdown when selecting another
//       $('.nav-dropdown').not($(this).siblings()).hide();
//       e.stopPropagation();
//     });
//     // Clicking away from dropdown will remove the dropdown class
//     $('html').click(function() {
//       $('.nav-dropdown').hide();
//     });
//     // Toggle open and close nav styles on click
//     $('.nav-toggle').click(function() {
//       $('nav ul').slideToggle();
//     });
//     // Hamburger to X toggle
//     $('.nav-toggle').on('click', function() {
//       this.classList.toggle('active');
//     });

    


//     $('.collapse').collapse()
//   }); // end DOM ready
// })(jQuery); // end jQuery




$( document ).ready(function() {
    
      $(".collapse-button").click(function(){
        event.stopPropagation();
      });

      $(".collapsed").click(function(){
        
        $(".collapse1").hide();
        $(".collapse2").hide();
        $(".collapse3").hide();
        $(".collapse4").hide();
        $(".collapse5").hide();
        $(".collapse6").hide();
        $(".collapse7").hide();
        $(".collapse8").hide();
        $('.navbar-collapse').collapse('hide');
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