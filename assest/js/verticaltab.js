$(document).ready(function () {
    $('.nav-tabs a').click(function (e) {
        $(this).tab('show');
        e.preventDefault();    
        $('.nav-tabs li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.tab-pane').removeClass('in active');
        $($(this).attr('href')).addClass('in active');
    });
  });