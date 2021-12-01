var swiper = new Swiper(".mySwiper", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
	},
});
var swiper = new Swiper(".mySwiper_booking", {
	loop: true,
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
	},
});
var swiper = new Swiper(".mySwiper_comments", {
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 2,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
var swiper = new Swiper(".mySwiper_ad", {
	slidesPerView: 3,
	spaceBetween: 30,
	slidesPerGroup: 3,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
