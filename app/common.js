'use strict';

import './sass/main.sass';

$('.next-step').on('click', function () {
	$(this).parent().addClass('hide');
});

$('.grid-item').on('click', function () {
	$(this).toggleClass('active');
});

$('.select-all').on('click', function () {
	$(this).parent().find('.grid-item').addClass('active');
	$(this).addClass('active');
});

$('.select-one').on('click', function () {
	$('.select-one').removeClass('active');
	$(this).addClass('active');
});
