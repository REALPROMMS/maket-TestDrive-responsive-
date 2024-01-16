// !Скрипт для Swiper
const swiper = new Swiper('.mySwiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	slidesPerView: 4,
	freeMode: true,
	autoplay: {
		delay: 2500,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// how much slides
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 2,
		},
		627: {
			slidesPerView: 4,
		},
	},
})

// !Скрипт для плавного скролла по якорям на странице
const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const goto = anchor.hasAttribute('href')
			? anchor.getAttribute('href')
			: 'body'
		document.querySelector(goto).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		})
	})
}
