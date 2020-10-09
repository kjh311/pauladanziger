$( document ).ready(function() {
    console.log( "ready!" );
    $('#btn-id').click(function(e){
    e.stopPropagation()
});
});