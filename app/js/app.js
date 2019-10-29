$(function() {
    $('.next-step').on('click', function() {
        var stepIndex = $(this).parents('.form-step').data('step');
        $('.form-step').hide();
        $(".form-step[data-step='" + stepIndex + 1 +"']").show();
    });
})(jQuery);