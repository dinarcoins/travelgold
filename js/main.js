var swiper = new Swiper(".mySwiper", {
	loop: true,
	// autoplay: {
	// 	delay: 2000,
	// },
	// speed: 800,
	pagination: {
		el: ".swiper-pagination",
	},
});
var swiper = new Swiper(".mySwiper_booking", {
	loop: true,
	autoplay: {
		delay: 2000,
	},
	speed: 800,
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
	autoplay: {
		delay: 2000,
	},
	speed: 800,
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
	autoplay: {
		delay: 2000,
	},
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
// smail navbar header when scroll down
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
		document.getElementById("header-top").style.padding = "0px 0px";
		document.getElementById("header-top").style.transition = "0.4s";
		document.getElementById("header-logo").style.width = "50%";
		document.getElementById("header-logo").style.transition = "0.4s";
		document.getElementById("header-mid").style.display = "none";
		document.getElementById("bg-header-top").style.height = "130px";
	} else {
		document.getElementById("header-top").style.padding = "9px 0px";
		document.getElementById("header-top").style.transition = "0.4s";
		document.getElementById("header-logo").style.transition = "0.4s";
		document.getElementById("header-logo").style.width = "100%";
		document.getElementById("header-mid").style.display = "block";
		document.getElementById("bg-header-top").style.height = "160px";
	}
}
// back to top
var btn = $("#button-backtotop");

$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		btn.addClass("show");
	} else {
		btn.removeClass("show");
	}
});

btn.on("click", function (e) {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 }, "300");
});
// dark mode
function myFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
