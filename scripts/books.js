$( document ).ready(function() {
    $(".read-more-button").click(function() {
        $(".content").slideToggle("slow");
        var $this = $(this);
        $this.toggleClass("open");

        if ($this.hasClass("open")) {
            $this.html("Read Less");
        } else {
            $this.html("Read More");
        }
        $(".summary").toggle();
    });
    
});