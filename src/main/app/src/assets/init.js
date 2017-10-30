(function($){
    $(function(){

        $('.button-collapse').sideNav();
        // MODAL
        $(document).ready(function(){
            $('.modal').modal({
                ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
                    $('.collapsible').collapsible();
                }
            });
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space