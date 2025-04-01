(function($) {
	"use strict";

    if ($('.clipboard-icon').length) {
      var clipboard = new ClipboardJS('.clipboard-icon');

      $('.clipboard-icon').attr('data-bs-toggle', 'tooltip').attr('title', 'کپی به کلیپ بورد');

      // $('[data-bs-toggle="tooltip"]').tooltip();

       clipboard.on('success', function(e) {
        e.trigger.classList.value = 'clipboard-icon btn-current'
        $('.btn-current').tooltip('hide');
        e.trigger.dataset.originalTitle = 'Copied';
        $('.btn-current').tooltip('show');
        setTimeout(function(){
            $('.btn-current').tooltip('hide');
            e.trigger.dataset.originalTitle = 'کپی به کلیپ بورد';
            e.trigger.classList.value = 'clipboard-icon'
        },1000);
        e.clearSelection();
      });
    }




})(jQuery);