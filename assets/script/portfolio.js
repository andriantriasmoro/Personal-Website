var $project = $('.project');

$project.isotope({
    itemSelector: '.item',
    layoutMode: 'fitRows'
});

$('ul.filter>li').click(function () {

    var filter = $(this).attr('data-filter');

    $('ul.filter>li').removeClass('active').delay(1000);
    $(this).addClass('active').delay(500);

    $project.isotope({
        filter: filter
    })
});