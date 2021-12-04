var swiper = new Swiper(".mySwiper", {
	loop: true,
	autoplay: {
		delay: 2000,
	},
	speed: 800,
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
	slidesPerView: 1,
	spaceBetween: 30,
	slidesPerGroup: 1,
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
	breakpoints: {
		// when window width is >= 320px
		1024: {
			slidesPerView: 2,
			spaceBetween: 20,
			slidesPerGroup: 2,
		},
	},
});
var swiper = new Swiper(".mySwiper_ad", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	loop: true,
	autoplay: {
		delay: 1000,
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
	breakpoints: {
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 1,
		},
	},
});
// small navbar header when scroll down
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
		document.getElementById("bg-header-top").style.height = "85px";
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
// button change color theme
function darkmodeFunction() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}
// mobile menu
// document.querySelector(".mobile-toggle").addEventListener("click", () => {
// 	document.querySelector(".nav").classList.toggle("active");
// 	document.querySelector(".mobile-overlay").classList.toggle("active");
// 	document.querySelector("header").classList.toggle("active");
// });
function spanhideFunction() {
	var spanhide = document.getElementById("name-tag-id");
	if (spanhide.style.display === "none") {
		spanhide.style.display = "block";
	} else {
		spanhide.style.display = "none";
	}
}
function spanhide2Function() {
	var spanhide = document.getElementById("name-tag-id-2");
	if (spanhide.style.display === "none") {
		spanhide.style.display = "block";
	} else {
		spanhide.style.display = "none";
	}
}
