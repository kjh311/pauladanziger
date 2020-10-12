$( document ).ready(function() {
   console.log( "ready!" );



    $(".dropdown-toggle").dropdown();

    $(document).on("click", function(event){
        // var $trigger = $(".dropdown");
        // if($trigger !== event.target && !$trigger.has(event.target).length){
           $(".dropdown-toggle").dropdown();        }     


	imgLightbox("img-lightbox-link");
    
});